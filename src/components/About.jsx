import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, MapPin, Target, Zap, Recycle } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '500+', label: 'Projetos Concluídos', icon: Target },
    { number: '100+', label: 'Clientes Satisfeitos', icon: Users },
    { number: '50+', label: 'Cidades Atendidas', icon: MapPin }
  ]

  const advantages = [
    {
      icon: Zap,
      title: 'Alta Eficiência',
      description: 'Nossos geobags oferecem taxa de desidratação superior, reduzindo drasticamente o tempo de processo.'
    },
    {
      icon: Recycle,
      title: 'Sustentabilidade',
      description: 'Soluções ecológicas que promovem o reuso de materiais e minimizam impactos ambientais.'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Produtos certificados e testados, garantindo máxima durabilidade e performance em campo.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Sobre a <span className="text-gradient">NTCBag</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em desidratação de lodo com mais de 15 anos de experiência no mercado. 
            Nossa missão é transformar desafios ambientais em soluções sustentáveis e eficientes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-secondary mb-6">
              Inovação para um futuro mais limpo e seguro
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              A NTCBag é especialista na desidratação de lodo utilizando geobags em diversas obras de 
              engenharia, geotecnia e meio ambiente. Nossa expertise inclui armazenamento e desidratação 
              de lodo proveniente de estações de tratamento de esgoto, lama de rejeitos de mineração, 
              aterros hidráulicos, proteção de encostas em margens de rios e diques de contenção.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Com base em São Paulo, atendemos projetos em todo o território nacional, oferecendo 
              soluções personalizadas que atendem às necessidades específicas de cada cliente e projeto.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent"
            >
              <h4 className="font-bold text-secondary text-xl mb-3">Nossa Missão</h4>
              <p className="text-gray-600">
                Fornecer soluções inovadoras e sustentáveis em desidratação de lodo, contribuindo 
                para a preservação do meio ambiente e o desenvolvimento sustentável.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318010744_02qmfz823b1g_geobag-3-1-1024x768.jpg"
                alt="Geobag em operação"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover-lift"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318011452_95icgbwhnbv_geobag-3-8-1024x768.jpg"
                alt="Processo de desidratação"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover-lift mt-8"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-4 -left-4 bg-accent text-white p-6 rounded-lg shadow-xl"
            >
              <h4 className="font-bold text-lg mb-1">Excelência</h4>
              <p className="text-sm opacity-90">em cada projeto</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white p-6 rounded-xl shadow-lg hover-lift"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-green rounded-lg mb-6">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}