import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { avatars } from "@/utils/iterables";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "@/store/slices/search.slice";
import { useNavigate } from "react-router-dom";
import { ROUTES_LINKS } from "@/routes/route-links";
import type { AppDispatch } from "@/store";
import heroBg from "@/assets/home/hero-bg-28122025.webp";

const Star = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
};

const StarRating = ({ total = 5 }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        {Array.from({ length: total }).map((_, index) => (
          <Star key={index} className="size-5 text-yellow-400" />
        ))}
        <span className="ml-1 text-lg font-bold text-gray-700">5.0</span>
      </div>
      <span className="font-semibold text-gray-500 leading-none">
        from 200+ reviews
      </span>
    </div>
  );
};

const HeroSection = () => {
  const [localQuery, setLocalQuery] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleHeroSearch = () => {
    if (!localQuery.trim()) return;
    dispatch(setQuery(localQuery));
    navigate(`${ROUTES_LINKS.SEARCH_PAGE}?q=${localQuery}`);
    setLocalQuery("");
  };

  const handleTagSearchQuery = (tag: string) => {
    dispatch(setQuery(tag));
    navigate(`${ROUTES_LINKS.SEARCH_PAGE}?q=${tag}`);
  };
  return (
    <header
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-white/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_30%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0)_70%)]" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 md:gap-6 px-4">
        <div className="flex flex-col items-center justify-center gap-1 md:gap-5 text-center">
          <h1 className="text-4xl font-bold text-black md:text-6xl">
            Your mood, <span className="text-primary">pinned</span>.
          </h1>
          <h2 className="text-md font-normal text-gray-600 md:text-xl">
            Discover images, GIFs & videos that match your vibe.{" "}
            <br className="hidden md:block" />
            Save what you love into beautiful collections.
          </h2>
        </div>

        {/* --- NEW: Search Bar & Pills --- */}
        <div className="w-full max-w-md md:max-w-lg flex flex-col items-center gap-3 mt-2">
          {/* Search Bar */}
          <div className="relative w-full group">
            <div className="relative flex items-center bg-white rounded-full shadow-lg p-1.5 border border-gray-100">
              <div className="pl-4 text-gray-400">
                <Search className="size-5" />
              </div>
              <input
                type="text"
                placeholder="Search 'Aesthetic' or 'Vintage'..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleHeroSearch();
                }}
                className="w-full bg-transparent border-none outline-none focus:ring-0 px-3 text-gray-800 placeholder:text-gray-400 font-medium h-10 md:h-11"
              />
              <Button
                className="rounded-full px-5 md:px-6 h-10 md:h-11 shadow-sm"
                onClick={handleHeroSearch}
              >
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="text-slate-700 font-normal">Try:</span>{" "}
            {["Aesthetic", "Minimal", "Cyberpunk", "Nature", "Dark"].map(
              (tag) => (
                <span
                  key={tag}
                  onClick={() => handleTagSearchQuery(tag)}
                  className="px-3 py-1 rounded-full bg-white/60 border border-gray-200 text-gray-600 text-xs font-medium cursor-pointer hover:bg-white hover:text-primary hover:border-primary/40 transition-all"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Social proof (Original) */}
        <div className="flex items-center gap-3 mt-4">
          <span className="inline-flex items-center -space-x-3">
            {avatars.map((src, index) => (
              <span
                key={index}
                className="relative flex size-10 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-muted"
              >
                <img
                  src={src}
                  alt={`User avatar ${index + 1}`}
                  className="size-full object-cover"
                />
              </span>
            ))}
          </span>
          <StarRating />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
