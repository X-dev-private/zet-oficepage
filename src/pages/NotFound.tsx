import { Link } from 'react-router-dom'
import { FiAlertTriangle } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 text-center">
      <div className="max-w-md w-full">
        <FiAlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Página não encontrada</h2>
        <p className="text-gray-300 mb-8">
          Oops! A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
        >
          Voltar para a página inicial
        </Link>

        <div className="mt-12 text-gray-500 text-sm">
          <p>Se você acredita que isso é um erro, entre em contato com o suporte.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound