import { motion } from "framer-motion";
import { BookOpen, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "Getting Started",
    articles: ["Introduction to D4Digit", "How to use the Tools page", "Navigating the platform"],
  },
  {
    title: "Tools Reference",
    articles: ["Text Formatter guide", "Password Generator options", "Image Compressor settings", "JSON Formatter usage"],
  },
  {
    title: "Account & Settings",
    articles: ["Creating an account (coming soon)", "Managing preferences", "Privacy and data"],
  },
  {
    title: "Integrations",
    articles: ["API access (coming soon)", "Embedding tools", "Browser extensions (coming soon)"],
  },
];

export default function Documentation() {
  return (
    <div className="min-h-screen text-foreground font-sans overflow-hidden" style={{ background: "#0b0f1a" }}>
      <Navbar />
      <main className="pt-32 pb-24 relative">
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3b82f6, #00f0ff)" }}>
                <BookOpen className="w-4 h-4 text-white" strokeWidth={2.2} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#3b82f6" }}>Documentation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.025em" }}>
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Everything you need to know about using D4Digit effectively.
            </p>
          </motion.div>

          {/* Search placeholder */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
            className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Search documentation..."
              className="w-full h-12 pl-11 pr-4 rounded-xl text-sm text-white placeholder:text-muted-foreground"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", outline: "none" }} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sections.map((section, i) => (
              <motion.div key={section.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <h3 className="text-base font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.articles.map((article) => (
                    <li key={article}>
                      <span className="text-sm text-muted-foreground hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                        {article}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
