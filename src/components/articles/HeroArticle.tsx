import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Article } from "@/data/articles";
import { formatDate } from "@/lib/utils";

interface HeroArticleProps {
  article: Article;
}

const HeroArticle = ({ article }: HeroArticleProps) => {
  return (
    <article className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm">
      <Link to={`/article/${article.slug}`} className="block h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 md:p-10 lg:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-body font-bold uppercase tracking-wider rounded-sm">
                  Featured
                </span>
                <span className="text-primary-foreground/80 font-body text-sm uppercase tracking-wider">
                  {article.category}
                </span>
              </div>
              
              <h2 className="headline-xl text-primary-foreground mb-4 text-balance">
                {article.title}
              </h2>
              
              <p className="font-body text-lg md:text-xl text-primary-foreground/80 line-clamp-2 mb-6 max-w-2xl">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-primary-foreground/70 font-body">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-primary-foreground">{article.author.name}</span>
                </div>
                <span>·</span>
                <span>{formatDate(article.publishedAt)}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default HeroArticle;
