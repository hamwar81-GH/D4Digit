import { motion } from "framer-motion";
import { Zap, Heart, BookOpen, Layers } from "lucide-react";

const reasons = [
  {
    title: "Lightning Fast",
    description: "Optimized for speed. No bloated loading times or unnecessary redirects.",
    icon: Zap,
    gradient: "linear-gradient(135deg, #00f0ff, #3b82f6)",
    glowColor: "rgba(0,240,255,0.2)",
  },
  {
    title: "Always Free",
    description: "Core tools are free to use, forever. No hidden fees or surprise paywalls.",
    icon: Heart,
    gradient: "linear-gradient(135deg, #3b82f6, #a855f7)",
    glowColor: "rgba(168,85,247,0.2)",
  },
  {
    title: "Learning-Focused",
    description: "Every tool includes tips and explanations to help you understand how it works.",
    icon: BookOpen,
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    glowColor: "rgba(236,72,153,0.18)",
  },
  {
    title: "Scalable Platform",
    description: "Built on modern architecture that grows with your needs and ambitions.",
    icon: Layers,
    gradient: "linear-gradient(135deg, #00f0ff, #a855f7)",
    glowColor: "rgba(0,240,255,0.15)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyD4Digit() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle section background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(255,255,255,0.012)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#00f0ff" }}
          >
            Why D4Digit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          >
            Built for the people{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #00f0ff 0%, #3b82f6 50%, #a855f7 100%)" }}
            >
              who build things
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We built the platform we wanted to use ourselves — clean, fast, and focused on getting the job done.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl relative overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Top shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Icon */}
              <div className="relative mb-7">
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: reason.glowColor }}
                />
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: reason.gradient }}
                >
                  <reason.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
