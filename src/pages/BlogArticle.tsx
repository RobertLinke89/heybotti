import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';

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
            <button 
              onClick={() => navigate('/blog')}
              className="text-primary hover:underline"
            >
              {t('blog.article.back')}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('blog.article.back')}
          </button>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-raleway">
              {t(`blog.article${article.id}.title`)}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('blog.article.published')}: {new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{t('blog.article.reading.time')}: {article.readTime} {t('blog.article.min.read')}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:font-raleway prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            <ReactMarkdown>
              {t(`blog.article${article.id}.content`)}
            </ReactMarkdown>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;