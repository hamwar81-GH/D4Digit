import { motion } from "framer-motion";
import { Zap, Heart, BookOpen, Layers } from "lucide-react";

const reasons = [
  {
    title: "Lightning Fast",
    description: "Optimized for speed. No bloated loading times or unnecessary redirects.",
    icon: Zap
  },
  {
    title: "Always Free",
    description: "Core tools are free to use, forever. No hidden fees or surprise paywalls.",
    icon: Heart
  },
  {
    title: "Learning-Focused",
    description: "Every tool includes tips and explanations to help you understand how it works.",
    icon: BookOpen
  },
  {
    title: "Scalable Platform",
    description: "Built on modern architecture that grows with your needs.",
    icon: Layers
  }
];

export default function WhyD4Digit() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Why choose <span className="text-primary">D4Digit?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We built the platform we wanted to use ourselves—clean, fast, and focused on getting the job done.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
