import React from 'react';

const ClientFooter: React.FC = () => (
  <footer className="text-white text-center py-4 mt-auto bg-gradient-to-r from-blue-700 to-blue-900 shadow-inner">
    <div className="max-w-7xl mx-auto px-4">
      <span className="text-sm">&copy; {new Date().getFullYear()} BibliotecaApp. Todos los derechos reservados.</span>
    </div>
  </footer>
);

export default ClientFooter; 