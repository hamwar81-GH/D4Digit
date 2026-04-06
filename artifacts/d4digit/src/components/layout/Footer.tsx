import { Link } from "wouter";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,240,255,0.05) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm tracking-tight text-black"
                style={{ background: "linear-gradient(135deg, #00f0ff, #3b82f6)" }}
              >
                D4
              </div>
              <span className="font-bold text-xl tracking-tight text-white">D4Digit</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-7 max-w-[240px]">
              Discover powerful utilities, learn new skills, and accelerate your digital journey in one sleek hub.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "#", icon: Twitter, label: "Twitter" },
                { href: "#", icon: Github, label: "GitHub" },
                { href: "#", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(0,240,255,0.1)";
                    el.style.borderColor = "rgba(0,240,255,0.25)";
                    el.style.color = "#00f0ff";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-widest" style={{ fontSize: "11px" }}>Product</h3>
            <ul className="space-y-3">
              {["All Tools", "Templates", "Pricing", "Changelog"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "All Tools" ? "/#tools" : "#"}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-widest" style={{ fontSize: "11px" }}>Resources</h3>
            <ul className="space-y-3">
              {["Blog", "Documentation", "Guides", "Help Center"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Blog" ? "/#blog" : "#"}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-widest" style={{ fontSize: "11px" }}>Legal</h3>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Cookie Policy", href: "/cookie-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors duration-200 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@d4digit.com"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-white flex items-center gap-2"
                >
                  <Mail size={13} /> Contact Us
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Copyright */}
          <p className="text-sm text-muted-foreground order-3 md:order-1">
            © 2026 D4Digit. All rights reserved.
          </p>

          {/* Legal links — centered */}
          <div className="flex items-center gap-1 order-1 md:order-2">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ].map((item, i, arr) => (
              <span key={item.label} className="flex items-center gap-1">
                <Link
                  href={item.href}
                  className="text-sm font-medium relative group"
                  style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")
                  }
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className="absolute -bottom-px left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                      style={{ background: "linear-gradient(90deg, #00f0ff, #3b82f6)" }}
                    />
                  </span>
                </Link>
                {i < arr.length - 1 && (
                  <span
                    className="text-xs select-none"
                    style={{ color: "rgba(255,255,255,0.15)" }}
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground order-2 md:order-3">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
