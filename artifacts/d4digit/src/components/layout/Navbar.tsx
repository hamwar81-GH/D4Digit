import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/#tools" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        isScrolled
          ? {
              background: "rgba(11,15,26,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              padding: "12px 0",
            }
          : {
              background: "transparent",
              padding: "20px 0",
            }
      }
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm tracking-tight text-black transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00f0ff, #3b82f6)",
              boxShadow: "0 0 16px rgba(0,240,255,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,240,255,0.55)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(0,240,255,0.35)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            D4
          </div>
          <span className="font-bold text-xl tracking-tight text-white">D4Digit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-all duration-200 relative group"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
            >
              {link.name}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "linear-gradient(90deg, #00f0ff, #3b82f6)" }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <button
            className="text-sm font-semibold h-10 px-6 rounded-full transition-all duration-300"
            style={{
              background: "rgba(0,240,255,0.08)",
              border: "1px solid rgba(0,240,255,0.25)",
              color: "#00f0ff",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "linear-gradient(135deg, #00f0ff, #3b82f6)";
              el.style.color = "#0b0f1a";
              el.style.borderColor = "transparent";
              el.style.boxShadow = "0 0 24px rgba(0,240,255,0.3)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(0,240,255,0.08)";
              el.style.color = "#00f0ff";
              el.style.borderColor = "rgba(0,240,255,0.25)";
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-1 rounded-lg transition-colors"
          style={{ background: "rgba(255,255,255,0.05)" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(11,15,26,0.96)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-white/70 hover:text-white py-3 border-b transition-colors duration-200"
                    style={{ borderColor: "rgba(255,255,255,0.05)" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, ease: "easeOut" }}
                className="mt-4"
              >
                <button
                  className="w-full h-12 rounded-full text-sm font-bold transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #00f0ff, #3b82f6)",
                    color: "#0b0f1a",
                    boxShadow: "0 0 20px rgba(0,240,255,0.25)",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
