import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
  {
    title: '☀️ Tangled',
    description: 'Rapunzel melarikan diri dari menara tinggi bersama pencuri menawan untuk melihat festival lentera terbang.',
    image: '/tangled.jpg',
    color: 'from-blue-900 via-navy-800 to-indigo-900',
  },
  {
    title: '🧚‍♂️ Secret of the Wings',
    description: 'Tinker Bell menyeberang ke Hutan Musim Dingin terlarang dan menemukan fakta bahwa ia memiliki saudara kembar.',
    image: '/tinkerbell.jpg',
    color: 'from-blue-900 via-navy-800 to-indigo-900',
  },
  {
    title: '❄️ Frozen 2',
    description: 'Elsa mencari asal-usul kekuatannya di hutan ajaib demi menyelamatkan kerajaan Arendelle.',
    image: '/frozen 2.jpg',
    color: 'from-blue-900 via-navy-800 to-indigo-900',
  },
  {
    title: '🦊 Zootopia',
    description: 'Seekor kelinci polisi dan rubah penipu bekerja sama memecahkan kasus konspirasi besar di kota hewan.',
    image: '/zootopia.jpg',
    color: 'from-blue-900 via-navy-800 to-indigo-900',
  },
  {
    title: '👭 Little Women',
    description: 'Kisah empat saudara perempuan March dalam menjalani hidup, cinta, dan impian pasca Perang Saudara Amerika.',
    image: '/little women.jpg',
    color: 'from-blue-900 via-navy-800 to-indigo-900',
  },
  {
    title: '🔍 Enola Holmes',
    description: 'Adik remaja Sherlock Holmes memulai petualangan berbahaya untuk menemukan ibunya yang hilang misterius.',
    image: '/enola Holmes.jpg',
    color: 'from-blue-900 via-navy-800 to-indigo-900',
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="py-24 bg-[#E0F2FE] overflow-hidden relative" // Background Biru Pastel (Sky-100)
    >
      {/* Decorative Background Glows - Dibuat lebih soft untuk background pastel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Curated Collection</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] mt-3 tracking-tight">
            My Ultimate <span className="text-blue-700">Watchlist</span> 🍿
          </h2>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative group/carousel">
          <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
            <div className="flex -ml-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="relative p-6 rounded-3xl bg-[#0F172A] border border-blue-900/50 overflow-hidden group shadow-2xl" // Warna Navy
                  >
                    <div className="relative">
                      {/* IMAGE CONTAINER */}
                      <div className="relative p-[2px] rounded-2xl bg-gradient-to-b from-blue-400 to-navy-900 overflow-hidden shadow-2xl">
                        <div className="aspect-[2/3] w-full rounded-2xl overflow-hidden bg-slate-800">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-blue-500/50">
                              <Play fill="white" className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="mt-6">
                        <h3 className="font-bold text-2xl text-blue-50">
                          {project.title}
                        </h3>
                        <p className="text-blue-200/70 mt-3 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* DECORATIVE LINE */}
                      <div className="h-1 w-12 mt-6 rounded-full bg-blue-500" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="rounded-full border-blue-300 bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="rounded-full border-blue-300 bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}