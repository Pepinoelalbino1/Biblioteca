import React, { useState } from 'react';

interface Library {
  id: number;
  name: string;
  location: string;
  type: string;
  status: string;
  description: string;
  capacity: number;
  operatingHours: string;
}

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const mockLibraries: Library[] = [
    {
      id: 1,
      name: 'Biblioteca Central de Lima',
      location: 'Centro Histórico, Lima',
      type: 'PUBLIC',
      status: 'ACTIVE',
      description: 'La biblioteca más grande de la ciudad con más de 100,000 volúmenes',
      capacity: 500,
      operatingHours: 'Lun-Vie: 8:00-20:00, Sáb: 9:00-18:00'
    },
    {
      id: 2,
      name: 'Biblioteca Universitaria San Marcos',
      location: 'Universidad Nacional Mayor de San Marcos',
      type: 'ACADEMIC',
      status: 'ACTIVE',
      description: 'Biblioteca especializada en investigación académica',
      capacity: 300,
      operatingHours: 'Lun-Vie: 7:00-22:00, Sáb: 8:00-17:00'
    },
    {
      id: 3,
      name: 'Biblioteca Infantil Miraflores',
      location: 'Miraflores, Lima',
      type: 'SPECIALIZED',
      status: 'ACTIVE',
      description: 'Biblioteca especializada en literatura infantil y juvenil',
      capacity: 150,
      operatingHours: 'Mar-Dom: 10:00-19:00'
    },
    {
      id: 4,
      name: 'Biblioteca Privada del Club',
      location: 'San Isidro, Lima',
      type: 'PRIVATE',
      status: 'ACTIVE',
      description: 'Biblioteca exclusiva para miembros del club',
      capacity: 100,
      operatingHours: 'Lun-Dom: 6:00-23:00'
    }
  ];

  const filteredLibraries = mockLibraries.filter(library => {
    const matchesSearch = library.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         library.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || library.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'PUBLIC': return 'Pública';
      case 'ACADEMIC': return 'Académica';
      case 'PRIVATE': return 'Privada';
      case 'SPECIALIZED': return 'Especializada';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PUBLIC': return { bg: 'rgba(74, 144, 226, 0.1)', color: 'var(--icon-blue)' };
      case 'ACADEMIC': return { bg: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' };
      case 'PRIVATE': return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' };
      case 'SPECIALIZED': return { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' };
      default: return { bg: 'rgba(107, 114, 128, 0.1)', color: '#6b7280' };
    }
  };

  const renderLibraryCard = (library: Library) => {
    const typeStyle = getTypeColor(library.type);
    
    return (
      <div 
        key={library.id}
        className="card"
        style={{
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
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
              {library.name}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 0.5rem 0' }}>
              📍 {library.location}
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
              {library.description}
            </p>
          </div>
          <div style={{ 
            padding: '0.25rem 0.75rem', 
            borderRadius: '20px', 
            fontSize: '0.75rem', 
            fontWeight: '500',
            background: typeStyle.bg,
            color: typeStyle.color
          }}>
            {getTypeLabel(library.type)}
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-600)', fontSize: '0.875rem' }}>
            <span>👥</span>
            <span>Capacidad: {library.capacity} personas</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gray-600)', fontSize: '0.875rem' }}>
            <span>🕒</span>
            <span>{library.operatingHours}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
          Buscar Bibliotecas
        </h1>
        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
          Encuentra la biblioteca perfecta para tus necesidades
        </p>
      </div>

      {/* Busqueda y Filtro */}
      <div className="search-filter-container">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar bibliotecas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-container">
          <span className="filter-icon">🔧</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select"
          >
            <option value="all">Todos los Tipos</option>
            <option value="PUBLIC">Pública</option>
            <option value="ACADEMIC">Académica</option>
            <option value="PRIVATE">Privada</option>
            <option value="SPECIALIZED">Especializada</option>
          </select>
        </div>
      </div>

      {/* Resultados */}
      <div className="libraries-grid">
        {filteredLibraries.map((library) => renderLibraryCard(library))}
      </div>

      {filteredLibraries.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <span style={{ fontSize: '2rem' }}>🔍</span>
          </div>
          <h3 className="empty-state-title">No se encontraron bibliotecas</h3>
          <p className="empty-state-description">
            Intenta ajustar tus criterios de búsqueda o filtro
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage; 