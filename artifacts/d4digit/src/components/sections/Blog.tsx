import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "10 Essential Web Dev Tools for 2026",
    excerpt: "Discover the must-have utilities that are shaping the modern web development workflow this year.",
    date: "Oct 15, 2026",
    readTime: "5 min read",
    gradient: "from-blue-600 to-cyan-400"
  },
  {
    id: 2,
    title: "Mastering CSS Grid: A Comprehensive Guide",
    excerpt: "Break out of standard layouts with our deep dive into advanced CSS Grid techniques and patterns.",
    date: "Oct 02, 2026",
    readTime: "8 min read",
    gradient: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    title: "Why Minimalist UI Design Converts Better",
    excerpt: "An analysis of top SaaS platforms and how reducing cognitive load leads to higher conversion rates.",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    gradient: "from-orange-500 to-yellow-400"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
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
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Learning</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, tutorials, and guides from our digital experts.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className={`w-full h-48 rounded-2xl mb-6 bg-gradient-to-br ${post.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                {/* Abstract patterns for thumbnails */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {post.excerpt}
              </p>
              
              <span className="text-sm font-medium text-white/70 group-hover:text-primary transition-colors inline-flex items-center mt-auto">
                Read article <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
