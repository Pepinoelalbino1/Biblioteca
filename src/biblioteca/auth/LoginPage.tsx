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
    <div className="flex flex-col gap-8 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Iniciar Sesión</h1>
        <p className="text-gray-600 m-0">Accede a tu cuenta para gestionar tus reservas</p>
      </div>

      <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Tu contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg px-6 py-3 font-semibold shadow transition hover:shadow-xl hover:from-blue-600 hover:to-blue-900 text-base"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600 mb-4">¿No tienes una cuenta?</p>
          <Link
            to="/signup"
            className="inline-block bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-6 py-3 font-semibold transition hover:bg-gray-200 hover:text-gray-900 text-base"
            style={{ textDecoration: 'none' }}
          >
            Crear Cuenta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 