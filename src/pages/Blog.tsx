import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      slug: 'roi-automation-small-business',
      date: '2024-01-15',
      readTime: 8
    },
    {
      id: 2,
      slug: 'five-processes-automate-first',
      date: '2024-01-22',
      readTime: 10
    },
    {
      id: 3,
      slug: 'breaking-too-small-myth',
      date: '2024-01-29',
      readTime: 12
    },
    {
      id: 4,
      slug: 'hidden-costs-manual-processes',
      date: '2024-02-05',
      readTime: 15
    },
    {
      id: 5,
      slug: 'automation-without-overwhelm',
      date: '2024-02-12',
      readTime: 14
    },
    {
      id: 6,
      slug: 'future-proofing-automation-trends',
      date: '2024-02-19',
      readTime: 18
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('blog.back')}
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-raleway">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/blog/${article.slug}`)}
              >
                <div className="bg-card rounded-lg p-6 h-full border border-border hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime} {t('blog.article.min.read')}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 font-raleway">
                    {t(`blog.article${article.id}.title`)}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {t(`blog.article${article.id}.excerpt`)}
                  </p>
                  
                  <div className="text-primary font-medium group-hover:underline">
                    {t('blog.read.more')} →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;