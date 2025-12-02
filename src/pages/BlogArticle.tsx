import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const articles = {
    'roi-automation-small-business': { id: 1, date: '2024-01-15', readTime: 12 },
    'five-processes-automate-first': { id: 2, date: '2024-01-22', readTime: 15 },
    'breaking-too-small-myth': { id: 3, date: '2024-01-29', readTime: 14 },
    'hidden-costs-manual-processes': { id: 4, date: '2024-02-05', readTime: 18 },
    'automation-without-overwhelm': { id: 5, date: '2024-02-12', readTime: 16 },
    'future-proofing-automation-trends': { id: 6, date: '2024-02-19', readTime: 20 }
  };

  const handleShare = async () => {
    const shareData = {
      title: t(`blog.article${article.id}.title`),
      text: t(`blog.article${article.id}.excerpt`),
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        // You could add a toast notification here
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const article = useMemo(() => 
    articles[slug as keyof typeof articles], 
    [slug]
  );

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
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button 
            onClick={() => navigate('/blog')}
            variant="ghost"
            className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('blog.article.back')}
          </Button>

          <div className="space-y-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} Min. Lesezeit</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight font-raleway">
              {t(`blog.article${article.id}.title`)}
            </h1>
            
            <p className="text-lg text-foreground/70 leading-relaxed text-justify">
              {t(`blog.article${article.id}.excerpt`)}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none
                          prose-headings:font-raleway prose-headings:text-foreground prose-headings:font-bold
                          prose-h1:text-2xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:pt-8 prose-h1:border-t prose-h1:border-border/30
                          prose-h2:text-xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-foreground prose-h2:font-semibold
                          prose-h3:text-lg prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-foreground/90 prose-h3:font-medium
                          prose-h4:text-base prose-h4:mb-3 prose-h4:mt-6 prose-h4:font-semibold prose-h4:text-foreground/80
                          prose-p:text-foreground/75 prose-p:leading-[1.9] prose-p:mb-6 prose-p:text-justify prose-p:hyphens-auto
                          prose-strong:text-foreground prose-strong:font-semibold
                          prose-li:text-foreground/75 prose-li:mb-3 prose-li:leading-relaxed
                          prose-ul:space-y-2 prose-ul:my-6 prose-ol:space-y-2 prose-ol:my-6
                          prose-blockquote:border-l-2 prose-blockquote:border-primary/50 prose-blockquote:bg-muted/20 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-foreground/70
                          prose-code:bg-muted/50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-foreground/80
                          prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border/30 prose-pre:rounded prose-pre:p-4 prose-pre:overflow-x-auto
                          prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                          prose-img:rounded prose-img:shadow-sm prose-img:my-10
                          prose-hr:border-border/30 prose-hr:my-12">
            <ReactMarkdown>
              {t(`blog.article${article.id}.content`)}
            </ReactMarkdown>
          </div>
          
          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <div className="flex items-center justify-between">
              <Button 
                onClick={() => navigate('/blog')}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('blog.article.back')}
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                {t('blog.article.share') || 'Teilen'}
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogArticle;