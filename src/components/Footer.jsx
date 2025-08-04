import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Facebook, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318716438_wpolqhbj82a_NTCBag.png"
                alt="NTCBag"
                className="h-16 w-auto"
              />
            </motion.div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Especialistas em desidratação de lodo com mais de 15 anos de experiência. 
              Transformamos desafios ambientais em soluções sustentáveis com tecnologia avançada em geobags.
            </p>
            <p className="text-accent font-semibold text-lg mb-6">
              NTCBag: Inovação para um futuro mais limpo e seguro.
            </p>
            
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/ntcbrasil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg hover:bg-accent transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:contato@ntcbrasil.com.br"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg hover:bg-accent transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:contato@ntcbrasil.com.br"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  contato@ntcbrasil.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-3">Especialista</h4>
              <p className="text-gray-300 mb-1">João Paulo Matarazzo</p>
              <p className="text-accent text-sm">Engenheiro Ambiental</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} NTCBag. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-center md:text-right text-sm">
            Especialistas em desidratação de lodo e soluções ambientais
          </p>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}