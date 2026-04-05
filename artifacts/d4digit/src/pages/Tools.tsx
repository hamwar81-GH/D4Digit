import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Type,
  KeyRound,
  ImageIcon,
  Link2,
  FileText,
  Code2,
  Palette,
  QrCode,
  ArrowRight,
  Zap,
  Search,
} from "lucide-react";
import { useState } from "react";

type Tag = "Popular" | "New" | "Coming Soon" | null;

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  tag: Tag;
  iconBg: string;
  iconColor: string;
  glowColor: string;
  category: string;
}

const tools: Tool[] = [
  {
    id: "text-formatter",
    name: "Text Formatter",
    description: "Transform text case, remove extra spaces, reverse strings, and clean up messy content in seconds.",
    icon: Type,
    tag: "Popular",
    iconBg: "linear-gradient(135deg, rgba(0,240,255,0.3), rgba(59,130,246,0.2))",
    iconColor: "#00f0ff",
    glowColor: "rgba(0,240,255,0.15)",
    category: "Text",
  },
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Generate strong, secure passwords with custom length, symbols, and character rules instantly.",
    icon: KeyRound,
    tag: "New",
    iconBg: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.2))",
    iconColor: "#c084fc",
    glowColor: "rgba(168,85,247,0.15)",
    category: "Security",
  },
  {
    id: "image-compressor",
    name: "Image Compressor",
    description: "Reduce image file sizes without losing visible quality. Supports JPG, PNG, and WebP formats.",
    icon: ImageIcon,
    tag: "Popular",
    iconBg: "linear-gradient(135deg, rgba(0,240,255,0.25), rgba(59,130,246,0.2))",
    iconColor: "#38bdf8",
    glowColor: "rgba(56,189,248,0.15)",
    category: "Image",
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    description: "Create short, shareable links from long URLs. Track click stats and manage your links easily.",
    icon: Link2,
    tag: "Coming Soon",
    iconBg: "linear-gradient(135deg, rgba(251,146,60,0.25), rgba(234,179,8,0.15))",
    iconColor: "#fb923c",
    glowColor: "rgba(251,146,60,0.12)",
    category: "Utilities",
  },
  {
    id: "image-tools",
    name: "Image Tools",
    description: "Crop, resize, rotate, and convert images between formats — all in your browser, no upload needed.",
    icon: Palette,
    tag: "Coming Soon",
    iconBg: "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(168,85,247,0.2))",
    iconColor: "#f472b6",
    glowColor: "rgba(236,72,153,0.12)",
    category: "Image",
  },
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format, validate, and beautify JSON data with syntax highlighting and error detection.",
    icon: Code2,
    tag: null,
    iconBg: "linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.15))",
    iconColor: "#4ade80",
    glowColor: "rgba(34,197,94,0.12)",
    category: "Code",
  },
  {
    id: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, sentences, and estimate reading time. Great for writers and SEO.",
    icon: FileText,
    tag: null,
    iconBg: "linear-gradient(135deg, rgba(0,240,255,0.2), rgba(99,102,241,0.2))",
    iconColor: "#818cf8",
    glowColor: "rgba(99,102,241,0.12)",
    category: "Text",
  },
  {
    id: "qr-generator",
    name: "QR Code Generator",
    description: "Create customizable QR codes for any URL, text, or email address. Download as PNG or SVG.",
    icon: QrCode,
    tag: "Popular",
    iconBg: "linear-gradient(135deg, rgba(0,240,255,0.25), rgba(59,130,246,0.2))",
    iconColor: "#00f0ff",
    glowColor: "rgba(0,240,255,0.12)",
    category: "Utilities",
  },
];

const categories = ["All", "Text", "Image", "Code", "Security", "Utilities"];

const tagStyles: Record<string, React.CSSProperties> = {
  Popular: {
    background: "rgba(0,240,255,0.1)",
    border: "1px solid rgba(0,240,255,0.25)",
    color: "#00f0ff",
  },
  New: {
    background: "rgba(168,85,247,0.1)",
    border: "1px solid rgba(168,85,247,0.3)",
    color: "#c084fc",
  },
  "Coming Soon": {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.4)",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = tools.filter((t) => {
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    const matchesSearch =
      !search ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="min-h-screen text-foreground font-sans overflow-hidden selection:bg-primary/30 selection:text-primary"
      style={{ background: "#0b0f1a" }}
    >
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Background orbs */}
        <div
          className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(0,240,255,0.05) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="fixed top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(168,85,247,0.05)", filter: "blur(80px)" }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00f0ff, #3b82f6)" }}
              >
                <Zap className="w-4 h-4 text-black" strokeWidth={2.5} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#00f0ff" }}
              >
                All Tools
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              Tools
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Powerful utilities to boost your productivity — free, fast, and no sign-up required.
            </p>
          </motion.div>

          {/* Search + Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                style={{ color: "rgba(255,255,255,0.3)" }}
              />
              <input
                type="search"
                placeholder="Search tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-xl text-sm text-white placeholder:text-muted-foreground outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,240,255,0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,240,255,0.07)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="h-11 px-4 rounded-xl text-sm font-medium transition-all duration-200"
                  style={
                    activeCategory === cat
                      ? {
                          background: "linear-gradient(135deg, rgba(0,240,255,0.15), rgba(59,130,246,0.15))",
                          border: "1px solid rgba(0,240,255,0.3)",
                          color: "#00f0ff",
                        }
                      : {
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.5)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat) {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat) {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm text-muted-foreground mb-8"
          >
            Showing{" "}
            <span className="text-white font-semibold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "tool" : "tools"}
            {activeCategory !== "All" && (
              <> in <span className="text-white font-semibold">{activeCategory}</span></>
            )}
          </motion.p>

          {/* Tools grid */}
          {filtered.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeCategory + search}
            >
              {filtered.map((tool) => {
                const isComingSoon = tool.tag === "Coming Soon";
                return (
                  <motion.div
                    key={tool.id}
                    variants={cardVariants}
                    whileHover={!isComingSoon ? { y: -6, scale: 1.015 } : { scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group relative"
                  >
                    {/* Glow ring on hover */}
                    {!isComingSoon && (
                      <div
                        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: tool.glowColor, filter: "blur(14px)" }}
                      />
                    )}

                    <div
                      className="relative h-full p-6 rounded-2xl flex flex-col transition-all duration-300"
                      style={{
                        background: isComingSoon
                          ? "rgba(255,255,255,0.015)"
                          : "rgba(255,255,255,0.028)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        opacity: isComingSoon ? 0.7 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (!isComingSoon) {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                      }}
                    >
                      {/* Top shimmer */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-2xl" />

                      {/* Header row */}
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: tool.iconBg }}
                        >
                          <tool.icon className="h-5 w-5" style={{ color: tool.iconColor }} strokeWidth={1.75} />
                        </div>

                        {tool.tag && (
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-2"
                            style={tagStyles[tool.tag]}
                          >
                            {tool.tag}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                        {tool.description}
                      </p>

                      {/* CTA */}
                      {isComingSoon ? (
                        <div
                          className="w-full h-10 rounded-xl text-sm font-semibold flex items-center justify-center"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            color: "rgba(255,255,255,0.3)",
                            cursor: "not-allowed",
                          }}
                        >
                          Coming Soon
                        </div>
                      ) : (
                        <button
                          className="group/btn w-full h-10 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.8)",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "linear-gradient(135deg, #00f0ff, #3b82f6)";
                            el.style.border = "1px solid transparent";
                            el.style.color = "#0b0f1a";
                            el.style.boxShadow = "0 0 24px rgba(0,240,255,0.25)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "rgba(255,255,255,0.05)";
                            el.style.border = "1px solid rgba(255,255,255,0.08)";
                            el.style.color = "rgba(255,255,255,0.8)";
                            el.style.boxShadow = "none";
                          }}
                        >
                          Use Tool
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-muted-foreground text-lg">No tools match your search.</p>
              <button
                className="mt-4 text-sm font-medium transition-colors duration-200"
                style={{ color: "#00f0ff" }}
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
