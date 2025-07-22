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
  const [budget, setBudget] = useState([10000]);
  const [savings, setSavings] = useState([50000]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = (data: FormData) => {
    // Simulate form submission
    toast({
      title: "Request sent!",
      description: "We will get back to you within 24 hours.",
    });
    reset();
    setBudget([10000]);
    setSavings([50000]);
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
            Request <span className="text-primary">Project</span>
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light">
            Tell us about your project and we'll find the right solution together.
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
                  {...register("name", { required: "Name is required" })}
                  className="bg-background border-secondary text-foreground"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  Email *
                </label>
                <Input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="bg-background border-secondary text-foreground"
                  placeholder="your@email.com"
                  type="email"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  Company
                </label>
                <Input
                  {...register("company")}
                  className="bg-background border-secondary text-foreground"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  Phone
                </label>
                <Input
                  {...register("phone")}
                  className="bg-background border-secondary text-foreground"
                  placeholder="+1 123 456789"
                  type="tel"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                <span className="text-primary">💰</span> How much more revenue per year?: <span className="text-primary font-bold">{formatBudget(savings[0])}</span>
              </label>
              <div className="px-4 py-6 bg-primary/5 rounded-lg border border-primary/10">
                <Slider
                  value={savings}
                  onValueChange={setSavings}
                  max={500000}
                  min={10000}
                  step={10000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2 font-raleway">
                  <span>10k€</span>
                  <span>100k€</span>
                  <span>250k€</span>
                  <span>500k€+</span>
                </div>
                <p className="text-xs text-primary mt-3 font-raleway text-center">
                  We'll show you how to achieve these goals through automation
                </p>
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
                  max={50000}
                  min={1000}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2 font-raleway">
                  <span>1k€</span>
                  <span>15k€</span>
                  <span>30k€</span>
                  <span>50k€</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                Project Details *
              </label>
              <Textarea
                {...register("message", { required: "Please describe your project" })}
                className="bg-background border-secondary text-foreground min-h-[120px]"
                placeholder="Describe your project, goals and challenges..."
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Request
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ProjectForm;