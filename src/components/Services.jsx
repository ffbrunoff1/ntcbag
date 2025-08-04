import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Droplets, Shield, Leaf, ArrowRight, CheckCircle } from 'lucide-react'

export default function Services() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318009939_o58ul4rtmy_geobag-eventos-treinamentos-1-1.jpg',
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318010744_02qmfz823b1g_geobag-3-1-1024x768.jpg',
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318011452_95icgbwhnbv_geobag-3-8-1024x768.jpg',
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318012277_0bue5np7awv_geobag-3-4-1024x768.jpg',
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754318013499_y9l2qkm97n_geobag-5-1-1024x485.jpg'
  ]

  const applications = [
    {
      icon: Droplets,
      title: 'Tratamento de Esgoto',
      description: 'Desidratação de lodo de estações de tratamento com alta eficiência'
    },
    {
      icon: Shield,
      title: 'Mineração',
      description: 'Gestão de rejeitos de mineração e contenção de materiais'
    },
    {
      icon: Leaf,
      title: 'Proteção Ambiental',
      description: 'Proteção de encostas e diques de contenção sustentáveis'
    }
  ]

  const benefits = [
    'Alta taxa de desidratação (até 95%)',
    'Redução significativa de volume',
    'Material ecológico e reutilizável',
    'Instalação rápida e eficiente',
    'Baixo custo de manutenção',
    'Resistente a intempéries',
    'Compatível com diversos tipos de lodo',
    'Solução temporária ou permanente'
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Nossos <span className="text-gradient">Geobags</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluções inovadoras e sustentáveis para controle de erosão e estabilização de solo. 
            Tecnologia avançada para desidratação eficiente em diversos ambientes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-secondary mb-6">
              Tecnologia Avançada em Geobags
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Geobags são soluções inovadoras e sustentáveis para controle de erosão e estabilização de solo. 
              Projetadas para compor barreiras protetoras, elas são preenchidas com materiais como areia ou 
              cascalho, garantindo durabilidade e resistência em ambientes diversos.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Ideais para aplicações em obras de infraestrutura, projetos de engenharia costeira e recuperação 
              ambiental, as geobags oferecem uma alternativa eficiente e ecológica. Além disso, sua instalação 
              prática e manutenção mínima tornam-nas uma opção econômica para gerenciar desafios geotécnicos 
              complexos e proteger recursos naturais.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {benefits.slice(0, 4).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-600 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-gradient-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-green transition-all duration-300 hover-lift flex items-center gap-3"
            >
              Solicite um Orçamento
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover-lift"
            >
              <img
                src={images[selectedImage]}
                alt="Geobag NTCBag"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-secondary font-semibold text-sm">
                  {selectedImage + 1} / {images.length}
                </span>
              </div>
            </motion.div>

            <div className="flex gap-2 mt-4 justify-center">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedImage === index ? 'bg-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-secondary text-center mb-12">
            Aplicações dos Geobags
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-green rounded-lg mb-6">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-4">{application.title}</h4>
                <p className="text-gray-600 leading-relaxed">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-secondary text-center mb-8">
            Principais Benefícios
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-gradient-green text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-green transition-all duration-300 hover-lift"
            >
              Entre em Contato Conosco
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}