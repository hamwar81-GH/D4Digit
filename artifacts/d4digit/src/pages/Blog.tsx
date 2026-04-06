import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  gradientFrom: string;
  gradientTo: string;
  gradientVia?: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    id: "welcome-to-d4digit",
    title: "Welcome to D4Digit",
    excerpt:
      "We built D4Digit because we were tired of hunting across dozens of tabs for simple utilities. Today, we're opening the doors to a single, focused hub for digital tools — free, fast, and built with makers in mind.",
    date: "Apr 01, 2026",
    readTime: "3 min read",
    category: "Announcement",
    gradientFrom: "#00f0ff",
    gradientVia: "#3b82f6",
    gradientTo: "#a855f7",
    featured: true,
  },
  {
    id: "digital-tools-productivity",
    title: "How Digital Tools Improve Productivity",
    excerpt:
      "The average knowledge worker switches between 9 different apps every hour. We looked at the data — and the right set of lightweight, browser-based utilities can cut that context-switching cost by more than half.",
    date: "Mar 22, 2026",
    readTime: "6 min read",
    category: "Productivity",
    gradientFrom: "#3b82f6",
    gradientTo: "#06b6d4",
  },
  {
    id: "ai-powered-utilities",
    title: "The Future of AI-Powered Utilities",
    excerpt:
      "AI isn't just for chatbots and image generation. The next wave of everyday digital tools will use language models to understand context, auto-fix mistakes, and surface insights — right in your browser.",
    date: "Mar 10, 2026",
    readTime: "8 min read",
    category: "AI & Tech",
    gradientFrom: "#a855f7",
    gradientTo: "#ec4899",
  },
  {
    id: "css-grid-guide",
    title: "Mastering CSS Grid: A Practical Guide",
    excerpt:
      "CSS Grid changed how we think about layout. This guide skips the basics and goes straight to the patterns that actually come up in production — named lines, auto-fill vs. auto-fit, and subgrid.",
    date: "Feb 28, 2026",
    readTime: "9 min read",
    category: "CSS",
    gradientFrom: "#00f0ff",
    gradientTo: "#3b82f6",
  },
  {
    id: "minimalist-ui-conversions",
    title: "Why Minimalist UI Design Converts Better",
    excerpt:
      "Top SaaS companies share one design principle: ruthless reduction. We analyzed 40 landing pages and found that fewer choices, cleaner hierarchy, and honest CTAs consistently outperform cluttered alternatives.",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    category: "Design",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
  },
  {
    id: "security-browser-tools",
    title: "Browser-Based Security Tools You Should Use",
    excerpt:
      "You don't need to install anything to generate strong passwords, check password entropy, or encode sensitive strings. Here are the tools that security-conscious developers keep in their browser bookmarks.",
    date: "Jan 30, 2026",
    readTime: "4 min read",
    category: "Security",
    gradientFrom: "#10b981",
    gradientTo: "#3b82f6",
  },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Announcement: { bg: "rgba(0,240,255,0.1)", text: "#00f0ff", border: "rgba(0,240,255,0.25)" },
  Productivity: { bg: "rgba(59,130,246,0.1)", text: "#60a5fa", border: "rgba(59,130,246,0.25)" },
  "AI & Tech": { bg: "rgba(168,85,247,0.1)", text: "#c084fc", border: "rgba(168,85,247,0.25)" },
  CSS: { bg: "rgba(0,240,255,0.08)", text: "#22d3ee", border: "rgba(0,240,255,0.2)" },
  Design: { bg: "rgba(245,158,11,0.1)", text: "#fbbf24", border: "rgba(245,158,11,0.25)" },
  Security: { bg: "rgba(16,185,129,0.1)", text: "#34d399", border: "rgba(16,185,129,0.25)" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  const catStyle = categoryColors[post.category] ?? categoryColors["Productivity"];
  const gradient = post.gradientVia
    ? `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientVia}, ${post.gradientTo})`
    : `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex flex-col h-full cursor-pointer"
    >
      {/* Glow ring */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${post.gradientFrom}20, ${post.gradientTo}15)`,
          filter: "blur(14px)",
        }}
      />

      <div
        className="relative h-full rounded-2xl flex flex-col overflow-hidden transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.028)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
        }}
      >
        {/* Top shimmer */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent z-10" />

        {/* Gradient thumbnail */}
        <div
          className={`relative w-full flex-shrink-0 overflow-hidden ${large ? "h-64" : "h-48"}`}
          style={{ background: gradient }}
        >
          {/* Abstract layered shapes */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-6 left-6 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-black/10 blur-xl" />
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Hover dim */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-300" />

          {/* Category badge */}
          <span
            className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h2
            className={`font-bold text-white mb-3 leading-snug transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text ${
              large ? "text-2xl md:text-3xl" : "text-lg"
            }`}
            style={{ backgroundImage: gradient } as React.CSSProperties}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p
            className={`text-muted-foreground leading-relaxed flex-grow mb-6 ${
              large ? "text-base" : "text-sm"
            }`}
          >
            {post.excerpt}
          </p>

          {/* Read link */}
          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto transition-all duration-300"
            style={{ color: "rgba(255,255,255,0.4)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = post.gradientFrom)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")
            }
          >
            Read article
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div
      className="min-h-screen text-foreground font-sans overflow-hidden selection:bg-primary/30 selection:text-primary"
      style={{ background: "#0b0f1a" }}
    >
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Background orbs */}
        <div
          className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(0,240,255,0.04)", filter: "blur(80px)" }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
              >
                <BookOpen className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#a855f7" }}
              >
                Blog
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Insights, updates, and digital productivity tips from the D4Digit team.
            </p>
          </motion.div>

          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Featured
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />
            </div>
            <PostCard post={featured} large />
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.18em] flex items-center gap-2"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              <Tag size={11} />
              All Posts
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* Post grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {rest.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
