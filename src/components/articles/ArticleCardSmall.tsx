import { Link } from "react-router-dom";
import { Article } from "@/data/articles";
import { formatDate } from "@/lib/utils";

interface ArticleCardSmallProps {
  article: Article;
  className?: string;
}

const ArticleCardSmall = ({ article, className = "" }: ArticleCardSmallProps) => {
  return (
    <article className={`group ${className}`}>
      <Link to={`/article/${article.slug}`} className="flex gap-4">
        <div className="image-hover w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <span className="category-tag">{article.category}</span>
          
          <h4 className="font-headline text-base font-semibold mt-1 mb-1 line-clamp-2 group-hover:underline decoration-1 underline-offset-4">
            {article.title}
          </h4>
          
          <span className="text-sm text-muted-foreground font-body">
            {formatDate(article.publishedAt)}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCardSmall;
