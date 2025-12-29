import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { MPLogo } from "../common/BrandLogo";
import { Skeleton } from "@/components/ui/skeleton";

export const EmptySearchState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-30 px-4 text-center">
      {/* Animated Icon */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 bg-indigo-200 blur-xl rounded-full opacity-40 animate-pulse"></div>
        <div className="relative">
          <MPLogo width={120} height={40} />
        </div>
      </motion.div>

      {/* Text Content */}
      <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-2">
        Discover your <span className="text-primary">aesthetic</span>.
      </h3>
      <p className="text-slate-400 max-w-sm mx-auto mb-8 font-medium">
        Type something above or pick a vibe to get started.
      </p>
    </div>
  );
};

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorSearchState = ({
  title = "No results found",
  message = "We couldn't find any visuals matching that vibe.",
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Shake Animation for Error */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [-2, 2, -2, 2, 0] }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 bg-red-100 blur-xl rounded-full opacity-50"></div>
        <div className="relative bg-white p-4 rounded-2xl shadow-xl shadow-red-50 border border-red-100">
          <SearchX className="w-10 h-10 text-rose-500" />
        </div>
      </motion.div>

      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-400 max-w-xs mx-auto mb-6">
        {message} <br /> Try checking your spelling or use general keywords.
      </p>
    </div>
  );
};

export const LoadingState = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-3 gap-5">
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-full h-80 rounded-2xl" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-full h-80 rounded-2xl" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-full h-80 rounded-2xl" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-full h-80 rounded-2xl" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-full h-80 rounded-2xl" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-full h-80 rounded-2xl" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-full h-80 rounded-2xl" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-full h-80 rounded-2xl" />
      </div>
    </div>
  );
};
