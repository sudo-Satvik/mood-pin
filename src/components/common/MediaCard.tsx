"use client";

import React, { useState, useEffect } from "react";
import type { ICardProps } from "@/types/interfaces";
import { capitalize } from "@/utils/strings";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const MediaCard: React.FC<ICardProps> = ({
  mediaType,
  src,
  mediaName,
  data,
  addToCollection,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (data?.id) {
      const collection = localStorage.getItem("collection_mp");
      if (collection) {
        try {
          const items = JSON.parse(collection);
          const isInCollection = items.some(
            (item: { id: string }) => item.id === data.id
          );
          setIsLiked(isInCollection);
        } catch (error) {
          console.error("Error parsing collection from localStorage:", error);
        }
      }
    }
  }, [data?.id]);

  return (
    <div className="group relative w-full h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100">
      <div className="absolute inset-0 w-full h-full">
        {mediaType === "video" ? (
          <>
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
          </>
        ) : (
          <>
            <img
              src={src}
              alt={mediaName || mediaType}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
          </>
        )}
      </div>

      <div
        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent 
        opacity-60 md:opacity-40 md:group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (data) {
            addToCollection?.(data);
          }
          setIsLiked(true);
        }}
        disabled={isLiked}
        className={cn(
          "absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 z-20 active:scale-90 shadow-lg disabled:cursor-not-allowed",
          isLiked
            ? "opacity-100 bg-white text-red-500 border-white"
            : "opacity-100 bg-white/20 border-white/30 text-white md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:hover:bg-white md:hover:text-red-500"
        )}
        title="Add to Collection"
      >
        <Heart
          className={cn("w-5 h-5 transition-all", isLiked && "fill-current")}
        />
      </button>

      <div
        className="absolute bottom-0 left-0 w-full p-4 z-10 
        transform translate-y-0 md:translate-y-1 md:group-hover:translate-y-0 transition-transform duration-300"
      >
        <h3 className="text-white font-semibold text-lg leading-tight tracking-tight line-clamp-1 drop-shadow-md">
          {(mediaName && capitalize(mediaName)) ||
            (mediaType && capitalize(mediaType))}
        </h3>

        <div className="hidden md:block h-0.5 w-0 group-hover:w-12 bg-white/80 mt-2 transition-all duration-500 rounded-full" />
      </div>
    </div>
  );
};

export default MediaCard;
