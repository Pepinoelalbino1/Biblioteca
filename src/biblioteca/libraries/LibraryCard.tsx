import React from 'react';
import { MapPin, Phone, Globe, Clock, Users } from 'lucide-react';
import { Library, LibraryType } from '../../core/domain/models/Library';

interface LibraryCardProps {
  library: Library;
  onClick?: () => void;
}

const typeColors: Record<LibraryType, string> = {
  PUBLIC: 'bg-blue-100 text-blue-700',
  ACADEMIC: 'bg-purple-100 text-purple-700',
  PRIVATE: 'bg-green-100 text-green-700',
  SPECIALIZED: 'bg-yellow-100 text-yellow-700',
};

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-green-100 text-green-700',
  INACTIVE: 'bg-gray-200 text-gray-500',
  MAINTENANCE: 'bg-yellow-100 text-yellow-700',
};

const LibraryCard: React.FC<LibraryCardProps> = ({ library, onClick }) => {
  const getTypeLabel = (type: LibraryType) => {
    switch (type) {
      case 'PUBLIC':
        return 'Pública';
      case 'ACADEMIC':
        return 'Académica';
      case 'PRIVATE':
        return 'Privada';
      case 'SPECIALIZED':
        return 'Especializada';
      default:
        return 'Pública';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'Activa';
      case 'INACTIVE':
        return 'Inactiva';
      case 'MAINTENANCE':
        return 'Mantenimiento';
      default:
        return 'Activa';
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 mb-4 cursor-pointer hover:shadow-lg transition flex flex-col gap-4"
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{library.name}</h3>
          <p className="flex items-center gap-1 text-gray-600 text-sm mb-1">
            <MapPin size={16} />
            <span>{library.location}</span>
          </p>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[library.type]}`}>{getTypeLabel(library.type)}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[library.status]}`}>{getStatusLabel(library.status)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <Users size={16} />
          <span>Capacidad: {library.capacity}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <Phone size={16} />
          <span>{library.contactInfo.phone}</span>
        </div>
        {library.contactInfo.website && (
          <div className="flex items-center gap-2 text-gray-700 text-sm overflow-hidden">
            <Globe size={16} />
            <span className="truncate">{library.contactInfo.website}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <Clock size={16} />
          <span>
            Hoy: {library.operatingHours.monday?.isClosed ? 'Cerrado' :
            `${library.operatingHours.monday?.open} - ${library.operatingHours.monday?.close}`}
          </span>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Creado: {library.createdAt instanceof Date ? library.createdAt.toLocaleDateString('es-ES') : ''}</span>
        <span>Actualizado: {library.updatedAt instanceof Date ? library.updatedAt.toLocaleDateString('es-ES') : ''}</span>
      </div>
    </div>
  );
};

export default LibraryCard; 