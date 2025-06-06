import { motion } from 'framer-motion'
import { FiAward, FiCode, FiCpu, FiGlobe, FiUsers } from 'react-icons/fi'

export const About = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Efeito de fundo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4">
            Nossa História
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transformando ideias em realidade digital através de tecnologia inovadora e design excepcional
          </p>
        </motion.div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto sobre a empresa */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Quem somos
              </h3>
              <p className="text-gray-300">
                A Zero Eleven nasceu da paixão por criar soluções tecnológicas que desafiam o convencional. 
                Somos uma equipe de desenvolvedores, designers e estrategistas dedicados a construir 
                experiências digitais que impressionam e performam.
              </p>
              <p className="text-gray-300">
                Desde 2020, temos ajudado startups e empresas estabelecidas a navegar no mundo digital, 
                combinando expertise técnica com visão criativa para entregar produtos que realmente fazem 
                a diferença.
              </p>
              
              {/* Destaques */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-900/50 rounded-lg">
                    <FiUsers className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-white">+50</p>
                    <p className="text-sm text-gray-400">Clientes satisfeitos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-900/50 rounded-lg">
                    <FiCode className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-white">+120</p>
                    <p className="text-sm text-gray-400">Projetos entregues</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline/Infográfico */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-6 text-white">Nossa Jornada</h4>
              
              <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-5 before:w-px before:bg-gradient-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 border-2 border-gray-800"></div>
                    <h5 className="font-bold text-white">{item.year}</h5>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores da empresa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Nossos Valores</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800/20 hover:bg-gray-800/40 border border-gray-700/30 rounded-xl p-6 transition-all duration-300 group">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <value.icon className="text-xl text-indigo-400" />
                </div>
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Dados para a timeline
const timelineItems = [
  { year: "2020", event: "Fundação da Zero Eleven com uma pequena equipe de 3 pessoas" },
  { year: "2021", event: "Primeiro grande projeto para cliente internacional" },
  { year: "2022", event: "Expansão da equipe e abertura de novo escritório" },
  { year: "2023", event: "Lançamento de nossa plataforma de produtos próprios" },
  { year: "2024", event: "Reconhecimento como uma das melhores empresas de tecnologia" }
]

// Dados para os valores
const values = [
  {
    icon: FiAward,
    title: "Excelência",
    description: "Buscamos a perfeição em cada detalhe, entregando qualidade excepcional em todos os projetos."
  },
  {
    icon: FiCpu,
    title: "Inovação",
    description: "Desafiamos o status quo, explorando novas tecnologias e abordagens criativas."
  },
  {
    icon: FiGlobe,
    title: "Impacto",
    description: "Criamos soluções que fazem diferença real na vida das pessoas e nos negócios."
  }
]