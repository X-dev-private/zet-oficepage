import { Link } from 'react-router-dom'
import { FiAlertTriangle } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-700 text-white py-12 px-4 text-center">
      <div className="w-full max-w-md space-y-8">
        <FiAlertTriangle className="w-20 h-20 text-yellow-400 mx-auto" />
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-3xl font-semibold">Página não encontrada</h2>
        </div>
        <p className="text-gray-300 text-lg">
          Oops! A página que você está procurando não existe ou foi movida.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-lg transition-colors"
          >
            Voltar para a página inicial
          </Link>
        </div>

        <div className="pt-16 text-gray-500">
          <p>Se você acredita que isso é um erro, entre em contato com o suporte.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound