import React from 'react';
import { Link } from 'react-router-dom';

const featuredLibraries = [
  {
    name: 'Biblioteca Nacional del Perú',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    description: 'La institución bibliográfica más importante del país, ubicada en la Av. De la Poesía 160, San Borja, Lima.'
  },
  {
    name: 'Biblioteca Municipal de Miraflores',
    image: 'https://images.unsplash.com/photo-1467320424268-f91a16cf7c77?auto=format&fit=crop&w=600&q=80',
    description: 'Espacio cultural y de lectura para la comunidad, ubicada en Av. Larco 770, Miraflores.'
  },
  {
    name: 'Biblioteca Municipal de San Isidro',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
    description: 'Centro de información y cultura, ubicada en Calle Hermilio Hernández 395, San Isidro.'
  }
];

const HomePage: React.FC = () => (
  <div className="flex flex-col gap-8">
    {/* Mensaje de Inicio */}
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white flex flex-col items-center gap-6 shadow-lg">
      <div className="text-6xl mb-2">📚</div>
      <h1 className="text-4xl font-bold mb-2">Bienvenido a Lima App</h1>
      <p className="text-white/90 m-0 text-lg">Tu plataforma para explorar y gestionar recursos de bibliotecas</p>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        <Link
          to="/buscar"
          className="bg-white text-blue-700 font-semibold rounded-lg px-6 py-3 shadow hover:bg-blue-100 transition text-base"
        >
          🔍 Buscar Bibliotecas
        </Link>
        <Link
          to="/catalogo"
          className="bg-white text-blue-700 font-semibold rounded-lg px-6 py-3 shadow hover:bg-blue-100 transition text-base"
        >
          📚 Ver Catálogo
        </Link>
      </div>
    </div>

    {/* BIBLIOTECAS DESTACADAS */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center tracking-wide">BIBLIOTECAS DESTACADAS</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {featuredLibraries.map((lib, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center w-80">
            <img
              src={lib.image}
              alt={lib.name}
              className="w-full h-44 object-cover rounded-t-xl"
            />
            <div className="p-5 w-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{lib.name}</h3>
              <p className="text-gray-600 text-base text-center m-0">{lib.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomePage; 