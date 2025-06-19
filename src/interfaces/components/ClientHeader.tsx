import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/bibliotecas', label: 'Bibliotecas' },
  { to: '/libros', label: 'Libros' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/mis-reservas', label: 'Mis Reservas' },
  { to: '/login', label: 'Login' },
  { to: '/signup', label: 'Sign Up' },
];

const ClientHeader: React.FC = () => {
  const location = useLocation();
  return (
    <header className="py-2 mb-4 shadow-sm" style={{ 
      background: 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))',
      color: 'white'
    }}>
      <nav className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="navbar-brand fw-bold text-white d-flex align-items-center gap-2">
          <span role="img" aria-label="Lima" style={{ fontSize: '1.5rem' }}>🏛️</span>
          <span>Lima App</span>
        </Link>
        <div className="d-flex align-items-center gap-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-white text-decoration-none py-1 px-2 small${location.pathname === link.to ? ' fw-bold' : ''}`}
              style={{ 
                whiteSpace: 'nowrap',
                borderRadius: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
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