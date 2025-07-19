import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JobsCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
            Werde Teil unseres <span className="text-primary">Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Du denkst Automatisierung neu und möchtest echten Impact schaffen? 
            Dann bist du bei uns richtig. Entdecke unsere offenen Stellen.
          </p>
        </div>

        <Button 
          onClick={() => navigate('/jobs')}
          size="lg"
          className="group"
        >
          Offene Stellen ansehen
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default JobsCTA;