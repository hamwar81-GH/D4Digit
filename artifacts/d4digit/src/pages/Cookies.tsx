import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. What Are Cookies",
    body: `Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide useful information to site owners.

Cookies do not contain personally identifiable information on their own. They simply help websites remember you and your preferences, making your experience smoother and more consistent across visits.`,
  },
  {
    title: "2. How We Use Cookies",
    body: `D4Digit uses cookies to improve your experience and keep the platform running smoothly. Specifically, we may use cookies to:

• Improve website performance and load times.
• Remember your preferences and settings between visits.
• Understand how visitors use our tools, so we can make them better.
• Gather anonymized analytics data to identify popular features and areas for improvement.

We do not use cookies to track you across other websites or serve targeted advertisements.`,
  },
  {
    title: "3. Types of Cookies",
    body: `We use two main types of cookies on D4Digit:

Essential Cookies
These cookies are necessary for the website to function properly. They enable core features like page navigation and access to secure areas. Without these cookies, the site may not work as expected. These cannot be disabled.

Analytics Cookies
These cookies help us understand how visitors interact with our platform — such as which pages are visited most often and how long users spend on each tool. This data is collected anonymously and used only to improve the site.`,
  },
  {
    title: "4. Managing Cookies",
    body: `You are in control of how cookies are used on your device. Most modern browsers allow you to:

• View the cookies stored on your device.
• Delete individual cookies or clear all cookies at once.
• Block cookies from specific websites or all websites entirely.

To manage your cookie settings, visit the settings or preferences menu in your browser. Please note that disabling certain cookies may affect how some features of D4Digit work.`,
  },
  {
    title: "5. Updates to This Policy",
    body: `We may update this Cookie Policy from time to time as our platform evolves or as regulations change. When we make meaningful changes, we will update the "Last Updated" date at the top of this page.

We encourage you to check back occasionally to stay informed about how we use cookies. Continued use of D4Digit after any changes indicates your acceptance of the updated policy.`,
  },
  {
    title: "6. Contact",
    body: `If you have any questions or concerns about our use of cookies, please reach out to us at:

hello@d4digit.com

We are happy to help and will respond to all inquiries within 5 business days.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function Cookies() {
  return (
    <div
      className="min-h-screen text-foreground font-sans overflow-hidden selection:bg-primary/30 selection:text-primary"
      style={{ background: "#0b0f1a" }}
    >
      <Navbar />

      <main className="pt-32 pb-28 relative">
        {/* Background orb */}
        <div
          className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,240,255,0.05) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">

          {/* ── Page header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00f0ff, #3b82f6)" }}
              >
                <Cookie className="w-4 h-4 text-black" strokeWidth={2.2} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#00f0ff" }}
              >
                Legal
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Cookie Policy
            </h1>

            <p className="text-base text-muted-foreground">
              Last updated:{" "}
              <span className="text-white/70 font-medium">April 6, 2026</span>
            </p>
          </motion.div>

          {/* ── Divider ── */}
          <div
            className="w-full h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,240,255,0.5), rgba(59,130,246,0.3), transparent)",
            }}
          />

          {/* ── Sections ── */}
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
              >
                <div
                  className="rounded-2xl p-7 md:p-8 relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Top shimmer */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Left accent bar — cyan to blue */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #00f0ff, #3b82f6)",
                    }}
                  />

                  <div className="pl-5">
                    <h2
                      className="text-lg md:text-xl font-bold text-white mb-4"
                      style={{ letterSpacing: "-0.015em" }}
                    >
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground text-[0.9375rem] leading-[1.85] whitespace-pre-line">
                      {section.body}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom note ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-14 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Questions about cookies?{" "}
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
