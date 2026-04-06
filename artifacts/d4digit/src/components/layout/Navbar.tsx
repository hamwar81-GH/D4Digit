import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        isScrolled
          ? {
              background: "rgba(11,15,26,0.8)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
              padding: "10px 0",
            }
          : {
              background: "rgba(11,15,26,0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              padding: "18px 0",
            }
      }
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm tracking-tight text-black"
            style={{
              background: "linear-gradient(135deg, #00f0ff, #3b82f6)",
              boxShadow: "0 0 16px rgba(0,240,255,0.35)",
              transition: "box-shadow 0.3s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 28px rgba(0,240,255,0.6)";
              el.style.transform = "scale(1.06) rotate(-3deg)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 16px rgba(0,240,255,0.35)";
              el.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            D4
          </div>
          <span
            className="font-bold text-xl tracking-tight"
            style={{ color: "white" }}
          >
            D4Digit
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group"
                style={{
                  color: active ? "white" : "rgba(255,255,255,0.5)",
                }}
                onMouseEnter={(e) => {
                  if (!active)
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                }}
                onMouseLeave={(e) => {
                  if (!active)
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                }}
              >
                {/* Hover bg pill */}
                {!active && (
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  />
                )}

                {/* Active bg pill */}
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(0,240,255,0.08)",
                      border: "1px solid rgba(0,240,255,0.18)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}

                <span className="relative z-10">{link.name}</span>

                {/* Active underline dot */}
                {active && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#00f0ff" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}

                {/* Hover underline (inactive only) */}
                {!active && (
                  <span
                    className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    style={{ background: "linear-gradient(90deg, #00f0ff, #3b82f6)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <button
            className="text-sm font-semibold h-10 px-6 rounded-full"
            style={{
              background: "rgba(0,240,255,0.08)",
              border: "1px solid rgba(0,240,255,0.25)",
              color: "#00f0ff",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "linear-gradient(135deg, #00f0ff, #3b82f6)";
              el.style.color = "#0b0f1a";
              el.style.borderColor = "transparent";
              el.style.boxShadow = "0 0 24px rgba(0,240,255,0.35)";
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

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{
            background: isMobileMenuOpen
              ? "rgba(0,240,255,0.08)"
              : "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "white",
          }}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMobileMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(11,15,26,0.97)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-medium transition-all duration-200"
                      style={
                        active
                          ? {
                              color: "white",
                              background: "rgba(0,240,255,0.07)",
                              border: "1px solid rgba(0,240,255,0.15)",
                            }
                          : {
                              color: "rgba(255,255,255,0.6)",
                              background: "transparent",
                              border: "1px solid transparent",
                            }
                      }
                    >
                      <span>{link.name}</span>
                      {active && (
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#00f0ff" }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.045, ease: "easeOut" }}
                className="mt-3 pt-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <button
                  className="w-full h-12 rounded-xl text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, #00f0ff, #3b82f6, #a855f7)",
                    color: "#0b0f1a",
                    boxShadow: "0 0 20px rgba(0,240,255,0.2)",
                  }}
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
