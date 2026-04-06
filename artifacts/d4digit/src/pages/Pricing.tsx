import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Everything you need to get started with D4Digit.",
    features: ["Access to all free tools", "No account required", "Unlimited tool usage", "Community support"],
    cta: "Get Started",
    highlight: false,
    gradient: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    desc: "Unlock premium tools and advanced features.",
    features: ["All Free features", "Premium tool access", "Priority support", "Early access to new tools", "No ads"],
    cta: "Coming Soon",
    highlight: true,
    gradient: "rgba(0,240,255,0.06)",
    border: "rgba(0,240,255,0.2)",
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    desc: "Collaboration tools for teams and agencies.",
    features: ["All Pro features", "Up to 10 seats", "Team dashboard", "API access", "Dedicated support"],
    cta: "Coming Soon",
    highlight: false,
    gradient: "rgba(168,85,247,0.05)",
    border: "rgba(168,85,247,0.15)",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen text-foreground font-sans overflow-hidden" style={{ background: "#0b0f1a" }}>
      <Navbar />
      <main className="pt-32 pb-24 relative">
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)" }}>
                <Zap className="w-4 h-4 text-white" strokeWidth={2.2} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#3b82f6" }}>Pricing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.025em" }}>
              Simple Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Start for free. Upgrade when you're ready. No surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div key={plan.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl p-7 relative overflow-hidden flex flex-col"
                style={{ background: plan.gradient, border: `1px solid ${plan.border}`, backdropFilter: "blur(12px)" }}>
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: "linear-gradient(90deg, #00f0ff, #3b82f6, #a855f7)" }} />
                )}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {plan.highlight && (
                  <span className="self-start text-xs font-bold px-3 py-1 rounded-full mb-4"
                    style={{ background: "rgba(0,240,255,0.12)", color: "#00f0ff", border: "1px solid rgba(0,240,255,0.2)" }}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">{plan.desc}</p>
                <div className="flex items-end gap-1.5 mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-muted-foreground mb-1.5">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#00f0ff" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full h-11 rounded-xl text-sm font-bold transition-all duration-300"
                  style={plan.highlight
                    ? { background: "linear-gradient(135deg, #00f0ff, #3b82f6)", color: "#0b0f1a", boxShadow: "0 0 20px rgba(0,240,255,0.2)" }
                    : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
