import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, BookOpen, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useMemo } from 'react';

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      slug: 'roi-automation-small-business',
      date: '2024-01-15',
      readTime: 12,
      category: 'ROI & Strategy',
      featured: true
    },
    {
      id: 2,
      slug: 'five-processes-automate-first',
      date: '2024-01-22',
      readTime: 15,
      category: 'Implementation',
      featured: false
    },
    {
      id: 3,
      slug: 'breaking-too-small-myth',
      date: '2024-01-29',
      readTime: 14,
      category: 'Small Business',
      featured: true
    },
    {
      id: 4,
      slug: 'hidden-costs-manual-processes',
      date: '2024-02-05',
      readTime: 18,
      category: 'Cost Analysis',
      featured: false
    },
    {
      id: 5,
      slug: 'automation-without-overwhelm',
      date: '2024-02-12',
      readTime: 16,
      category: 'Getting Started',
      featured: false
    },
    {
      id: 6,
      slug: 'future-proofing-automation-trends',
      date: '2024-02-19',
      readTime: 20,
      category: 'Future Trends',
      featured: true
    }
  ];

  const featuredArticles = useMemo(() => 
    articles.filter(article => article.featured), 
    [articles]
  );
  
  const regularArticles = useMemo(() => 
    articles.filter(article => !article.featured), 
    [articles]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('blog.back.home')}
          </Button>

          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-raleway">
                {t('blog.title')}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground font-raleway">{t('blog.featured')}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/blog/${article.slug}`)}
                >
                  <div className="bg-card rounded-lg border border-border hover:shadow-xl transition-all duration-300 group-hover:border-primary/20 overflow-hidden h-full">
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {article.category}
                        </Badge>
                        <Badge variant="outline">{t('blog.featured')}</Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 font-raleway flex-grow">
                        {t(`blog.article${article.id}.title`)}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                        {t(`blog.article${article.id}.excerpt`)}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime} {t('blog.article.min.read')}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 font-raleway">{t('blog.allArticles')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/blog/${article.slug}`)}
              >
                <div className="bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:border-primary/20 overflow-hidden h-full">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      {article.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {t('blog.featured')}
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 font-raleway flex-grow">
                      {t(`blog.article${article.id}.title`)}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-grow">
                      {t(`blog.article${article.id}.excerpt`)}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime} {t('blog.article.min.read')}
                        </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg border border-border p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-raleway">
              {t('blog.cta.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('blog.cta.subtitle')}
            </p>
            <Button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const bookingSection = document.getElementById('booking-section');
                  bookingSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              size="lg"
            >
              {t('blog.cta.button')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;