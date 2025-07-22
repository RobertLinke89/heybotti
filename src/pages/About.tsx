import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Button>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-6 font-raleway">
                About <span className="text-primary">Us</span>
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 border border-secondary">
                <p className="text-lg text-foreground leading-relaxed font-raleway mb-6">
                  We are Team botti – and we rethink efficiency. With smart automation solutions, we provide sustainable relief instead of just accelerating. Our focus: real added value in everyday life, individually adapted and holistically conceived – with a view to processes, people and potential.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed font-raleway mb-6">
                  We rely on transparency, plain language and partnership-based cooperation. From the first workshop to implementation, we deliver quickly tangible results and build future-proof structures that grow with you.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed font-raleway">
                  With an agile mindset, smart tools and a focus on what matters, we create digital solutions that work – for more creative freedom, productive teams and real joy at work.
                </p>
              </div>
              
              {/* CTA Section */}
              <div className="text-center bg-primary/5 rounded-xl p-8 border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-muted-foreground mb-6 font-raleway">
                  Let's discuss how we can automate your processes and boost your efficiency.
                </p>
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;