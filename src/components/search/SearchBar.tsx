"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setQuery, clearResults } from "@/store/slices/search.slice.ts";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTES_LINKS } from "@/routes/route-links";

const placeholders = [
  "Search 'Cyberpunk Aesthetic'",
  "Search 'Minimalist Decor'",
  "Search 'Neon Vibes'",
  "Search 'Vintage Cars'",
  "Search 'Nature Photography'",
];

export default function AnimatedSearch() {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setInputValue(q);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    dispatch(setQuery(inputValue));
    navigate(`${ROUTES_LINKS.SEARCH_PAGE}?q=${encodeURIComponent(inputValue)}`);
  };

  const handleClearSearch = () => {
    setInputValue("");
    dispatch(clearResults());
    dispatch(setQuery(""));
  };

  return (
    <div className="w-full px-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center w-full max-w-md sm:max-w-2xl bg-white rounded-full border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 transition-all duration-300 group h-12 sm:h-14 overflow-hidden"
      >
        <div className="pl-5 pr-3 text-slate-400 group-focus-within:text-primary transition-colors">
          <Search className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <div className="relative w-full h-full flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            {inputValue === "" && (
              <motion.div
                key={placeholders[currentPlaceholder]}
                initial={{ y: 20, opacity: 0 }} // Enter from bottom
                animate={{ y: 0, opacity: 1 }} // Center
                exit={{ y: -20, opacity: 0 }} // Exit to top
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center text-slate-400 text-sm sm:text-base pointer-events-none truncate select-none"
              >
                {placeholders[currentPlaceholder]}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actual Input */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full h-full bg-transparent border-none outline-none text-slate-800 text-sm sm:text-base font-medium placeholder-transparent z-10 selection:bg-primary/20"
            placeholder="Search..."
          />
          {inputValue && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-5 text-slate-400 hover:text-slate-600 transition-colors z-20"
            >
              ✕
            </button>
          )}
        </div>

        <Button
          type="submit"
          className="mr-3 px-5 py-2 rounded-full bg-primary h-auto text-white text-sm font-medium hover:bg-red-700 transition-all duration-300 active:scale-95 hidden sm:block cursor-pointer"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
