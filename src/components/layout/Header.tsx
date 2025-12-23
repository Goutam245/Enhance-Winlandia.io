import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { categories } from "@/data/articles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Breaking News Ticker */}
      <div className="bg-destructive text-destructive-foreground py-2 px-4">
        <div className="editorial-container flex items-center justify-center gap-2">
          <span className="font-body text-xs font-bold uppercase tracking-wider">Breaking</span>
          <span className="text-sm font-body">World Leaders Reach Historic Agreement at Global Climate Summit</span>
        </div>
      </div>

      <div className="editorial-container">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b border-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-sm transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground font-body">
              <span>December 23, 2024</span>
              <span className="mx-2">|</span>
              <span>Today's Paper</span>
            </div>
          </div>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
              Winlandia
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-secondary rounded-sm transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button className="hidden md:block px-4 py-2 bg-primary text-primary-foreground text-sm font-body font-medium rounded-sm hover:bg-accent transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-b border-border animate-fade-in">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 py-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase()}`}
              className="font-body text-sm font-medium text-foreground hover:text-muted-foreground transition-colors link-hover"
            >
              {category}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase()}`}
                  className="font-body text-lg font-medium py-2 text-foreground hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
