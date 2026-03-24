import { motion } from 'framer-motion';

// 1. Data Skill (Bahasa, IPA, IPS)
const skills = {
  bahasa: [ 
    { name: 'Bahasa Indonesia', level: 90 },
    { name: 'Bahasa Inggris', level: 95 },
    { name: 'Bahasa Arab', level: 90 },
  ],
  ipa: [
    { name: 'Matematika', level: 85 },
    { name: 'Fisika', level: 80 },
    { name: 'Biologi', level: 88 },
    { name: 'Kimia', level: 75 },
  ],
  ips: [
    { name: 'Ekonomi', level: 92 },
    { name: 'Sosiologi', level: 95 },
    { name: 'Geografi', level: 85 },
    { name: 'Sejarah', level: 90 },
  ],
};

// 2. Komponen SkillBar (Visualisasi Progress Bar)
function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

// 3. Komponen Utama (SkillsSection)
export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#000080] font-bold mb-2 block uppercase tracking-wider">
            keahlian
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#000080]">
            Kemampuan Akademis
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Kolom Bahasa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-display text-xl font-bold">Bahasa</h3>
            </div>
            <div className="space-y-4">
              {skills.bahasa.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Kolom IPA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-display text-xl font-bold">Sains (IPA)</h3>
            </div>
            <div className="space-y-4">
              {skills.ipa.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Kolom IPS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-display text-xl font-bold">Sosial (IPS)</h3>
            </div>
            <div className="space-y-4">
              {skills.ips.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}