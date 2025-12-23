import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleCardLarge from "@/components/articles/ArticleCardLarge";
import Sidebar from "@/components/sections/Sidebar";
import { getArticlesByCategory, articles, categories } from "@/data/articles";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";
  
  // Get articles for this category, or show all if category doesn't exist
  const categoryArticles = category 
    ? getArticlesByCategory(categoryName).length > 0 
      ? getArticlesByCategory(categoryName)
      : articles
    : articles;

  const isValidCategory = categories.map(c => c.toLowerCase()).includes(category?.toLowerCase() || "");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="editorial-container py-12">
        {/* Page Header */}
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="headline-xl mb-4">
            {isValidCategory ? categoryName : "All Articles"}
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            {isValidCategory 
              ? `The latest ${categoryName.toLowerCase()} news, analysis, and in-depth reporting from Winlandia's award-winning journalists.`
              : "Browse all articles from our editorial team."
            }
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Filter/Sort Options */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <p className="font-body text-sm text-muted-foreground">
                {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''}
              </p>
              <select className="font-body text-sm bg-background border border-border rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Most Recent</option>
                <option>Most Read</option>
                <option>Oldest First</option>
              </select>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categoryArticles.map((article) => (
                <ArticleCardLarge key={article.id} article={article} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-4 py-2 border border-border rounded-sm font-body text-sm hover:bg-secondary transition-colors">
                ← Previous
              </button>
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-sm font-body text-sm">
                1
              </span>
              <button className="px-4 py-2 border border-border rounded-sm font-body text-sm hover:bg-secondary transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-border rounded-sm font-body text-sm hover:bg-secondary transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-border rounded-sm font-body text-sm hover:bg-secondary transition-colors">
                Next →
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[300px] flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
