import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
          budget: 0,
          revenue: 0
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
          message: validatedData.message
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