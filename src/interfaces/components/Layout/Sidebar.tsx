import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const sections = [
  { key: 'dashboard', label: 'Panel de Control', icon: '🏠', path: 'dashboard' },
  { key: 'libraries', label: 'Bibliotecas', icon: '📚', path: 'libraries' },
  { key: 'resources', label: 'Recursos', icon: '🔧', path: 'resources' },
];

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get current section from path - handle both /admin/dashboard and /admin/libraries
  const pathSegments = location.pathname.split('/');
  const currentSection = pathSegments[pathSegments.length - 1] || 'dashboard';

  const handleSectionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <BookOpen size={24} />
        </div>
        <div>
          <h1 className="sidebar-title">Lima App</h1>
          <p className="sidebar-subtitle">Plataforma de Gestión</p>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {sections.map((section) => (
          <button
            key={section.key}
            className={`nav-item${currentSection === section.key ? ' active' : ''}`}
            onClick={() => handleSectionClick(section.path)}
          >
            <span>{section.icon}</span>
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};