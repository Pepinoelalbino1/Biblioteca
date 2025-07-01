import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const sections = [
  { key: 'dashboard', label: 'Panel de Control', icon: '🏠', path: 'dashboard' },
  { key: 'libraries', label: 'Bibliotecas', icon: '📚', path: 'libraries' },
  { key: 'resources', label: 'Recursos', icon: '🔧', path: 'resources' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get current section from path - handle both /admin/dashboard and /admin/libraries
  const pathSegments = location.pathname.split('/');
  const currentSection = pathSegments[pathSegments.length - 1] || 'dashboard';

  const handleSectionClick = (path: string) => {
    navigate(path);
  };

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 text-white flex flex-col shadow-lg">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-blue-700">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-800">
          <BookOpen size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold leading-tight">Lima App</h1>
          <p className="text-xs text-blue-200">Plataforma de Gestión</p>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-2 px-4 py-6">
        {sections.map((section) => (
          <button
            key={section.key}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition text-left hover:bg-blue-700/80 ${currentSection === section.key ? 'bg-white text-blue-900 shadow font-bold' : ''}`}
            onClick={() => handleSectionClick(section.path)}
          >
            <span className="text-lg">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 