import { Link } from "react-router-dom";
import { TrendingUp, Mail } from "lucide-react";
import { getTrendingArticles } from "@/data/articles";

const Sidebar = () => {
  const trendingArticles = getTrendingArticles(5);

  return (
    <aside className="space-y-8">
      {/* Trending Now */}
      <div className="border-t-2 border-primary pt-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} className="text-destructive" />
          <h3 className="font-headline text-lg font-bold">Trending Now</h3>
        </div>
        
        <ol className="space-y-4">
          {trendingArticles.map((article, index) => (
            <li key={article.id}>
              <Link
                to={`/article/${article.slug}`}
                className="group flex gap-3"
              >
                <span className="font-headline text-2xl font-bold text-muted-foreground/50">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="category-tag text-xs">{article.category}</span>
                  <h4 className="font-headline text-sm font-semibold mt-1 group-hover:underline decoration-1 underline-offset-4 line-clamp-2">
                    {article.title}
                  </h4>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-secondary p-6 rounded-sm">
        <div className="flex items-center gap-2 mb-3">
          <Mail size={18} />
          <h3 className="font-headline text-lg font-bold">Newsletter</h3>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Get the day's most important stories delivered directly to your inbox.
        </p>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-primary-foreground font-body font-medium text-sm rounded-sm hover:bg-accent transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="border-t border-border pt-4">
        <h3 className="font-headline text-lg font-bold mb-4">Follow Us</h3>
        <div className="flex gap-2">
          {['Twitter', 'Facebook', 'Instagram'].map((platform) => (
            <a
              key={platform}
              href={`https://${platform.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-border rounded-sm font-body text-sm hover:bg-secondary transition-colors"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
