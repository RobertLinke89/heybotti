import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookingConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, date, time } = location.state || {};

  useEffect(() => {
    if (!name || !date || !time) {
      navigate("/booking");
    }
  }, [name, date, time, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <CheckCircle className="h-16 w-16 text-primary" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Termin erfolgreich gebucht!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Vielen Dank, {name}! Wir haben Ihre Buchung erhalten und werden uns in Kürze bei Ihnen melden.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Ihr Termin</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">{date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">{time} Uhr</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent/50 rounded-lg p-4 mb-8 text-sm text-muted-foreground">
                <p>
                  Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu Ihrem Termin.
                </p>
              </div>

              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Startseite
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingConfirmed;
