import { motion } from "framer-motion";
import { ArrowRight, Image, Palette, Code, Type, QrCode, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    id: "img-compress",
    name: "Image Compressor",
    description: "Reduce image file sizes instantly without losing visible quality.",
    icon: Image,
    badge: "Popular",
    color: "from-blue-500/20 to-blue-600/10"
  },
  {
    id: "color-palette",
    name: "Color Palette Generator",
    description: "Extract beautiful color schemes from images or generate them randomly.",
    icon: Palette,
    badge: "New",
    color: "from-purple-500/20 to-purple-600/10"
  },
  {
    id: "json-format",
    name: "JSON Formatter",
    description: "Format, validate, and beautify your JSON data with advanced syntax highlighting.",
    icon: Code,
    badge: null,
    color: "from-emerald-500/20 to-emerald-600/10"
  },
  {
    id: "word-count",
    name: "Word Counter",
    description: "Calculate words, characters, reading time, and keyword density.",
    icon: Type,
    badge: null,
    color: "from-orange-500/20 to-orange-600/10"
  },
  {
    id: "qr-gen",
    name: "QR Code Generator",
    description: "Create customizable QR codes for URLs, text, email, and more.",
    icon: QrCode,
    badge: "Popular",
    color: "from-cyan-500/20 to-cyan-600/10"
  },
  {
    id: "markdown",
    name: "Markdown Editor",
    description: "Write and preview markdown with real-time sync and export options.",
    icon: FileText,
    badge: null,
    color: "from-pink-500/20 to-pink-600/10"
  }
];

export default function PopularTools() {
  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Powerful tools, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">zero friction</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our most popular utilities designed to help you work faster and smarter. No installation required.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full">
              View all tools <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-blue-500/0 group-hover:from-primary/30 group-hover:to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative h-full bg-card/50 backdrop-blur-xl border border-white/5 group-hover:border-primary/20 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${tool.color} border border-white/5`}>
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  
                  {tool.badge && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      tool.badge === 'Popular' 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {tool.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{tool.description}</p>
                
                <Button className="w-full bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  Use Tool
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
