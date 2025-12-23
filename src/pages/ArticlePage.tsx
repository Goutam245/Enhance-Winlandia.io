import { useParams, Link } from "react-router-dom";
import { Clock, Twitter, Facebook, Linkedin, Link as LinkIcon, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleCardMedium from "@/components/articles/ArticleCardMedium";
import { getArticleBySlug, getLatestArticles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = getLatestArticles(3).filter(a => a.slug !== slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="editorial-container py-20 text-center">
          <h1 className="headline-lg mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const paragraphs = article.content.split('\n\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Article Header */}
        <article>
          <header className="article-container py-12">
            <div className="flex items-center gap-3 mb-4">
              <Link
                to={`/category/${article.category.toLowerCase()}`}
                className="category-tag hover:text-foreground transition-colors"
              >
                {article.category}
              </Link>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground font-body">
                {formatDate(article.publishedAt)}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground font-body flex items-center gap-1">
                <Clock size={14} />
                {article.readTime} min read
              </span>
            </div>

            <h1 className="headline-xl mb-6 text-balance">{article.title}</h1>
            
            <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pb-8 border-b border-border">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-body font-semibold">{article.author.name}</p>
                <p className="font-body text-sm text-muted-foreground">
                  {formatDate(article.publishedAt)}
                </p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <figure className="editorial-container mb-12">
            <div className="aspect-video overflow-hidden rounded-sm">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            {(article.imageCaption || article.imageCredit) && (
              <figcaption className="mt-3 text-sm text-muted-foreground font-body">
                {article.imageCaption}
                {article.imageCredit && (
                  <span className="text-muted-foreground/70 ml-2">{article.imageCredit}</span>
                )}
              </figcaption>
            )}
          </figure>

          {/* Article Body */}
          <div className="article-container">
            <div className="prose-editorial">
              {paragraphs.map((paragraph, index) => {
                // Check if it's a subheading (shorter, no period at end)
                const isSubheading = paragraph.length < 100 && !paragraph.endsWith('.') && !paragraph.includes(':');
                
                if (isSubheading && index > 0) {
                  return (
                    <h2 key={index} className="font-headline text-2xl font-bold mt-12 mb-4">
                      {paragraph}
                    </h2>
                  );
                }

                // First paragraph gets drop cap
                if (index === 0) {
                  return (
                    <p key={index} className="font-body text-body-md text-card-foreground mb-6 drop-cap">
                      {paragraph}
                    </p>
                  );
                }

                // Check for pull quote (contains long quote-like content)
                if (paragraph.startsWith('"') && paragraph.length > 100 && paragraph.length < 300) {
                  return (
                    <blockquote key={index} className="pull-quote">
                      {paragraph}
                    </blockquote>
                  );
                }

                return (
                  <p key={index} className="font-body text-body-md text-card-foreground mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground font-body text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-body text-sm font-medium mb-4">Share this article</p>
              <div className="flex gap-3">
                <button
                  className="p-3 border border-border rounded-sm hover:bg-secondary transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} />
                </button>
                <button
                  className="p-3 border border-border rounded-sm hover:bg-secondary transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} />
                </button>
                <button
                  className="p-3 border border-border rounded-sm hover:bg-secondary transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </button>
                <button
                  className="p-3 border border-border rounded-sm hover:bg-secondary transition-colors"
                  aria-label="Copy link"
                >
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-secondary rounded-sm">
              <div className="flex gap-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-headline text-lg font-bold mb-1">{article.author.name}</p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {article.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="editorial-container py-16 border-t border-border mt-16">
          <h2 className="font-headline text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <ArticleCardMedium key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
