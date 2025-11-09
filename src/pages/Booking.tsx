import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Phone, Clock, Calendar as CalendarIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Booking = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !name || !email || !phone) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        type: 'callback',
        name,
        email,
        phone,
        date: date.toLocaleDateString("de-DE"),
        time: selectedTime,
      };

      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: bookingData,
      });

      if (error) throw error;

      navigate("/booking/confirmed", { 
        state: { 
          name, 
          date: date.toLocaleDateString("de-DE"), 
          time: selectedTime 
        } 
      });
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Fehler",
        description: "Die Buchung konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPastDate = (dateToCheck: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateToCheck < today;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Termin vereinbaren
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wählen Sie einen passenden Termin für ein unverbindliches Beratungsgespräch
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                  Datum & Uhrzeit wählen
                </h2>
                
                <div className="mb-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDate}
                    className="rounded-md border mx-auto"
                  />
                </div>

                {date && (
                  <div>
                    <Label className="flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4" />
                      Verfügbare Zeiten
                    </Label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Phone className="h-6 w-6 text-primary" />
                  Ihre Kontaktdaten
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefonnummer *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Nachricht (optional)</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Teilen Sie uns mit, worum es in dem Gespräch gehen soll..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!date || !selectedTime || isSubmitting}
                  >
                    {isSubmitting ? "Wird gebucht..." : "Termin buchen"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
