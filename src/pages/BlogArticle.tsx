import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const articles = {
    'roi-automation-small-business': { id: 1, date: '2024-01-15', readTime: 8 },
    'five-processes-automate-first': { id: 2, date: '2024-01-22', readTime: 10 },
    'breaking-too-small-myth': { id: 3, date: '2024-01-29', readTime: 12 },
    'hidden-costs-manual-processes': { id: 4, date: '2024-02-05', readTime: 15 },
    'automation-without-overwhelm': { id: 5, date: '2024-02-12', readTime: 14 },
    'future-proofing-automation-trends': { id: 6, date: '2024-02-19', readTime: 18 }
  };

  const article = articles[slug as keyof typeof articles];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
            <Button 
              onClick={() => navigate('/blog')}
              variant="outline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('blog.article.back')}
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary/5 via-background to-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            onClick={() => navigate('/blog')}
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('blog.article.back')}
          </Button>

          <div className="space-y-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('blog.article.published')}: {new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} {t('blog.article.min.read')}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>{t('blog.article.reading.time')}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight font-raleway">
              {t(`blog.article${article.id}.title`)}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {t(`blog.article${article.id}.excerpt`)}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg border border-border shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none 
                          prose-headings:font-raleway prose-headings:text-foreground prose-headings:font-bold
                          prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:border-b prose-h1:border-border prose-h1:pb-4
                          prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-primary
                          prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-foreground
                          prose-h4:text-lg prose-h4:mb-2 prose-h4:mt-4 prose-h4:font-semibold
                          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                          prose-strong:text-foreground prose-strong:font-semibold
                          prose-li:text-muted-foreground prose-li:mb-2
                          prose-ul:space-y-2 prose-ol:space-y-2
                          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:my-6
                          prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-foreground
                          prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
                          prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                          prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
                          prose-hr:border-border prose-hr:my-8">
              <ReactMarkdown>
                {t(`blog.article${article.id}.content`)}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>

      {/* Article Footer */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-raleway">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover how automation can streamline your operations and boost productivity. 
              Get expert guidance tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/')} size="lg">
                Request Free Consultation
              </Button>
              <Button onClick={() => navigate('/blog')} variant="outline" size="lg">
                <ArrowLeft className="h-4 w-4 mr-2" />
                More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticle;