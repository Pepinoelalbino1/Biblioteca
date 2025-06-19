import React from 'react';

const ClientFooter: React.FC = () => (
  <footer className="text-white text-center py-3 mt-auto" style={{ 
    background: 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))'
  }}>
    <div className="container">
      <span>&copy; {new Date().getFullYear()} BibliotecaApp. Todos los derechos reservados.</span>
    </div>
  </footer>
);

export default ClientFooter; 