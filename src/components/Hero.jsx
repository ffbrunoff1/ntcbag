import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, CheckCircle, Droplets, Leaf, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const benefits = [
    { icon: Droplets, text: 'Desidratação Eficiente' },
    { icon: Leaf, text: 'Solução Sustentável' },
    { icon: Shield, text: 'Alta Durabilidade' }
  ]

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Transformamos
              <span className="text-gradient block">desafios ambientais</span>
              em soluções sustentáveis
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Especialistas em <strong className="text-accent">desidratação de lodo</strong> com tecnologia 
              avançada em geobags para tratamento de esgoto, mineração e obras ambientais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                >
                  <benefit.icon className="w-5 h-5 text-accent" />
                  <span className="text-white font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-green transition-all duration-300 hover-lift"
              >
                Solicitar Orçamento
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-white transition-all duration-300"
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-6 pt-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-gray-300 font-medium">15+ Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-gray-300 font-medium">Projetos em Todo Brasil</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift"
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318009939_o58ul4rtmy_geobag-eventos-treinamentos-1-1.jpg"
                alt="Geobags NTCBag"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-full">
                <Leaf className="w-8 h-8" />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-2xl p-6 max-w-xs"
            >
              <h3 className="font-bold text-secondary mb-2">Tecnologia Avançada</h3>
              <p className="text-gray-600 text-sm">
                Geobags de alta qualidade para máxima eficiência na desidratação de lodo
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-accent transition-colors"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}