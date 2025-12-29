import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { ROUTES_LINKS } from "@/routes/route-links";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
              Got Inspired
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Ready to pin your <span className="text-primary">mood?</span>
        </h2>

        <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-medium">
          Discover visuals you actually want to save.{" "}
          <br className="hidden md:block" />
          No noise. Just your vibe.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button
            className="h-12 rounded-lg text-base bg-primary hover:bg-primary/90 text-white shadow-xl shadow-slate-900/20 transition-all group cursor-pointer"
            onClick={() => navigate(ROUTES_LINKS.SEARCH_PAGE)}
          >
            Explore Moodpin
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
