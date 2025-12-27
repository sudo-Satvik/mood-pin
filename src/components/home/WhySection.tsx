import { Heart } from "lucide-react";
import featured1 from "@/assets/home/featured-1.webp";
import featured2 from "@/assets/home/featured-2.webp";
import featured3 from "@/assets/home/featured-3.webp";

const WhySection = () => (
  <section className="py-32 border-y border-slate-200 bg-slate-50 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
      {/* Text Content */}
      <div className="space-y-8 order-2 md:order-1">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Your mood. <br />
          <span className="text-primary">Your space.</span>
        </h2>
        <div className="space-y-6 text-lg text-slate-600">
          <p className="border-l-2 border-slate-300 pl-6 italic font-medium">
            "Inspiration random hoti hai,{" "}
            <span className="text-primary">
              par collection intentional honi chahiye.
            </span>
            "
          </p>
          <p className="text-slate-500 text-base">
            Moodpin sirf inspiration dikhata nahi, woh{" "}
            <span className="text-slate-900 font-bold bg-red-100 italic px-1">
              visual world
            </span>{" "}
            bhi banata hai apka.
          </p>
        </div>

        <div className="pt-0">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold">
            Built for
          </p>
          <div className="flex flex-wrap gap-3">
            {["Creators", "Designers", "Aesthetic Lovers", "Overthinkers"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-white text-slate-600 text-sm border border-slate-200 shadow-sm font-medium hover:border-slate-300 cursor-default"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 relative h-100 w-full bg-white rounded-2xl border border-slate-200 p-4 rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl shadow-slate-200/60">
        <div className="grid h-full grid-cols-2 gap-4">
          {/* Left big image */}
          <div className="relative h-full w-full overflow-hidden rounded-lg bg-slate-100">
            <img
              src={featured3}
              alt="Featured 3"
              sizes="(max-width: 768px) 50vw, 350px"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right column */}
          <div className="flex h-full flex-col gap-4">
            {/* Top image */}
            <div className="relative h-2/3 w-full overflow-hidden rounded-lg bg-slate-100">
              <img
                src={featured2}
                alt="Featured 2"
                sizes="(max-width: 768px) 50vw, 250px"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Bottom image */}
            <div className="relative h-1/3 w-full overflow-hidden rounded-lg bg-slate-100">
              <img
                src={featured1}
                alt="Featured 1"
                sizes="(max-width: 768px) 50vw, 250px"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 p-4 rounded-xl shadow-xl flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-full">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
          </div>
          <div>
            <p className="text-slate-900 text-sm font-bold">
              Saved to Favorites
            </p>
            <p className="text-slate-400 text-xs font-medium">Just now</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhySection;
