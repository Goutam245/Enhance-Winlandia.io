import { Link } from "react-router-dom";
import { Clock, Crown } from "lucide-react";
import { Article } from "@/data/articles";
import { formatDate } from "@/lib/utils";

interface ArticleCardMediumProps {
  article: Article;
  className?: string;
}

const ArticleCardMedium = ({ article, className = "" }: ArticleCardMediumProps) => {
  return (
    <article className={`group ${className}`}>
      <Link to={`/article/${article.slug}`} className="block">
        <div className="image-hover aspect-[4/3] relative overflow-hidden rounded-sm">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {article.premium && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-premium text-premium-foreground text-xs font-body font-bold rounded-sm">
              <Crown size={12} />
            </div>
          )}
        </div>
        
        <div className="mt-3">
          <span className="category-tag">{article.category}</span>
          
          <h3 className="headline-sm mt-2 mb-2 group-hover:underline decoration-1 underline-offset-4 line-clamp-2">
            {article.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span>{formatDate(article.publishedAt)}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {article.readTime} min
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCardMedium;
