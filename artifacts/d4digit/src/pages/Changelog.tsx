import { motion } from "framer-motion";
import { GitCommit, Sparkles, Wrench, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const entries = [
  {
    version: "v2.0.0",
    date: "April 2026",
    type: "major",
    icon: Sparkles,
    iconColor: "#00f0ff",
    title: "D4Digit 2.0 Launch",
    changes: [
      "Complete redesign with dark SaaS theme and neon gradients",
      "New Tools page with live search and category filters",
      "Blog section with featured posts and article grid",
      "Contact page with animated form",
      "Improved navbar with active link detection",
    ],
  },
  {
    version: "v1.5.0",
    date: "January 2026",
    type: "feature",
    icon: Zap,
    iconColor: "#3b82f6",
    title: "New Tools & Performance",
    changes: [
      "Added Password Generator with strength meter",
      "Added JSON Formatter with syntax highlighting",
      "Improved image compression algorithm",
      "Faster page load times across all routes",
    ],
  },
  {
    version: "v1.2.0",
    date: "October 2025",
    type: "improvement",
    icon: Wrench,
    iconColor: "#a855f7",
    title: "Polish & Fixes",
    changes: [
      "Fixed scroll position on page navigation",
      "Improved mobile responsiveness across all pages",
      "Added footer legal links and privacy policy",
      "Bug fixes for color palette generator",
    ],
  },
  {
    version: "v1.0.0",
    date: "August 2025",
    type: "major",
    icon: GitCommit,
    iconColor: "#22c55e",
    title: "Initial Release",
    changes: [
      "Launched D4Digit with 4 core tools",
      "Homepage with hero, features, and newsletter",
      "Basic routing and page structure",
    ],
  },
];

const typeLabel: Record<string, { label: string; color: string }> = {
  major: { label: "Major", color: "#00f0ff" },
  feature: { label: "Feature", color: "#3b82f6" },
  improvement: { label: "Improvement", color: "#a855f7" },
};

export default function Changelog() {
  return (
    <div className="min-h-screen text-foreground font-sans overflow-hidden" style={{ background: "#0b0f1a" }}>
      <Navbar />
      <main className="pt-32 pb-24 relative">
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,240,255,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00f0ff, #a855f7)" }}>
                <GitCommit className="w-4 h-4 text-black" strokeWidth={2.2} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#00f0ff" }}>Updates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.025em" }}>Changelog</h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              A running log of what's new, improved, and fixed in D4Digit.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <div className="flex flex-col gap-8">
              {entries.map((entry, i) => {
                const Icon = entry.icon;
                const type = typeLabel[entry.type];
                return (
                  <motion.div key={entry.version}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-xl flex items-center justify-center z-10"
                      style={{ background: "rgba(11,15,26,1)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <Icon className="w-5 h-5" style={{ color: entry.iconColor }} />
                    </div>
                    <div className="rounded-2xl p-6 relative overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-base font-bold text-white">{entry.version}</span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                          style={{ background: "rgba(255,255,255,0.06)", color: type.color, border: "1px solid rgba(255,255,255,0.08)" }}>
                          {type.label}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto">{entry.date}</span>
                      </div>
                      <h3 className="text-base font-semibold text-white mb-3">{entry.title}</h3>
                      <ul className="space-y-2">
                        {entry.changes.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: entry.iconColor }} />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
