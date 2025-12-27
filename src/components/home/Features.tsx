import { Image, Layers, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Image className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50",
      title: "Everything Visual",
      desc: "High-quality Images, Loops & Aesthetic Videos.",
    },
    {
      icon: <Layers className="w-6 h-6 text-pink-600" />,
      bg: "bg-pink-50",
      title: "Smart Collections",
      desc: "Unlimited saves in clean, noise-free boards.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50",
      title: "Fast & Minimal",
      desc: "No clutter. Just search → save → vibe.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`mb-6 p-3 ${f.bg} rounded-xl w-fit group-hover:scale-110 transition-transform`}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
