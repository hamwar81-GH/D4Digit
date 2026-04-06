import { motion } from "framer-motion";
import { Compass, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const guides = [
  { title: "How to Compress Images Without Losing Quality", readTime: "4 min", tag: "Tools", gradient: "from-cyan-500 to-blue-500" },
  { title: "Generating Secure Passwords — Best Practices", readTime: "3 min", tag: "Security", gradient: "from-blue-500 to-purple-500" },
  { title: "Formatting & Validating JSON Like a Pro", readTime: "5 min", tag: "Development", gradient: "from-purple-500 to-pink-500" },
  { title: "Building a Productive Digital Workspace", readTime: "6 min", tag: "Productivity", gradient: "from-green-500 to-cyan-500" },
  { title: "Understanding CSS Grid in 10 Minutes", readTime: "10 min", tag: "CSS", gradient: "from-yellow-500 to-orange-500" },
  { title: "Using Color Theory in UI Design", readTime: "7 min", tag: "Design", gradient: "from-pink-500 to-red-500" },
];

const tagColor: Record<string, string> = {
  Tools: "#00f0ff", Security: "#22c55e", Development: "#3b82f6",
  Productivity: "#a855f7", CSS: "#f59e0b", Design: "#ec4899",
};

export default function Guides() {
  return (
    <div className="min-h-screen text-foreground font-sans overflow-hidden" style={{ background: "#0b0f1a" }}>
      <Navbar />
      <main className="pt-32 pb-24 relative">
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>
                <Compass className="w-4 h-4 text-white" strokeWidth={2.2} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#a855f7" }}>Guides</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.025em" }}>Guides</h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Step-by-step guides to help you get the most out of D4Digit's tools and features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <motion.div key={guide.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group rounded-2xl overflow-hidden relative cursor-pointer"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className={`h-2 bg-gradient-to-r ${guide.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.06)", color: tagColor[guide.tag] || "white", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {guide.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />{guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors duration-200">
                    {guide.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
