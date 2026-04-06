import { motion } from "framer-motion";
import { LayoutTemplate } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cards = [
  { title: "Landing Page Starter", tag: "Popular", desc: "A clean, conversion-focused landing page template for SaaS products." },
  { title: "Portfolio Template", tag: "New", desc: "Showcase your work with a minimal dark-themed portfolio layout." },
  { title: "Blog Starter", tag: "Free", desc: "A well-structured blog template with markdown support and SEO defaults." },
  { title: "Dashboard UI", tag: "Popular", desc: "Admin dashboard template with charts, tables, and dark sidebar navigation." },
  { title: "Documentation Site", tag: "Free", desc: "Clean documentation layout with sidebar navigation and search." },
  { title: "E-commerce Minimal", tag: "Coming Soon", desc: "A stripped-back storefront template optimised for fast loading." },
];

const tagColor: Record<string, string> = {
  Popular: "#00f0ff",
  New: "#a855f7",
  Free: "#22c55e",
  "Coming Soon": "rgba(255,255,255,0.35)",
};

export default function Templates() {
  return (
    <div className="min-h-screen text-foreground font-sans overflow-hidden" style={{ background: "#0b0f1a" }}>
      <Navbar />
      <main className="pt-32 pb-24 relative">
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,240,255,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00f0ff, #3b82f6)" }}>
                <LayoutTemplate className="w-4 h-4 text-black" strokeWidth={2.2} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#00f0ff" }}>Templates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.025em" }}>
              Starter Templates
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Jump-start your next project with professionally designed, ready-to-use templates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div key={card.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.15)" }}>
                    <LayoutTemplate className="w-5 h-5" style={{ color: "#00f0ff" }} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.06)", color: tagColor[card.tag] || "white", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
