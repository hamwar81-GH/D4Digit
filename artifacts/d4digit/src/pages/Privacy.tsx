import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Introduction",
    body: `D4Digit is committed to protecting your privacy. This Privacy Policy explains how we handle information when you visit our website and use our tools. We believe in transparency and will always be upfront about what data, if any, is collected.

By using D4Digit, you agree to the practices described in this policy. If you do not agree, please discontinue use of the site.`,
  },
  {
    title: "2. Information We Collect",
    body: `We aim to collect as little data as possible. When you use D4Digit, we may collect:

• Basic usage data — such as pages visited, features used, and time spent on the site. This is anonymous and non-identifiable.
• Analytics data — aggregated statistics used to understand how visitors interact with the platform.
• No personal data is collected without your explicit consent. We do not require you to create an account or provide personal information to use our tools.`,
  },
  {
    title: "3. How We Use Information",
    body: `Any data collected is used solely to improve the platform. Specifically, we use it to:

• Understand which tools and features are most valuable to users.
• Monitor website performance and fix technical issues.
• Improve the overall design and user experience.

We do not sell, rent, or trade any user data to third parties for marketing or commercial purposes.`,
  },
  {
    title: "4. Cookies",
    body: `D4Digit may use cookies — small text files stored in your browser — to improve your browsing experience. These cookies are used for functional purposes only, such as remembering your preferences.

You can disable cookies in your browser settings at any time. Note that some features of the site may not function as intended if cookies are disabled.`,
  },
  {
    title: "5. Third-Party Services",
    body: `We may use trusted third-party analytics or performance monitoring tools (such as Google Analytics or similar services) to better understand how users interact with D4Digit.

These services have their own privacy policies, and we encourage you to review them. We do not share personally identifiable information with these providers.`,
  },
  {
    title: "6. Data Security",
    body: `We take reasonable technical and organizational measures to protect any data associated with your use of D4Digit. However, no method of transmission or storage over the internet is completely secure.

We encourage users not to share sensitive personal information through any contact forms or communications on this platform.`,
  },
  {
    title: "7. Your Rights",
    body: `You are always in control of your experience on D4Digit. You may:

• Choose not to share any personal information.
• Disable cookies through your browser.
• Request that any voluntarily submitted data be removed by contacting us.

We respect your choices and will respond to reasonable data requests promptly.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `This Privacy Policy may be updated from time to time to reflect changes in our practices or for legal, technical, or business reasons. When we make significant changes, we will update the "Last Updated" date at the top of this page.

We encourage you to review this policy periodically to stay informed.`,
  },
  {
    title: "9. Contact",
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us at:

hello@d4digit.com

We aim to respond to all privacy-related inquiries within 5 business days.`,
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

export default function Privacy() {
  return (
    <div
      className="min-h-screen text-foreground font-sans overflow-hidden selection:bg-primary/30 selection:text-primary"
      style={{ background: "#0b0f1a" }}
    >
      <Navbar />

      <main className="pt-32 pb-28 relative">
        {/* Background orbs */}
        <div
          className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, rgba(168,85,247,0.03) 50%, transparent 70%)",
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
                style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)" }}
              >
                <Shield className="w-4 h-4 text-white" strokeWidth={2.2} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#3b82f6" }}
              >
                Legal
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Privacy Policy
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
                "linear-gradient(90deg, rgba(59,130,246,0.4), rgba(168,85,247,0.4), transparent)",
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
                {/* Section card */}
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

                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #3b82f6, #a855f7)",
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
              Questions?{" "}
              <a
                href="mailto:hello@d4digit.com"
                className="font-semibold transition-colors duration-200 hover:text-white"
                style={{ color: "#3b82f6" }}
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
