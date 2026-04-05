import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto max-w-4xl relative"
      >
        {/* Animated glow border */}
        <div
          className="absolute -inset-px rounded-[2rem] pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(0,240,255,0.4), rgba(59,130,246,0.3), rgba(168,85,247,0.4))",
            filter: "blur(1px)",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute -inset-[3px] rounded-[2rem] pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(0,240,255,0.15), rgba(59,130,246,0.1), rgba(168,85,247,0.15))",
            filter: "blur(16px)",
          }}
        />

        {/* Card */}
        <div
          className="relative rounded-[1.875rem] p-10 md:p-20 text-center overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Inner top shimmer */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Top gradient wash */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(0,240,255,0.07) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Icon */}
          <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8 shadow-lg"
            style={{ background: "linear-gradient(135deg, #00f0ff, #3b82f6, #a855f7)" }}
          >
            <Sparkles className="h-6 w-6 text-white" strokeWidth={1.75} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 relative z-10 leading-tight">
            Never miss a new tool
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto relative z-10 leading-relaxed">
            Join 10,000+ builders who receive our weekly roundup of the best new digital utilities and resources.
            No spam, unsubscribe anytime.
          </p>

          {/* Form */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 h-12 px-5 rounded-full text-sm text-white placeholder:text-muted-foreground outline-none transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,240,255,0.4)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,240,255,0.08)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              className="h-12 px-7 rounded-full text-sm font-bold flex-shrink-0 flex items-center justify-center gap-2 transition-all duration-300 btn-glow"
              style={{
                background: "linear-gradient(135deg, #00f0ff, #3b82f6, #a855f7)",
                color: submitted ? "white" : "#0b0f1a",
              }}
            >
              {submitted ? "Subscribed!" : (
                <>Subscribe <Send className="h-4 w-4" /></>
              )}
            </button>
          </form>

          <p className="mt-6 text-xs text-muted-foreground relative z-10">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
