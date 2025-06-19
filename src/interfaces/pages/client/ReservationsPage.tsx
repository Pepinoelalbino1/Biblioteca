import React, { useState } from 'react';

interface ReservationForm {
  type: string;
  date: string;
  time: string;
  duration: string;
  notes: string;
}

interface Reservation {
  id: number;
  type: string;
  name: string;
  date: string;
  time: string;
  duration: string;
  status: string;
  notes?: string;
}

const ReservationsPage: React.FC = () => {
  const [formData, setFormData] = useState<ReservationForm>({
    type: '',
    date: '',
    time: '',
    duration: '',
    notes: ''
  });


  const mockReservations: Reservation[] = [
    {
      id: 1,
      type: 'cubicle',
      name: 'Cubículo A-12',
      date: '2024-01-15',
      time: '14:00',
      duration: '2 horas',
      status: 'confirmed',
      notes: 'Cerca de la ventana'
    },
    {
      id: 2,
      type: 'room',
      name: 'Sala de Estudio 1',
      date: '2024-01-16',
      time: '10:00',
      duration: '3 horas',
      status: 'pending',
      notes: 'Para grupo de estudio'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reserva enviada:', formData);
    // Aqui se procesaría la reserva
  };

  const handleInputChange = (field: keyof ReservationForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' };
      case 'pending': return { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' };
      case 'cancelled': return { bg: 'rgba(220, 53, 69, 0.1)', color: '#dc3545' };
      default: return { bg: 'rgba(107, 114, 128, 0.1)', color: '#6b7280' };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmada';
      case 'pending': return 'Pendiente';
      case 'cancelled': return 'Cancelada';
      default: return status;
    }
  };

  const renderReservationCard = (reservation: Reservation) => {
    const statusStyle = getStatusColor(reservation.status);
    
    return (
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
              {reservation.name}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                📅 {reservation.date} a las {reservation.time}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                ⏱️ Duración: {reservation.duration}
              </p>
              {reservation.notes && (
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                  📝 {reservation.notes}
                </p>
              )}
            </div>
          </div>
          <div style={{ 
            padding: '0.25rem 0.75rem', 
            borderRadius: '20px', 
            fontSize: '0.75rem', 
            fontWeight: '500',
            background: statusStyle.bg,
            color: statusStyle.color
          }}>
            {getStatusLabel(reservation.status)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
          Reservar Espacios
        </h1>
        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
          Reserva cubículos y salas para estudiar o trabajar
        </p>
      </div>

      
      {/* Formulario */}
      <div className="card" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '1.5rem'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1rem 0' }}>
          Nueva Reserva
        </h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                Tipo de espacio
              </label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="form-select"
                required
              >
                <option value="">Selecciona</option>
                <option value="cubicle">Cubículo</option>
                <option value="room">Sala</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                Fecha
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                Hora
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                Duración
              </label>
              <select
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                className="form-select"
                required
              >
                <option value="">Selecciona</option>
                <option value="1 hora">1 hora</option>
                <option value="2 horas">2 horas</option>
                <option value="3 horas">3 horas</option>
                <option value="4 horas">4 horas</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
              Notas adicionales
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              className="form-input"
              rows={3}
              placeholder="Especificaciones especiales, ubicación preferida, etc."
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            style={{
              alignSelf: 'flex-start',
              background: 'linear-gradient(135deg, var(--icon-blue), var(--dark-blue))',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(74, 144, 226, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.3)';
            }}
          >
            Reservar
          </button>
        </form>
      </div>

      {/* Reservaciones Existentes */}
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1rem 0' }}>
          Mis Reservas Activas
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mockReservations.length > 0 ? (
            mockReservations.map((reservation) => renderReservationCard(reservation))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                <span style={{ fontSize: '2rem' }}>📅</span>
              </div>
              <h3 className="empty-state-title">No tienes reservas activas</h3>
              <p className="empty-state-description">
                Realiza una nueva reserva para verla aquí
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage; 