import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/buscar', label: 'Bibliotecas' },
  { to: '/libros', label: 'Libros' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/mis-reservas', label: 'Mis Reservas' },
  { to: '/login', label: 'Login' },
  { to: '/signup', label: 'Sign Up' },
];

const ClientHeader: React.FC = () => {
  const location = useLocation();
  return (
    <header className="py-2 mb-4 shadow-sm bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link to="/" className="font-bold text-white flex items-center gap-2 text-lg">
          <span role="img" aria-label="Lima" className="text-2xl">🏛️</span>
          <span>Lima App</span>
        </Link>
        <div className="flex items-center gap-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-1 px-3 text-sm rounded-lg transition-all duration-200 no-underline ${location.pathname === link.to ? 'bg-white/20 font-bold' : 'hover:bg-white/10'} text-white`}
              style={{ whiteSpace: 'nowrap' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default ClientHeader; 