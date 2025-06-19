import React, { useState } from 'react';
import { LibraryCard } from '../../components/Libraries/LibraryCard';
import { Library, LibraryType, LibraryStatus } from '../../../domain/models/Library';
import { Plus } from 'lucide-react';

export const Libraries: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<LibraryType | ''>('');
  const [selectedStatus, setSelectedStatus] = useState<LibraryStatus | ''>('');

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    type: LibraryType.Public,
    capacity: '',
    phone: '',
    email: '',
    website: '',
    status: LibraryStatus.Active
  });

  // Mock data for libraries
  const mockLibraries: Library[] = [
    {
      id: '1',
      name: 'Biblioteca Central',
      location: 'Centro de Lima',
      type: LibraryType.Public,
      capacity: 500,
      status: LibraryStatus.Active,
      contactInfo: {
        phone: '+51 1 234-5678',
        email: 'central@biblioteca.lima',
        website: 'www.bibliotecacentral.lima'
      },
      operatingHours: {
        monday: { open: '08:00', close: '20:00', isClosed: false },
        tuesday: { open: '08:00', close: '20:00', isClosed: false },
        wednesday: { open: '08:00', close: '20:00', isClosed: false },
        thursday: { open: '08:00', close: '20:00', isClosed: false },
        friday: { open: '08:00', close: '18:00', isClosed: false },
        saturday: { open: '09:00', close: '17:00', isClosed: false },
        sunday: { open: '09:00', close: '17:00', isClosed: false }
      },
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Biblioteca Universitaria',
      location: 'San Isidro',
      type: LibraryType.Academic,
      capacity: 300,
      status: LibraryStatus.Active,
      contactInfo: {
        phone: '+51 1 345-6789',
        email: 'universitaria@biblioteca.lima',
        website: 'www.bibliotecauni.lima'
      },
      operatingHours: {
        monday: { open: '07:00', close: '22:00', isClosed: false },
        tuesday: { open: '07:00', close: '22:00', isClosed: false },
        wednesday: { open: '07:00', close: '22:00', isClosed: false },
        thursday: { open: '07:00', close: '22:00', isClosed: false },
        friday: { open: '07:00', close: '20:00', isClosed: false },
        saturday: { open: '08:00', close: '18:00', isClosed: false },
        sunday: { open: '08:00', close: '18:00', isClosed: false }
      },
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-02-10')
    },
    {
      id: '3',
      name: 'Biblioteca Especializada',
      location: 'Miraflores',
      type: LibraryType.Specialized,
      capacity: 150,
      status: LibraryStatus.Maintenance,
      contactInfo: {
        phone: '+51 1 456-7890',
        email: 'especializada@biblioteca.lima',
        website: 'www.bibliotecaesp.lima'
      },
      operatingHours: {
        monday: { open: '09:00', close: '18:00', isClosed: false },
        tuesday: { open: '09:00', close: '18:00', isClosed: false },
        wednesday: { open: '09:00', close: '18:00', isClosed: false },
        thursday: { open: '09:00', close: '18:00', isClosed: false },
        friday: { open: '09:00', close: '17:00', isClosed: false },
        saturday: { open: '10:00', close: '16:00', isClosed: false },
        sunday: { open: '10:00', close: '16:00', isClosed: false }
      },
      createdAt: new Date('2024-03-05'),
      updatedAt: new Date('2024-03-05')
    }
  ];

  const filteredLibraries = mockLibraries.filter(library => {
    const matchesSearch = library.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         library.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || library.type === selectedType;
    const matchesStatus = !selectedStatus || library.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('New library data:', formData);
    setFormData({
      name: '',
      location: '',
      type: LibraryType.Public,
      capacity: '',
      phone: '',
      email: '',
      website: '',
      status: LibraryStatus.Active
    });
    setShowForm(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
            Gestión de Bibliotecas
          </h1>
          <p style={{ color: 'var(--gray-600)', margin: 0 }}>
            Administra las bibliotecas del sistema
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Plus size={20} />
          {showForm ? 'Cancelar' : 'Añadir Biblioteca'}
        </button>
      </div>

      {/* Add Library Form */}
      {showForm && (
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1.5rem 0' }}>
            Nueva Biblioteca
          </h3>
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label className="form-label">Nombre de la Biblioteca</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="form-input"
                placeholder="Ej: Biblioteca Central"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Ubicación</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="form-input"
                placeholder="Ej: Centro de Lima"
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
                <option value={LibraryType.Public}>Pública</option>
                <option value={LibraryType.Academic}>Académica</option>
                <option value={LibraryType.Private}>Privada</option>
                <option value={LibraryType.Specialized}>Especializada</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Capacidad</label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => handleInputChange('capacity', e.target.value)}
                className="form-input"
                placeholder="Ej: 500"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="form-input"
                placeholder="Ej: +51 1 234-5678"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-input"
                placeholder="Ej: contacto@biblioteca.lima"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Sitio Web</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="form-input"
                placeholder="Ej: www.biblioteca.lima"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Estado</label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="form-select"
                required
              >
                <option value={LibraryStatus.Active}>Activa</option>
                <option value={LibraryStatus.Inactive}>Inactiva</option>
                <option value={LibraryStatus.Maintenance}>Mantenimiento</option>
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
              Crear Biblioteca
            </button>
          </div>
        </div>
      )}

      {/* Search and Filters */}
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
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as LibraryType | '')}
            className="filter-select"
          >
            <option value="">Todos los tipos</option>
            <option value={LibraryType.Public}>Pública</option>
            <option value={LibraryType.Academic}>Académica</option>
            <option value={LibraryType.Private}>Privada</option>
            <option value={LibraryType.Specialized}>Especializada</option>
          </select>
          
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as LibraryStatus | '')}
            className="filter-select"
          >
            <option value="">Todos los estados</option>
            <option value={LibraryStatus.Active}>Activa</option>
            <option value={LibraryStatus.Inactive}>Inactiva</option>
            <option value={LibraryStatus.Maintenance}>Mantenimiento</option>
          </select>
        </div>
      </div>

      {/* Libraries List */}
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1rem 0' }}>
          Bibliotecas ({filteredLibraries.length} encontradas)
        </h3>
        <div className="libraries-grid">
          {filteredLibraries.map((library) => (
            <LibraryCard key={library.id} library={library} />
          ))}
        </div>
      </div>

      {filteredLibraries.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <span style={{ fontSize: '2rem' }}>🏛️</span>
          </div>
          <h3 className="empty-state-title">No se encontraron bibliotecas</h3>
          <p className="empty-state-description">
            Intenta ajustar tus criterios de búsqueda o añade una nueva biblioteca
          </p>
        </div>
      )}
    </div>
  );
};