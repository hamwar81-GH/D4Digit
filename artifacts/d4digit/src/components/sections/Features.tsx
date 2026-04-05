import { motion } from "framer-motion";
import { Wrench, BookOpen, LayoutTemplate, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Powerful Tools",
    description: "A curated collection of web-based utilities to help you build, design, and optimize faster.",
    icon: Wrench,
    color: "from-blue-500 to-cyan-400",
    link: "#tools",
    badge: null
  },
  {
    title: "Learning Hub",
    description: "Insightful articles, tutorials, and guides to level up your digital skills and knowledge.",
    icon: BookOpen,
    color: "from-purple-500 to-indigo-400",
    link: "#blog",
    badge: null
  },
  {
    title: "Starter Templates",
    description: "Production-ready templates and boilerplates to kickstart your next big project.",
    icon: LayoutTemplate,
    color: "from-emerald-500 to-teal-400",
    link: "#",
    badge: "Coming Soon"
  }
];

export default function Features() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-2xl blur-xl transition-all duration-500"></div>
              
              <div className="relative h-full bg-card/80 backdrop-blur-xl border border-white/5 p-8 rounded-xl flex flex-col overflow-hidden">
                {feature.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white">
                    {feature.badge}
                  </span>
                )}
                
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} bg-opacity-20 shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground flex-grow mb-6">
                  {feature.description}
                </p>
                
                <a 
                  href={feature.link}
                  className="inline-flex items-center text-sm font-medium text-white/70 group-hover:text-primary transition-colors mt-auto"
                >
                  Explore <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
