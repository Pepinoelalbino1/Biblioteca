import React from 'react';
import { Link } from 'react-router-dom';

const LibrariesPage: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
        Bibliotecas
      </h1>
      <p style={{ color: 'var(--gray-600)', margin: 0 }}>
        Explora y descubre bibliotecas en tu área
      </p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      {/* Buscar Bibliotecas Card */}
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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
            Buscar Bibliotecas
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 1.5rem 0' }}>
            Encuentra bibliotecas específicas por ubicación, tipo o características
          </p>
          <Link 
            to="/buscar" 
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

      {/* Catálogo Card */}
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
            Ver Catálogo
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 1.5rem 0' }}>
            Explora todas las bibliotecas disponibles en el catálogo completo
          </p>
          <Link 
            to="/catalogo" 
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
            Ver Catálogo
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default LibrariesPage; 