import React, { useState } from 'react';
import { Plus, BookOpen, Users, Calendar, MapPin } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  type: 'book' | 'room' | 'cubicle' | 'equipment';
  location: string;
  status: 'available' | 'occupied' | 'maintenance' | 'reserved';
  capacity?: number;
  description: string;
  libraryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const Resources: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<Resource['type'] | ''>('');
  const [selectedStatus, setSelectedStatus] = useState<Resource['status'] | ''>('');

  const [formData, setFormData] = useState({
    name: '',
    type: 'book' as Resource['type'],
    location: '',
    capacity: '',
    description: '',
    libraryId: '',
    status: 'available' as Resource['status']
  });

  // Mock data for resources
  const mockResources: Resource[] = [
    {
      id: '1',
      name: 'Sala de Estudio A',
      type: 'room',
      location: 'Piso 2 - Biblioteca Central',
      status: 'available',
      capacity: 20,
      description: 'Sala de estudio con mesas individuales y buena iluminación',
      libraryId: '1',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Cubículo 1',
      type: 'cubicle',
      location: 'Piso 1 - Biblioteca Central',
      status: 'occupied',
      capacity: 1,
      description: 'Cubículo individual para estudio privado',
      libraryId: '1',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '3',
      name: 'Proyector Multimedia',
      type: 'equipment',
      location: 'Sala de Conferencias - Biblioteca Central',
      status: 'available',
      description: 'Proyector para presentaciones y eventos',
      libraryId: '1',
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-02-10')
    },
    {
      id: '4',
      name: 'Colección Literatura Clásica',
      type: 'book',
      location: 'Estante A-1 - Biblioteca Central',
      status: 'available',
      description: 'Colección completa de literatura clásica',
      libraryId: '1',
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20')
    },
    {
      id: '5',
      name: 'Sala de Computadoras',
      type: 'room',
      location: 'Piso 3 - Biblioteca Universitaria',
      status: 'maintenance',
      capacity: 15,
      description: 'Sala con computadoras para uso académico',
      libraryId: '2',
      createdAt: new Date('2024-02-15'),
      updatedAt: new Date('2024-02-15')
    }
  ];

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || resource.type === selectedType;
    const matchesStatus = !selectedStatus || resource.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New resource data:', formData);
    setFormData({
      name: '',
      type: 'book',
      location: '',
      capacity: '',
      description: '',
      libraryId: '',
      status: 'available'
    });
    setShowForm(false);
  };

  const getTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'book':
        return <BookOpen size={20} />;
      case 'room':
        return <Users size={20} />;
      case 'cubicle':
        return <MapPin size={20} />;
      case 'equipment':
        return <Calendar size={20} />;
      default:
        return <BookOpen size={20} />;
    }
  };

  const getTypeLabel = (type: Resource['type']) => {
    switch (type) {
      case 'book':
        return 'Libro';
      case 'room':
        return 'Sala';
      case 'cubicle':
        return 'Cubículo';
      case 'equipment':
        return 'Equipamiento';
      default:
        return 'Recurso';
    }
  };


  const getStatusLabel = (status: Resource['status']) => {
    switch (status) {
      case 'available':
        return 'Disponible';
      case 'occupied':
        return 'Ocupado';
      case 'maintenance':
        return 'Mantenimiento';
      case 'reserved':
        return 'Reservado';
      default:
        return 'Disponible';
    }
  };

  const renderResourceCard = (resource: Resource) => (
    <div 
      key={resource.id}
      className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow hover:shadow-lg transition p-6 mb-4 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {getTypeIcon(resource.type)}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">{getTypeLabel(resource.type)}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Ubicación:</strong> {resource.location}</p>
          {resource.capacity && <p className="text-sm text-gray-600 mb-2"><strong>Capacidad:</strong> {resource.capacity}</p>}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${resource.status === 'available' ? 'bg-green-100 text-green-700' : resource.status === 'occupied' ? 'bg-orange-100 text-orange-700' : resource.status === 'maintenance' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>{getStatusLabel(resource.status)}</div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Creado: {resource.createdAt instanceof Date ? resource.createdAt.toLocaleDateString('es-ES') : ''}</span>
        <span>Actualizado: {resource.updatedAt instanceof Date ? resource.updatedAt.toLocaleDateString('es-ES') : ''}</span>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
            Gestión de Recursos
          </h1>
          <p style={{ color: 'var(--gray-600)', margin: 0 }}>
            Administra los recursos disponibles en las bibliotecas
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg px-6 py-3 font-semibold shadow transition hover:shadow-xl hover:from-blue-600 hover:to-blue-900"
        >
          <Plus size={20} />
          {showForm ? 'Cancelar' : 'Añadir Recurso'}
        </button>
      </div>

      {/* Add Resource Form */}
      {showForm && (
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1.5rem 0' }}>
            Nuevo Recurso
          </h3>
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label className="form-label">Nombre del Recurso</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="form-input"
                placeholder="Ej: Sala de Estudio A"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tipo</label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="form-select"
                required
              >
                <option value="book">Libro</option>
                <option value="room">Sala</option>
                <option value="cubicle">Cubículo</option>
                <option value="equipment">Equipamiento</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Ubicación</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="form-input"
                placeholder="Ej: Piso 2 - Biblioteca Central"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Capacidad (opcional)</label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => handleInputChange('capacity', e.target.value)}
                className="form-input"
                placeholder="Ej: 20"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Descripción</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="form-input"
                placeholder="Descripción del recurso..."
                rows={3}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Biblioteca</label>
              <select
                value={formData.libraryId}
                onChange={(e) => handleInputChange('libraryId', e.target.value)}
                className="form-select"
                required
              >
                <option value="">Seleccionar biblioteca</option>
                <option value="1">Biblioteca Central</option>
                <option value="2">Biblioteca Universitaria</option>
                <option value="3">Biblioteca Especializada</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Estado</label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="form-select"
                required
              >
                <option value="available">Disponible</option>
                <option value="occupied">Ocupado</option>
                <option value="maintenance">Mantenimiento</option>
                <option value="reserved">Reservado</option>
              </select>
            </div>
          </form>
          
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Crear Recurso
            </button>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 items-center bg-white/95 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-4">
        <div className="flex-1 min-w-[220px] relative">
          <span className="absolute left-3 top-3 text-xl pointer-events-none">🔍</span>
          <input
            type="text"
            placeholder="Buscar recursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xl">🔧</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as Resource['type'] | '')}
            className="px-4 py-2 rounded-md border border-gray-300 text-base focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Todos los tipos</option>
            <option value="book">Libro</option>
            <option value="room">Sala</option>
            <option value="cubicle">Cubículo</option>
            <option value="equipment">Equipamiento</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as Resource['status'] | '')}
            className="px-4 py-2 rounded-md border border-gray-300 text-base focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Todos los estados</option>
            <option value="available">Disponible</option>
            <option value="occupied">Ocupado</option>
            <option value="maintenance">Mantenimiento</option>
            <option value="reserved">Reservado</option>
          </select>
        </div>
      </div>

      {/* Resources List */}
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1rem 0' }}>
          Recursos ({filteredResources.length} encontrados)
        </h3>
        <div className="libraries-grid">
          {filteredResources.map((resource) => renderResourceCard(resource))}
        </div>
      </div>

      {filteredResources.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <span style={{ fontSize: '2rem' }}>📚</span>
          </div>
          <h3 className="empty-state-title">No se encontraron recursos</h3>
          <p className="empty-state-description">
            Intenta ajustar tus criterios de búsqueda o añade un nuevo recurso
          </p>
        </div>
      )}
    </div>
  );
}; 