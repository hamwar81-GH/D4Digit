import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-24 relative px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto max-w-4xl relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-[2.5rem] blur opacity-20"></div>
        
        <div className="relative bg-card/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
            Never miss a new tool
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto relative z-10">
            Join 10,000+ builders who receive our weekly roundup of the best new digital utilities and resources. No spam, unsubscribe anytime.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="h-12 bg-black/50 border-white/10 focus-visible:ring-primary/50 text-white placeholder:text-muted-foreground rounded-full px-6"
              required
            />
            <Button type="submit" className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
              Subscribe <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <p className="mt-6 text-xs text-muted-foreground relative z-10">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
