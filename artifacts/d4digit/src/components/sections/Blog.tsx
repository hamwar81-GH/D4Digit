import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "10 Essential Web Dev Tools for 2026",
    excerpt: "Discover the must-have utilities that are shaping the modern web development workflow this year.",
    date: "Oct 15, 2026",
    readTime: "5 min read",
    gradientFrom: "#00f0ff",
    gradientTo: "#3b82f6",
    tag: "Productivity",
  },
  {
    id: 2,
    title: "Mastering CSS Grid: A Comprehensive Guide",
    excerpt: "Break out of standard layouts with our deep dive into advanced CSS Grid techniques and patterns.",
    date: "Oct 02, 2026",
    readTime: "8 min read",
    gradientFrom: "#3b82f6",
    gradientTo: "#a855f7",
    tag: "CSS",
  },
  {
    id: 3,
    title: "Why Minimalist UI Design Converts Better",
    excerpt: "An analysis of top SaaS platforms and how reducing cognitive load leads to higher conversion rates.",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    gradientFrom: "#a855f7",
    gradientTo: "#ec4899",
    tag: "Design",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute right-0 bottom-0 w-[700px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#00f0ff" }}>
              Blog
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Insights &{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #3b82f6, #a855f7)" }}
              >
                Learning
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with the latest trends, tutorials, and guides from our digital experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <a
              href="#"
              className="group inline-flex items-center text-sm font-semibold transition-all duration-300"
              style={{ color: "#00f0ff" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#00f0ff")}
            >
              View all articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Blog cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Gradient thumbnail */}
              <div
                className="relative w-full h-52 rounded-2xl mb-6 overflow-hidden flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
                }}
              >
                {/* Abstract shapes */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/5 blur-md" />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                {/* Tag */}
                <span className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white border border-white/20">
                  {post.tag}
                </span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} /> {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 leading-snug transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})` } as React.CSSProperties}
              >
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 mt-auto"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00f0ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                Read article
                <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
