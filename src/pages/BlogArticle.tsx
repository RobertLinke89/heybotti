import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from 'lucide-react';
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
              <Button variant="outline" size="sm" onClick={handleShare}>
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

      <Footer />
    </div>
  );
};

export default BlogArticle;