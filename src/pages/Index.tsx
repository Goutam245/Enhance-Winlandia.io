import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroArticle from "@/components/articles/HeroArticle";
import ArticleCardLarge from "@/components/articles/ArticleCardLarge";
import ArticleCardMedium from "@/components/articles/ArticleCardMedium";
import ArticleCardSmall from "@/components/articles/ArticleCardSmall";
import Sidebar from "@/components/sections/Sidebar";
import { 
  articles, 
  getFeaturedArticle, 
  getLatestArticles,
  getArticlesByCategory 
} from "@/data/articles";

const Index = () => {
  const [visibleArticles, setVisibleArticles] = useState(8);
  const featuredArticle = getFeaturedArticle();
  const latestArticles = getLatestArticles(12);
  const topStories = articles.filter(a => !a.featured).slice(0, 3);

  const technologyArticles = getArticlesByCategory("Technology");
  const politicsArticles = getArticlesByCategory("Politics");
  const cultureArticles = getArticlesByCategory("Culture");

  const loadMore = () => {
    setVisibleArticles(prev => prev + 4);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        {featuredArticle && (
          <section className="editorial-container py-8">
            <HeroArticle article={featuredArticle} />
          </section>
        )}

        {/* Featured Grid */}
        <section className="editorial-container py-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topStories.map((article, index) => (
              <ArticleCardLarge 
                key={article.id} 
                article={article}
                className={`fade-in-up delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
        </section>

        {/* Latest News + Sidebar */}
        <section className="editorial-container py-12 border-t border-border">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <h2 className="font-headline text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                Latest
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {latestArticles.slice(0, visibleArticles).map((article) => (
                  <ArticleCardSmall key={article.id} article={article} />
                ))}
              </div>

              {visibleArticles < latestArticles.length && (
                <div className="mt-8 text-center">
                  <button
                    onClick={loadMore}
                    className="px-8 py-3 border-2 border-primary text-primary font-body font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-[300px] flex-shrink-0">
              <Sidebar />
            </div>
          </div>
        </section>

        {/* Category Sections */}
        <section className="bg-secondary py-12">
          <div className="editorial-container">
            {/* Technology */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline text-2xl font-bold pb-2 border-b-2 border-primary inline-block">
                  Technology
                </h2>
                <a
                  href="/category/technology"
                  className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-hover"
                >
                  See all →
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologyArticles.slice(0, 4).map((article) => (
                  <ArticleCardMedium key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Politics */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline text-2xl font-bold pb-2 border-b-2 border-primary inline-block">
                  Politics
                </h2>
                <a
                  href="/category/politics"
                  className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-hover"
                >
                  See all →
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {politicsArticles.slice(0, 4).map((article) => (
                  <ArticleCardMedium key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Culture */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline text-2xl font-bold pb-2 border-b-2 border-primary inline-block">
                  Culture
                </h2>
                <a
                  href="/category/culture"
                  className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-hover"
                >
                  See all →
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cultureArticles.slice(0, 4).map((article) => (
                  <ArticleCardMedium key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
