import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';
import catgif from "../assets/cat disney GIF.gif";
import fotojpeg from "../assets/foto.jpeg";
import lemonbot from "..assets/lemoonboot.jpg";

export default function AboutSection() {
  const images = [catgif, fotojpeg, lemonbot];
  const [imageIndex, setImageIndex] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState(null);

  const stats = [
    { icon: Code2, value: '1+', label: 'Project Completed' },
    { icon: Video, value: '1+', label: 'Creative Video Works' },
  ];

  const accordionData = [
    {
      title: "Aspiring Web Developer",
      content: "Saya adalah seorang pelajar yang memiliki minat besar di bidang web development. Saya senang belajar membuat website yang menarik, responsif, dan mudah digunakan.",
      content2: "Saat ini saya sedang mengembangkan kemampuan coding saya melalui berbagai proyek kecil untuk meningkatkan skill coding saya."
    },
    {
      title: "Creative Content Creator",
      content: "Sebagai pengembang muda yang ambisius, saya sedang antusias mengeksplorasi dunia pengembangan web, saya percaya bahwa perjalanan didunia coding adalah proses belajar yang dinamis.",
      content2: "Fokus utama saya adalah membangun website yang fungsional, dan menarik. Bagi saya, setiap baris kode yang saya tulis bukan sekedar tugas, melainkan kesempatan berharga untuk mempelajari hal baru dan menciptakan solusi digital yang bermanfaat."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-wider">About Fahni</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Kenalan Lebih Dekat Yuk!
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side: Image/Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 flex items-center justify-center">
                  <motion.img
                    src={images[imageIndex]}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full object-cover"
                  >
                  </motion.img
                  >
                </div>
              </div>
              
              {/* Floating Experience Badge */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -right-6 p-5 glass rounded-xl shadow-2xl z-20 border border-white/20"
              >
                <p className="font-display font-bold text-2xl text-primary">3+ Bulan</p>
                <p className="text-sm text-muted-foreground font-medium">Of Learning</p>
              </motion.div>
              
              {/* Decorative Background Element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Right Side: Content & Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Accordion Component */}
            <div className="space-y-3 py-4">
              {accordionData.map((item, i) => (
                <div key={i} className="border border-white/10 rounded-lg overflow-hidden glass">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-primary transition-transform duration-300 ${activeAccordion === i ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-4 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-white/5">
                          <p className="mb-4">{item.content}</p>
                          <p>{item.content2}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center border border-white/5 hover:border-primary/30 transition-all shadow-sm"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-tighter text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}