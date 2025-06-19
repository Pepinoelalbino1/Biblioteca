import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    {/* Mensaje de Inicio */}
    <div style={{
      background: 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))',
      borderRadius: '16px',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', margin: '0 0 0.5rem 0' }}>
        Bienvenido a Lima App
      </h1>
      <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0, fontSize: '1.1rem' }}>
        Tu plataforma para explorar y gestionar recursos de bibliotecas
      </p>
    </div>

    {/* Seccion imagen*/}
    <div style={{ textAlign: 'center' }}>
      <img 
        src="https://images.unsplash.com/photo-1533285860212-c85e7140a408?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Biblioteca"
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: 'auto',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      {/* Explorar Bibliotecas Card */}
      <div className="card" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
            Explorar Bibliotecas
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 1.5rem 0' }}>
            Descubre todas las bibliotecas disponibles y sus servicios
          </p>
          <Link 
            to="/bibliotecas" 
            className="btn btn-primary"
            style={{
              background: 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(74, 144, 226, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.3)';
            }}
          >
            Explorar
          </Link>
        </div>
      </div>

      {/* Buscar Libros Card */}
      <div className="card" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
            Buscar Libros
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 1.5rem 0' }}>
            Encuentra el libro perfecto en nuestro catálogo completo
          </p>
          <Link 
            to="/libros" 
            className="btn btn-primary"
            style={{
              background: 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(74, 144, 226, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.3)';
            }}
          >
            Buscar
          </Link>
        </div>
      </div>

      {/* Mis Reservas Card */}
      <div className="card" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
            Mis Reservas
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 1.5rem 0' }}>
            Gestiona tus reservas de libros, cubículos y salas
          </p>
          <Link 
            to="/mis-reservas" 
            className="btn btn-primary"
            style={{
              background: 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(74, 144, 226, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.3)';
            }}
          >
            Ver Reservas
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage; 