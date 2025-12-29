"use client";

import React from "react";
import type { ICardProps, IMediaItem } from "@/types/interfaces";
import { capitalize } from "@/utils/strings";
import { Trash2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  id: number | string;
  type: "photo" | "video" | "gif";
  src: string;
  title: string;
  onRemove?: (id: number | string) => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  id,
  type,
  src,
  title,
  onRemove,
}) => {
  return (
    <div className="group relative w-full h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100 ring-1 ring-slate-900/5">
      <div className="absolute inset-0 w-full h-full">
        {type === "video" ? (
          <>
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 z-10 border border-white/10">
              <Play className="w-3 h-3 text-white fill-current" />
              <span className="text-[10px] font-bold text-white tracking-wide opacity-90">
                VIDEO
              </span>
            </div>
          </>
        ) : (
          <img
            src={src}
            alt={title || type}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-300 pointer-events-none" />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove?.(id);
        }}
        className={cn(
          "absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 z-20 shadow-lg active:scale-90",
          "bg-white/20 border-white/30 text-white",
          "md:opacity-0 md:-translate-y-2.5 md:group-hover:translate-y-0 md:group-hover:opacity-100",
          "hover:bg-red-500 hover:border-red-500 hover:text-white"
        )}
        title="Remove from Collection"
      >
        <Trash2 className="w-5 h-5" />
      </button>

      <div className="absolute bottom-0 left-0 w-full p-4 z-10">
        <h3 className="text-white font-bold text-lg leading-tight tracking-tight line-clamp-1 drop-shadow-md">
          {(title && capitalize(title)) || (type && capitalize(type))}
        </h3>
        <p className="text-white/70 text-xs font-medium mt-1">Added recently</p>
      </div>

      <div className="absolute inset-0 bg-red-500/20 opacity-0 transition-opacity duration-300 pointer-events-none group-has-[button:hover]:opacity-100" />
    </div>
  );
};

export default CollectionCard;
