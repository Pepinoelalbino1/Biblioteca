import React from 'react';
import { MapPin, Phone, Globe, Clock, Users } from 'lucide-react';
import { Library, LibraryType } from '../../../domain/models/Library';

interface LibraryCardProps {
  library: Library;
  onClick?: () => void;
}

export const LibraryCard: React.FC<LibraryCardProps> = ({ library, onClick }) => {
  const getTypeClass = (type: LibraryType) => {
    switch (type) {
      case LibraryType.Public:
        return 'public';
      case LibraryType.Academic:
        return 'academic';
      case LibraryType.Private:
        return 'private';
      case LibraryType.Specialized:
        return 'specialized';
      default:
        return 'public';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'active';
      case 'INACTIVE':
        return 'inactive';
      case 'MAINTENANCE':
        return 'maintenance';
      default:
        return 'active';
    }
  };

  const getTypeLabel = (type: LibraryType) => {
    switch (type) {
      case LibraryType.Public:
        return 'Pública';
      case LibraryType.Academic:
        return 'Académica';
      case LibraryType.Private:
        return 'Privada';
      case LibraryType.Specialized:
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
    <div className="library-card" onClick={onClick}>
      <div className="library-card-header">
        <div>
          <h3 className="library-card-title">{library.name}</h3>
          <p className="library-card-location">
            <MapPin size={16} />
            <span>{library.location}</span>
          </p>
        </div>
        <div className="library-card-badges">
          <span className={`badge ${getTypeClass(library.type)}`}>
            {getTypeLabel(library.type)}
          </span>
          <span className={`badge ${getStatusClass(library.status)}`}>
            {getStatusLabel(library.status)}
          </span>
        </div>
      </div>

      <div className="library-card-details">
        <div className="library-card-detail">
          <Users size={16} />
          <span>Capacidad: {library.capacity}</span>
        </div>
        
        <div className="library-card-detail">
          <Phone size={16} />
          <span>{library.contactInfo.phone}</span>
        </div>

        {library.contactInfo.website && (
          <div className="library-card-detail">
            <Globe size={16} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {library.contactInfo.website}
            </span>
          </div>
        )}

        <div className="library-card-detail">
          <Clock size={16} />
          <span>
            Hoy: {library.operatingHours.monday.isClosed ? 'Cerrado' : 
            `${library.operatingHours.monday.open} - ${library.operatingHours.monday.close}`}
          </span>
        </div>
      </div>

      <div className="library-card-footer">
        <span>Creado: {library.createdAt.toLocaleDateString('es-ES')}</span>
        <span>Actualizado: {library.updatedAt.toLocaleDateString('es-ES')}</span>
      </div>
    </div>
  );
};