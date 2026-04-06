import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MessageSquare, Send, User } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "white",
    outline: "none",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
    width: "100%",
    borderRadius: "0.875rem",
    fontSize: "0.9375rem",
  };

  const focusedStyle: React.CSSProperties = {
    borderColor: "rgba(0,240,255,0.45)",
    boxShadow: "0 0 0 3px rgba(0,240,255,0.08), 0 0 20px rgba(0,240,255,0.06)",
  };

  const getInputStyle = (name: string): React.CSSProperties =>
    focused === name ? { ...inputBase, ...focusedStyle } : inputBase;

  return (
    <div
      className="min-h-screen text-foreground font-sans overflow-hidden selection:bg-primary/30 selection:text-primary"
      style={{ background: "#0b0f1a" }}
    >
      <Navbar />

      <main className="pt-32 pb-24 relative">
        {/* Background orbs */}
        <div
          className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,240,255,0.06) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(168,85,247,0.05)", filter: "blur(80px)" }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00f0ff, #a855f7)" }}
              >
                <Mail className="w-4 h-4 text-black" strokeWidth={2.25} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#00f0ff" }}
              >
                Contact
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
              Have questions or suggestions? We'd love to hear from you.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="max-w-xl mx-auto relative"
          >
            {/* Glow border */}
            <div
              className="absolute -inset-px rounded-[1.75rem] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,240,255,0.3), rgba(59,130,246,0.2), rgba(168,85,247,0.3))",
                filter: "blur(0.5px)",
                opacity: 0.45,
              }}
            />
            <div
              className="absolute -inset-[3px] rounded-[1.75rem] pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,240,255,0.12), rgba(59,130,246,0.08), rgba(168,85,247,0.12))",
                filter: "blur(14px)",
              }}
            />

            {/* Card */}
            <div
              className="relative rounded-[1.625rem] p-8 md:p-10 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(36px)",
                WebkitBackdropFilter: "blur(36px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Top shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #00f0ff, #3b82f6, #a855f7)",
                      boxShadow: "0 0 32px rgba(0,240,255,0.3)",
                    }}
                  >
                    <Send className="w-7 h-7 text-black" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Thanks for reaching out. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-white/70 flex items-center gap-2">
                      <User size={13} style={{ color: "#00f0ff" }} />
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      style={{ ...getInputStyle("name"), padding: "0.75rem 1rem" }}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-white/70 flex items-center gap-2">
                      <Mail size={13} style={{ color: "#00f0ff" }} />
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      style={{ ...getInputStyle("email"), padding: "0.75rem 1rem" }}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-white/70 flex items-center gap-2">
                      <MessageSquare size={13} style={{ color: "#00f0ff" }} />
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us what's on your mind..."
                      required
                      rows={5}
                      style={{
                        ...getInputStyle("message"),
                        padding: "0.875rem 1rem",
                        resize: "none",
                        fontFamily: "inherit",
                      }}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full h-13 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-1 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #00f0ff, #3b82f6, #a855f7)",
                      color: "#0b0f1a",
                      boxShadow: "0 0 20px rgba(0,240,255,0.25), 0 0 40px rgba(0,240,255,0.08)",
                      padding: "0.875rem",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 0 32px rgba(0,240,255,0.4), 0 0 64px rgba(0,240,255,0.15)";
                      el.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 0 20px rgba(0,240,255,0.25), 0 0 40px rgba(0,240,255,0.08)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Alternate contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-center mt-10"
          >
            <p className="text-sm text-muted-foreground">
              Prefer email?{" "}
              <a
                href="mailto:hello@d4digit.com"
                className="font-semibold transition-colors duration-200 hover:text-white"
                style={{ color: "#00f0ff" }}
              >
                hello@d4digit.com
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
