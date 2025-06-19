import React, { useState } from 'react';

interface Reservation {
  id: number;
  title?: string;
  author?: string;
  returnDate?: string;
  number?: string;
  date?: string;
  time?: string;
  name?: string;
  status: string;
}

interface MockReservations {
  books: Reservation[];
  cubicles: Reservation[];
  rooms: Reservation[];
}

const MyReservationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('books');

  const tabs = [
    { id: 'books', label: 'Libros', icon: '📚' },
    { id: 'cubicles', label: 'Cubículos', icon: '👤' },
    { id: 'rooms', label: 'Salas', icon: '🖥️' },
  ];

  const mockReservations: MockReservations = {
    books: [
      { id: 1, title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', returnDate: '2024-01-15', status: 'active' },
      { id: 2, title: '1984', author: 'George Orwell', returnDate: '2024-01-20', status: 'active' },
    ],
    cubicles: [
      { id: 1, number: 'A-12', date: '2024-01-10', time: '14:00-16:00', status: 'confirmed' },
    ],
    rooms: [
      { id: 1, name: 'Sala de Estudio 1', date: '2024-01-12', time: '10:00-12:00', status: 'confirmed' },
    ]
  };

  const renderReservationCard = (reservation: Reservation, type: string) => (
    <div 
      key={reservation.id}
      className="card"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          {type === 'books' && (
            <>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
                {reservation.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 0.5rem 0' }}>
                Autor: {reservation.author}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                Fecha de devolución: {reservation.returnDate}
              </p>
            </>
          )}
          {type === 'cubicles' && (
            <>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
                Cubículo {reservation.number}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 0.5rem 0' }}>
                Fecha: {reservation.date}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                Horario: {reservation.time}
              </p>
            </>
          )}
          {type === 'rooms' && (
            <>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
                {reservation.name}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 0.5rem 0' }}>
                Fecha: {reservation.date}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                Horario: {reservation.time}
              </p>
            </>
          )}
        </div>
        <div style={{ 
          padding: '0.25rem 0.75rem', 
          borderRadius: '20px', 
          fontSize: '0.75rem', 
          fontWeight: '500',
          background: reservation.status === 'active' || reservation.status === 'confirmed' 
            ? 'rgba(16, 185, 129, 0.1)' 
            : 'rgba(220, 53, 69, 0.1)',
          color: reservation.status === 'active' || reservation.status === 'confirmed' 
            ? '#10b981' 
            : '#dc3545'
        }}>
          {reservation.status === 'active' ? 'Activa' : 
           reservation.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
          Mis Reservas
        </h1>
        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
          Gestiona todas tus reservas de libros, cubículos y salas
        </p>
      </div>

      {/* Tab */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        borderBottom: '1px solid var(--gray-200)', 
        paddingBottom: '1rem' 
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === tab.id 
                ? 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))' 
                : 'transparent',
              color: activeTab === tab.id ? 'white' : 'var(--gray-700)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '1rem',
              fontWeight: '500'
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {mockReservations[activeTab as keyof MockReservations]?.length > 0 ? (
          mockReservations[activeTab as keyof MockReservations].map((reservation: Reservation) => 
            renderReservationCard(reservation, activeTab)
          )
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <span style={{ fontSize: '2rem' }}>📋</span>
            </div>
            <h3 className="empty-state-title">No tienes reservas de {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}</h3>
            <p className="empty-state-description">
              Realiza una nueva reserva para verla aquí
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReservationsPage; 