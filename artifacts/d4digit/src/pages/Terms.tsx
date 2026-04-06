import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Introduction",
    body: `Welcome to D4Digit. By accessing or using our website and tools, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please stop using the platform.

These terms apply to all visitors and users of D4Digit. We encourage you to read them carefully before proceeding.`,
  },
  {
    title: "2. Use of Website",
    body: `D4Digit provides a collection of digital tools and resources intended for general, lawful use. When using our platform, you agree to:

• Use the tools only for their intended, legitimate purposes.
• Not engage in any activity that is harmful, illegal, or disruptive to the platform or other users.
• Not attempt to reverse engineer, copy, or exploit any part of the website or its tools.

We reserve the right to restrict or terminate access for any user who violates these conditions.`,
  },
  {
    title: "3. Intellectual Property",
    body: `All content on D4Digit — including but not limited to text, design, graphics, tool interfaces, and code — is the intellectual property of D4Digit unless otherwise stated.

You may not reproduce, distribute, or create derivative works from any content on this platform without prior written permission. Using our tools for personal or professional projects is permitted, but the tools themselves remain our property.`,
  },
  {
    title: "4. Limitation of Liability",
    body: `D4Digit provides tools and content on an "as is" basis without warranties of any kind. We do not guarantee that the platform will be error-free, uninterrupted, or always accurate.

To the fullest extent permitted by law, D4Digit is not liable for any direct, indirect, or incidental damages arising from your use of — or inability to use — the platform, including any misuse of tools or reliance on content provided.`,
  },
  {
    title: "5. Service Availability",
    body: `We strive to keep D4Digit available at all times, but we cannot guarantee uninterrupted access. Tools and features may be:

• Updated or modified to improve quality.
• Temporarily unavailable due to maintenance.
• Removed at any time without prior notice.

We are not responsible for any inconvenience caused by changes to service availability.`,
  },
  {
    title: "6. Third-Party Links",
    body: `D4Digit may contain links to external websites or services for your convenience. These links are provided without endorsement, and we have no control over the content or practices of third-party sites.

We are not responsible for the privacy policies, terms, or content of any external website you visit through links on our platform. We encourage you to review the terms of any third-party services you use.`,
  },
  {
    title: "7. Changes to Terms",
    body: `We may update these Terms of Service at any time to reflect changes in our practices, legal requirements, or platform features. When we make significant updates, we will revise the "Last Updated" date at the top of this page.

Your continued use of D4Digit after any changes are made constitutes acceptance of the updated terms. We encourage you to check this page periodically.`,
  },
  {
    title: "8. Contact Information",
    body: `If you have any questions about these Terms of Service, please contact us at:

hello@d4digit.com

We will do our best to respond to all inquiries within 5 business days.`,
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

export default function Terms() {
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
              "radial-gradient(ellipse, rgba(168,85,247,0.05) 0%, rgba(0,240,255,0.03) 50%, transparent 70%)",
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
                style={{ background: "linear-gradient(135deg, #a855f7, #00f0ff)" }}
              >
                <FileText className="w-4 h-4 text-white" strokeWidth={2.2} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#a855f7" }}
              >
                Legal
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Terms of Service
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
                "linear-gradient(90deg, rgba(168,85,247,0.5), rgba(0,240,255,0.3), transparent)",
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

                  {/* Left accent bar — purple to cyan (opposite of privacy) */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #a855f7, #00f0ff)",
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
              Questions about these terms?{" "}
              <a
                href="mailto:hello@d4digit.com"
                className="font-semibold transition-colors duration-200 hover:text-white"
                style={{ color: "#a855f7" }}
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
