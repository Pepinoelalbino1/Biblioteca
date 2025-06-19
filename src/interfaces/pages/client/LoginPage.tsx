import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
          Iniciar Sesión
        </h1>
        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
          Accede a tu cuenta para gestionar tus reservas
        </p>
      </div>

      <div className="card" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '1rem'
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="form-input"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="form-input"
              placeholder="Tu contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              background: 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(74, 144, 226, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.3)';
            }}
          >
            Iniciar Sesión
          </button>
        </form>

        <div style={{ 
          marginTop: '1.5rem', 
          paddingTop: '1.5rem', 
          borderTop: '1px solid var(--gray-200)', 
          textAlign: 'center' 
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 1rem 0' }}>
            ¿No tienes una cuenta?
          </p>
          <Link 
            to="/signup" 
            className="btn btn-secondary"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              color: 'var(--gray-700)',
              border: '1px solid var(--gray-300)',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.color = 'var(--gray-900)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.color = 'var(--gray-700)';
            }}
          >
            Crear Cuenta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 