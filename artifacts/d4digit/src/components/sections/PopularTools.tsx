import { motion } from "framer-motion";
import { ArrowRight, ImageIcon, Palette, Code2, Type, QrCode, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    id: "img-compress",
    name: "Image Compressor",
    description: "Reduce image file sizes instantly without losing visible quality.",
    icon: ImageIcon,
    badge: "Popular",
    iconBg: "linear-gradient(135deg, rgba(0,240,255,0.25), rgba(59,130,246,0.15))",
    iconColor: "#00f0ff",
    glowColor: "rgba(0,240,255,0.12)",
  },
  {
    id: "color-palette",
    name: "Color Palette Generator",
    description: "Extract beautiful color schemes from images or generate them randomly.",
    icon: Palette,
    badge: "New",
    iconBg: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(236,72,153,0.15))",
    iconColor: "#c084fc",
    glowColor: "rgba(168,85,247,0.12)",
  },
  {
    id: "json-format",
    name: "JSON Formatter",
    description: "Format, validate, and beautify your JSON with advanced syntax highlighting.",
    icon: Code2,
    badge: null,
    iconBg: "linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.15))",
    iconColor: "#4ade80",
    glowColor: "rgba(34,197,94,0.1)",
  },
  {
    id: "word-count",
    name: "Word Counter",
    description: "Calculate words, characters, reading time, and keyword density instantly.",
    icon: Type,
    badge: null,
    iconBg: "linear-gradient(135deg, rgba(251,146,60,0.25), rgba(234,179,8,0.15))",
    iconColor: "#fb923c",
    glowColor: "rgba(251,146,60,0.1)",
  },
  {
    id: "qr-gen",
    name: "QR Code Generator",
    description: "Create customizable QR codes for URLs, text, email, and more.",
    icon: QrCode,
    badge: "Popular",
    iconBg: "linear-gradient(135deg, rgba(0,240,255,0.2), rgba(59,130,246,0.2))",
    iconColor: "#38bdf8",
    glowColor: "rgba(56,189,248,0.12)",
  },
  {
    id: "markdown",
    name: "Markdown Editor",
    description: "Write and preview markdown with real-time sync and export options.",
    icon: FileText,
    badge: null,
    iconBg: "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(168,85,247,0.15))",
    iconColor: "#f472b6",
    glowColor: "rgba(236,72,153,0.1)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PopularTools() {
  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,240,255,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
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
              Popular Tools
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Powerful tools,{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #00f0ff 0%, #3b82f6 50%, #a855f7 100%)" }}
              >
                zero friction
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our most popular utilities designed to help you work faster and smarter. No installation required.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Button
              variant="outline"
              className="group rounded-full transition-all duration-300 hover:border-white/20 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
              }}
            >
              View all tools
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Tools grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative"
            >
              {/* Hover glow ring */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${tool.glowColor}, transparent)`,
                  filter: "blur(12px)",
                }}
              />

              <div
                className="relative h-full p-6 rounded-2xl flex flex-col transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {/* Top shimmer */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-2xl" />

                <div className="flex justify-between items-start mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: tool.iconBg }}
                  >
                    <tool.icon className="h-5 w-5" style={{ color: tool.iconColor }} strokeWidth={1.75} />
                  </div>

                  {tool.badge && (
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={
                        tool.badge === "Popular"
                          ? {
                              background: "rgba(0,240,255,0.1)",
                              border: "1px solid rgba(0,240,255,0.25)",
                              color: "#00f0ff",
                            }
                          : {
                              background: "rgba(168,85,247,0.1)",
                              border: "1px solid rgba(168,85,247,0.3)",
                              color: "#c084fc",
                            }
                      }
                    >
                      {tool.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">{tool.description}</p>

                <button
                  className="w-full h-10 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
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
                    el.style.boxShadow = "0 0 20px rgba(0,240,255,0.25)";
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
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
