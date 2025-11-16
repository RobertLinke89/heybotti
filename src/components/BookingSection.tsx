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
import { Clock, Calendar as CalendarIcon } from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name darf maximal 100 Zeichen lang sein"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
  phone: z.string().trim().min(1, "Telefonnummer ist erforderlich").max(50, "Telefonnummer darf maximal 50 Zeichen lang sein"),
  message: z.string().max(5000, "Nachricht darf maximal 5000 Zeichen lang sein").optional(),
});

const BookingSection = () => {
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
    
    if (!date || !selectedTime) {
      toast({
        title: "Fehler",
        description: "Bitte wählen Sie Datum und Uhrzeit aus.",
        variant: "destructive",
      });
      return;
    }

    try {
      bookingSchema.parse({ name, email, phone, message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validierungsfehler",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        name,
        email,
        phone,
        date: date.toLocaleDateString("de-DE"),
        time: selectedTime,
        message,
      };

      const { data, error } = await supabase.functions.invoke("create-calendly-booking", {
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
      if (import.meta.env.DEV) {
        console.error("Booking error:", error);
      }
      toast({
        title: "Fehler",
        description: "Die Buchung konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDateDisabled = (dateToCheck: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isPast = dateToCheck < today;
    const isSunday = dateToCheck.getDay() === 0;
    return isPast || isSunday;
  };

  return (
    <section id="booking-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-raleway">
            Dein Automation Check
          </h2>
          <p className="text-lg text-muted-foreground font-raleway">
            Sprich mit uns über dein Vorhaben in einem 30 Min Meeting.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Date and Time Selection */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendar */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Datum wählen
                  </h3>
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={isDateDisabled}
                  className="rounded-md border"
                />
              </div>

              {/* Time Selection */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Uhrzeit wählen
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className="w-full"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-8 border-t">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ihre Kontaktdaten
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Ihr Name"
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
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <Label htmlFor="message">Nachricht (optional)</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Haben Sie besondere Wünsche oder Fragen?"
                  rows={4}
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={!date || !selectedTime || isSubmitting}
            >
              {isSubmitting ? "Wird gebucht..." : "Termin buchen"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;
