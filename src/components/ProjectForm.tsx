import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ProjectForm = () => {
  const [budget, setBudget] = useState([25000]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = (data: FormData) => {
    // Simulate form submission
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei dir.",
    });
    reset();
    setBudget([25000]);
  };

  const formatBudget = (value: number) => {
    if (value < 1000) return `${value}€`;
    return `${Math.round(value / 1000)}k€`;
  };

  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            Projekt <span className="text-primary">anfragen</span>
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light">
            Erzähl uns von deinem Projekt und wir finden gemeinsam die passende Lösung.
          </p>
        </div>

        <Card className="bg-card border-secondary p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  Name *
                </label>
                <Input
                  {...register("name", { required: "Name ist erforderlich" })}
                  className="bg-background border-secondary text-foreground"
                  placeholder="Dein Name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  E-Mail *
                </label>
                <Input
                  {...register("email", { 
                    required: "E-Mail ist erforderlich",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Ungültige E-Mail-Adresse"
                    }
                  })}
                  className="bg-background border-secondary text-foreground"
                  placeholder="deine@email.de"
                  type="email"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  Unternehmen
                </label>
                <Input
                  {...register("company")}
                  className="bg-background border-secondary text-foreground"
                  placeholder="Dein Unternehmen"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  Telefon
                </label>
                <Input
                  {...register("phone")}
                  className="bg-background border-secondary text-foreground"
                  placeholder="+49 123 456789"
                  type="tel"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                Budget: {formatBudget(budget[0])}
              </label>
              <div className="px-4 py-6">
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  max={100000}
                  min={5000}
                  step={2500}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2 font-raleway">
                  <span>5k€</span>
                  <span>25k€</span>
                  <span>50k€</span>
                  <span>100k€+</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                Projekt-Details *
              </label>
              <Textarea
                {...register("message", { required: "Bitte beschreibe dein Projekt" })}
                className="bg-background border-secondary text-foreground min-h-[120px]"
                placeholder="Beschreibe dein Projekt, deine Ziele und Herausforderungen..."
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
              >
                <Send className="w-4 h-4 mr-2" />
                Anfrage senden
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Direkt anrufen
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground font-raleway">
                <Mail className="w-4 h-4 inline mr-1" />
                Oder schreib uns direkt: <span className="text-primary">hello@botti.co</span>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ProjectForm;