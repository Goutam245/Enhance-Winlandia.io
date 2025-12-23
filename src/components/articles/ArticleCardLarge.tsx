import { Link } from "react-router-dom";
import { Clock, Crown } from "lucide-react";
import { Article } from "@/data/articles";
import { formatDate } from "@/lib/utils";

interface ArticleCardLargeProps {
  article: Article;
  className?: string;
}

const ArticleCardLarge = ({ article, className = "" }: ArticleCardLargeProps) => {
  return (
    <article className={`group ${className}`}>
      <Link to={`/article/${article.slug}`} className="block">
        <div className="image-hover aspect-video relative overflow-hidden rounded-sm">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {article.premium && (
            <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-premium text-premium-foreground text-xs font-body font-bold rounded-sm">
              <Crown size={12} />
              Premium
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="category-tag">{article.category}</span>
            {article.breaking && (
              <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-body font-bold uppercase rounded-sm">
                Breaking
              </span>
            )}
          </div>
          
          <h3 className="headline-md mb-2 group-hover:underline decoration-1 underline-offset-4">
            {article.title}
          </h3>
          
          <p className="font-body text-muted-foreground line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
            <span className="font-medium">{article.author.name}</span>
            <span>·</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {article.readTime} min read
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCardLarge;
