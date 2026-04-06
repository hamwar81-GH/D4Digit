import { motion } from "framer-motion";
import { HelpCircle, Mail, MessageCircle, Book } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const faqs = [
  { q: "Do I need an account to use D4Digit tools?", a: "No. All free tools on D4Digit are available without creating an account. Just visit the Tools page and start using them instantly." },
  { q: "Are the tools really free?", a: "Yes. All currently available tools are completely free to use. We plan to offer optional premium tools in the future with a Pro plan." },
  { q: "How do I report a bug or broken tool?", a: "You can reach us via the Contact page or email us at hello@d4digit.com. We appreciate bug reports and usually respond within 1-2 business days." },
  { q: "Is my data stored when I use the tools?", a: "No. All tools run entirely in your browser. We do not store or transmit any data you input into the tools." },
  { q: "Can I suggest a new tool?", a: "Absolutely! We love hearing from users. Send your tool suggestions to hello@d4digit.com or use the Contact page." },
  { q: "Will there be an API for developers?", a: "Yes, API access is planned for the Pro and Team plans. Stay tuned for announcements on the Changelog page." },
];

const contactOptions = [
  { icon: Mail, label: "Email Us", desc: "hello@d4digit.com", color: "#00f0ff" },
  { icon: MessageCircle, label: "Contact Form", desc: "Use our contact page", color: "#3b82f6" },
  { icon: Book, label: "Documentation", desc: "Browse detailed docs", color: "#a855f7" },
];

export default function Help() {
  return (
    <div className="min-h-screen text-foreground font-sans overflow-hidden" style={{ background: "#0b0f1a" }}>
      <Navbar />
      <main className="pt-32 pb-24 relative">
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,240,255,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00f0ff, #3b82f6)" }}>
                <HelpCircle className="w-4 h-4 text-black" strokeWidth={2.2} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#00f0ff" }}>Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.025em" }}>Help Center</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Answers to common questions and ways to get in touch.
            </p>
          </motion.div>

          {/* Contact options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {contactOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.div key={opt.label}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="rounded-2xl p-5 text-center relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Icon className="w-5 h-5" style={{ color: opt.color }} />
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{opt.label}</p>
                  <p className="text-xs text-muted-foreground">{opt.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* FAQs */}
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xl font-bold text-white mb-6">Frequently Asked Questions</motion.h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.45 }}
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-base font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
