import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, BarChart3, Building2, Settings } from 'lucide-react';

const sections = [
  { key: 'dashboard', label: 'Panel de Control', icon: BarChart3, path: 'dashboard' },
  { key: 'libraries', label: 'Bibliotecas', icon: Building2, path: 'libraries' },
  { key: 'resources', label: 'Recursos', icon: Settings, path: 'resources' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pathSegments = location.pathname.split('/');
  const currentSection = pathSegments[pathSegments.length - 1] || 'dashboard';

  const handleSectionClick = (path: string) => {
    navigate(path);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
            <BookOpen size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Lima App</h1>
            <p className="text-sm text-slate-300">Panel de Administración</p>
          </div>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {sections.map((section) => (
          <button
            key={section.key}
            className={`sidebar-item ${currentSection === section.key ? 'sidebar-item-active' : ''}`}
            onClick={() => handleSectionClick(section.path)}
          >
            <section.icon size={20} />
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;