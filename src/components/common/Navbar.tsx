import React, { useState, useEffect } from "react";
import { Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MPLogo } from "./BrandLogo";
import { Link } from "react-router-dom";
import { ROUTES_LINKS } from "@/routes/route-links";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery, clearResults } from "@/store/slices/search.slice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchNav = () => {
    if (!searchQuery.trim()) navigate(ROUTES_LINKS.SEARCH_PAGE);
    dispatch(setQuery(searchQuery));
    navigate(
      `${ROUTES_LINKS.SEARCH_PAGE}?q=${encodeURIComponent(searchQuery)}`
    );
    setSearchQuery("");
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    dispatch(clearResults());
    dispatch(setQuery(""));
    navigate(ROUTES_LINKS.HOME_PAGE);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearchNav();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-slate-200/50 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between relative">
        <div className="flex-1 flex justify-start z-20">
          <div
            className={`group relative flex items-center h-10 rounded-full transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
              ${
                isScrolled
                  ? "bg-slate-100"
                  : "bg-white/80 backdrop-blur-md shadow-sm"
              } 
              w-10 hover:w-64 border border-transparent hover:border-slate-200 hover:shadow-md hover:bg-white`}
            onClick={() => {
              document.getElementById("nav-search-input")?.focus();
            }}
          >
            <div
              className="absolute left-0 top-0 h-full w-10 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors"
              onClick={handleSearchNav}
            >
              <Search className="w-5 h-5" />
            </div>

            <input
              id="nav-search-input"
              type="text"
              placeholder="Search aesthetics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-full pl-10 pr-4 bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 text-slate-400 hover:text-slate-600 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <Link
          to={ROUTES_LINKS.HOME_PAGE}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
          aria-label="Home"
        >
          <div
            className={`transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          >
            <MPLogo width={110} height={50} />
          </div>
        </Link>

        <Link to={ROUTES_LINKS.COLLECTION_PAGE}>
          <Button
            variant="ghost"
            className={`cursor-pointer rounded-full h-10 gap-2 transition-all duration-300 ${
              isScrolled
                ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
                : "bg-white/90 text-slate-800 hover:bg-white shadow-sm"
            }`}
          >
            <Heart className="w-4 h-4 text-rose-500 fill-current" />
            <span className="hidden sm:inline font-medium text-sm">
              My Collection
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
