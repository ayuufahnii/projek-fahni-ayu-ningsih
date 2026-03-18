"use client";

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import catgif from "../ass/cat disney GIF.gif";
import fotojpeg from "../ass/foto.jpeg";
import lemonbot from "../ass/lemoonboot.jpg";

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  image: [fotojpeg, lemonbot, catgif],
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    image: [fotojpeg, lemonbot, catgif],
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Dashboard analytics untuk social media dengan real-time data visualization dan reporting.',
    tags: ['React', 'D3.js', 'Firebase', 'Tailwind'],
    image: [fotojpeg, lemonbot, catgif],
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: [fotojpeg, lemonbot, catgif],
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.',
    tags: ['Premiere Pro', 'After Effects', 'YouTube'],
    image: [fotojpeg, lemonbot, catgif],
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Konten tips programming dan best practices untuk developer Indonesia.',
    tags: ['Instagram', 'TikTok', 'YouTube Shorts'],
    image: [fotojpeg, lemonbot, catgif],
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    youtube: '#',
  },
];

export default function ProjectsSection() {
  // 1. Inisialisasi Embla dengan Autoplay & Loop
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // 2. Fungsi Navigasi Manual
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects &amp; Karya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Viewport Embla */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4"> {/* Container slide */}
              {projects.map((project, index) => (
                <div 
                  key={project.title} 
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group">
                    <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                      <span className="text-6xl">{project.image}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        {project.isContent && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                            Content
                          </span>
                        )}
                        <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        {project.github && (
                          <Button variant="outline" size="sm" className="rounded-full" asChild>
                            <a href={project.github}>
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" className="rounded-full" asChild>
                            <a href={project.demo}>
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.youtube && (
                          <Button size="sm" className="rounded-full" asChild>
                            <a href={project.youtube}>
                              <Play className="h-4 w-4 mr-1" />
                              Watch
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-white transition-all"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-white transition-all"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}