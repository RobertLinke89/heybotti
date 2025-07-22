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
            Become part of our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You think automation differently and want to create real impact? 
            Then you're in the right place. Discover our open positions.
          </p>
        </div>

        <Button 
          onClick={() => navigate('/jobs')}
          size="lg"
          className="group"
        >
          View Open Positions
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default JobsCTA;