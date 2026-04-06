import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 overflow-hidden flex items-center justify-center min-h-[95vh]">
      {/* Multi-color background orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,240,255,0.12) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)" }}
      />
      <div className="absolute top-1/2 left-[20%] w-[400px] h-[400px] rounded-full pointer-events-none blur-[80px]"
        style={{ background: "rgba(168,85,247,0.07)" }}
      />
      <div className="absolute bottom-0 right-[15%] w-[350px] h-[350px] rounded-full pointer-events-none blur-[100px]"
        style={{ background: "rgba(59,130,246,0.09)" }}
      />

      {/* Top edge line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-10 text-sm font-medium"
          style={{
            background: "rgba(0,240,255,0.07)",
            border: "1px solid rgba(0,240,255,0.2)",
            color: "#00f0ff",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#00f0ff" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#00f0ff" }} />
          </span>
          D4Digit 2.0 is live — explore what's new
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-7 leading-[1.05]"
        >
          Build, Learn & Use
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #00f0ff 0%, #3b82f6 50%, #a855f7 100%)" }}
          >
            Digital Tools
          </span>{" "}
          <span className="text-white/90">in One Place</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Discover powerful utilities, learn new skills, and accelerate your digital journey.
          The sleek hub for curious builders and digital learners.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href="/tools">
            <Button
              size="lg"
              className="group w-full sm:w-auto text-base h-13 px-9 rounded-full font-semibold text-black transition-all duration-300 btn-glow"
              style={{
                background: "linear-gradient(135deg, #00f0ff 0%, #3b82f6 60%, #a855f7 100%)",
              }}
            >
              Explore Tools
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base h-13 px-9 rounded-full font-medium transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "white",
              }}
            >
              Read Blog
            </Button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          {[
            { icon: Zap, label: "Free tools" },
            { icon: CheckCircle2, label: "No signup required" },
            { icon: Shield, label: "Fast & secure" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4" style={{ color: "#00f0ff" }} />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
