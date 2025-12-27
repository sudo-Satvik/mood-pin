"use client";

import React, { useState, useEffect } from "react";
import { Search, Heart } from "lucide-react";
// import { useRouter } from "next/navigation"; // Next.js Router
import { Button } from "@/components/ui/button";
import { MPLogo } from "./BrandLogo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const router = useRouter();

  // Handle Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      // Thoda buffer (10px) rakha hai taaki flickering na ho
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Search Navigation
  const handleSearchNav = () => {
    if (searchQuery.trim()) {
      // router.push(`/search?q=${searchQuery}`);
    } else {
      // router.push("/search");
    }
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
        {/* --- LEFT: Expanding Search Bar --- */}
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
              // Agar input hidden hai (width kam hai), toh click krne pr route pr le jao
              // Ya focus handle kro. Yahan main UX ke liye focus krwa raha hu
              document.getElementById("nav-search-input")?.focus();
            }}
          >
            {/* Icon */}
            <div
              className="absolute left-0 top-0 h-full w-10 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors"
              onClick={handleSearchNav}
            >
              <Search className="w-5 h-5" />
            </div>

            {/* Input (Expands on Hover) */}
            <input
              id="nav-search-input"
              type="text"
              placeholder="Search aesthetics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-full pl-10 pr-4 bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
            />
          </div>
        </div>

        {/* --- CENTER: Logo (Absolute Center) --- */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div
            className={`transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          >
            <MPLogo width={110} height={50}/>
          </div>
        </div>

        {/* --- RIGHT: Collection Button --- */}
        <div className="flex-1 flex justify-end z-20">
          <Button
            variant="ghost"
            className={`rounded-full h-10 gap-2 transition-all duration-300 ${
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
