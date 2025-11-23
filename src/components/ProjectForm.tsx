import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from 'zod';

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
  const { t } = useLanguage();

  const onSubmit = async (data: FormData) => {
    try {
      // Validate with Zod
      const schema = z.object({
        name: z.string().trim().min(1, t('form.name.required')).max(100),
        email: z.string().trim().email(t('form.email.invalid')).max(255),
        company: z.string().trim().max(100).optional(),
        phone: z.string().trim().max(50).optional(),
        message: z.string().trim().min(1, t('form.details.required')).max(5000)
      });

      const validatedData = schema.parse(data);

      const { supabase } = await import("@/integrations/supabase/client");
      
      // Save to database
      const { error: dbError } = await supabase
        .from('project_requests')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || null,
          phone: validatedData.phone || null,
          message: validatedData.message,
          budget: budget[0],
          revenue: savings[0]
        });

      if (dbError) {
        throw new Error(dbError.message);
      }

      // Send email notification
      const response = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'contact',
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          phone: validatedData.phone,
          message: validatedData.message,
          budget: budget[0],
          revenue: savings[0]
        }
      });

      if (response.error) {
        if (import.meta.env.DEV) {
          console.error('Email sending failed:', response.error);
        }
        // Don't throw error here - request is saved in DB
      }

      toast({
        title: t('form.success.title'),
        description: t('form.success.description'),
      });
      
      reset();
      setBudget([10000]);
      setSavings([50000]);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error submitting form:', error);
      }
      toast({
        title: "Fehler",
        description: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    }
  };

  const formatBudget = (value: number) => {
    if (value < 1000) return `${value}€`;
    return `${Math.round(value / 1000)}k€`;
  };

  return (
    <section id="project-form" className="bg-secondary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            {t('form.title')} <span className="text-primary">{t('form.title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light">
            {t('form.subtitle')}
          </p>
        </div>

        <Card className="bg-card border-secondary p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  {t('form.name')} *
                </label>
                <Input
                  {...register("name", { required: t('form.name.required') })}
                  className="bg-background border-secondary text-foreground"
                  placeholder={t('form.name.placeholder')}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  {t('form.email')} *
                </label>
                <Input
                  {...register("email", { 
                    required: t('form.email.required'),
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: t('form.email.invalid')
                    }
                  })}
                  className="bg-background border-secondary text-foreground"
                  placeholder={t('form.email.placeholder')}
                  type="email"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  {t('form.company')}
                </label>
                <Input
                  {...register("company")}
                  className="bg-background border-secondary text-foreground"
                  placeholder={t('form.company.placeholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  {t('form.phone')}
                </label>
                <Input
                  {...register("phone")}
                  className="bg-background border-secondary text-foreground"
                  placeholder={t('form.phone.placeholder')}
                  type="tel"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                <span className="text-primary">💰</span> {t('form.revenue')}: <span className="text-primary font-bold">{formatBudget(savings[0])}</span>
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
                  {t('form.revenue.note')}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                {t('form.budget')}: {formatBudget(budget[0])}
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
                {t('form.details')} *
              </label>
              <Textarea
                {...register("message", { required: t('form.details.required') })}
                className="bg-background border-secondary text-foreground min-h-[120px]"
                placeholder={t('form.details.placeholder')}
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
                {t('form.submit')}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ProjectForm;