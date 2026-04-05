import { motion } from "framer-motion";
import { Wrench, BookOpen, LayoutTemplate, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Powerful Tools",
    description: "A curated collection of web-based utilities to help you build, design, and optimize faster.",
    icon: Wrench,
    gradient: "linear-gradient(135deg, #00f0ff, #3b82f6)",
    glowColor: "rgba(0,240,255,0.15)",
    link: "#tools",
    badge: null,
  },
  {
    title: "Learning Hub",
    description: "Insightful articles, tutorials, and guides to level up your digital skills and knowledge.",
    icon: BookOpen,
    gradient: "linear-gradient(135deg, #3b82f6, #a855f7)",
    glowColor: "rgba(168,85,247,0.15)",
    link: "#blog",
    badge: null,
  },
  {
    title: "Starter Templates",
    description: "Production-ready templates and boilerplates to kickstart your next big project.",
    icon: LayoutTemplate,
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    glowColor: "rgba(168,85,247,0.12)",
    link: "#",
    badge: "Coming Soon",
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

export default function Features() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative rounded-2xl p-px cursor-pointer"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                style={{ background: feature.glowColor }}
              />

              <div
                className="relative h-full rounded-[calc(1rem-1px)] p-8 flex flex-col overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Inner top shimmer */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {feature.badge && (
                  <span
                    className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(168,85,247,0.15)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      color: "#c084fc",
                    }}
                  >
                    {feature.badge}
                  </span>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl mb-7 flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ background: feature.gradient }}
                >
                  <feature.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-300"
                  style={{ backgroundImage: feature.gradient } as React.CSSProperties}
                >
                  {feature.title}
                </h3>

                <p className="text-muted-foreground flex-grow mb-7 text-[15px] leading-relaxed">
                  {feature.description}
                </p>

                <a
                  href={feature.link}
                  className="inline-flex items-center text-sm font-semibold transition-all duration-300 mt-auto"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00f0ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  Explore
                  <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
