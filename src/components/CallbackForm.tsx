import { useForm } from 'react-hook-form';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from 'zod';

interface FormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

const CallbackForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { toast } = useToast();
  const { t } = useLanguage();

  const onSubmit = async (data: FormData) => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      // Validation schema
      const schema = z.object({
        name: z.string().trim().nonempty().max(100),
        phone: z.string().trim().nonempty().max(50),
        email: z.string().trim().email().max(255).optional().or(z.literal('')),
        message: z.string().trim().max(1000).optional().or(z.literal(''))
      });

      const validatedData = schema.parse(data);

      // Send email notification
      const response = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'callback',
          name: validatedData.name,
          phone: validatedData.phone,
          email: validatedData.email,
          message: validatedData.message
        }
      });

      if (response.error) {
        if (import.meta.env.DEV) {
          console.error('Email sending failed:', response.error);
        }
      }

      toast({
        title: t('callback.success.title'),
        description: t('callback.success.description'),
      });
      
      reset();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error submitting form:', error);
      }
      toast({
        title: t('callback.error.title'),
        description: t('callback.error.description'),
        variant: "destructive"
      });
    }
  };

  return (
    <section id="callback-form" className="bg-secondary py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            {t('callback.title')}
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light">
            {t('callback.subtitle')}
          </p>
        </div>

        <Card className="bg-card border-secondary p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  {t('callback.name')} *
                </label>
                <Input
                  {...register("name", { 
                    required: t('callback.name.required'),
                    maxLength: { value: 100, message: "Name zu lang" }
                  })}
                  className="bg-background border-secondary text-foreground"
                  placeholder={t('callback.name.placeholder')}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                  {t('callback.phone')} *
                </label>
                <Input
                  {...register("phone", { 
                    required: t('callback.phone.required'),
                    maxLength: { value: 50, message: "Telefonnummer zu lang" }
                  })}
                  className="bg-background border-secondary text-foreground"
                  placeholder={t('callback.phone.placeholder')}
                  type="tel"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                {t('callback.email')}
              </label>
              <Input
                {...register("email", {
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: t('callback.email.invalid')
                  },
                  maxLength: { value: 255, message: "Email zu lang" }
                })}
                className="bg-background border-secondary text-foreground"
                placeholder={t('callback.email.placeholder')}
                type="email"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-raleway">
                {t('callback.message')}
              </label>
              <Textarea
                {...register("message", {
                  maxLength: { value: 1000, message: "Nachricht zu lang" }
                })}
                className="bg-background border-secondary text-foreground min-h-[100px]"
                placeholder={t('callback.message.placeholder')}
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="px-10"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('callback.submit')}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default CallbackForm;
