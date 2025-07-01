import React, { useState } from 'react';
import LibraryCard from '../libraries/LibraryCard';
import { Library, LibraryType, LibraryStatus } from '../../core/domain/models/Library';
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
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Bibliotecas</h1>
          <p className="text-gray-600 m-0">Administra las bibliotecas del sistema</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg px-6 py-3 font-semibold shadow transition hover:shadow-xl hover:from-blue-600 hover:to-blue-900"
        >
          <Plus size={20} />
          {showForm ? 'Cancelar' : 'Añadir Biblioteca'}
        </button>
      </div>

      {/* Add Library Form */}
      {showForm && (
        <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Nueva Biblioteca</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Biblioteca</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: Biblioteca Central"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: Centro de Lima"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              >
                <option value={LibraryType.Public}>Pública</option>
                <option value={LibraryType.Academic}>Académica</option>
                <option value={LibraryType.Private}>Privada</option>
                <option value={LibraryType.Specialized}>Especializada</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Capacidad</label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => handleInputChange('capacity', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: 500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: +51 1 234-5678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: correo@biblioteca.lima"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sitio Web</label>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: www.biblioteca.lima"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              >
                <option value={LibraryStatus.Active}>Activa</option>
                <option value={LibraryStatus.Inactive}>Inactiva</option>
                <option value={LibraryStatus.Maintenance}>Mantenimiento</option>
              </select>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-md transition-colors">Guardar Biblioteca</button>
            </div>
          </form>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 items-center bg-white/95 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-4">
        <div className="flex-1 min-w-[220px] relative">
          <span className="absolute left-3 top-3 text-xl pointer-events-none">🔍</span>
          <input
            type="text"
            placeholder="Buscar bibliotecas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xl">🔧</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as LibraryType | '')}
            className="px-4 py-2 rounded-md border border-gray-300 text-base focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
            className="px-4 py-2 rounded-md border border-gray-300 text-base focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Bibliotecas Registradas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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