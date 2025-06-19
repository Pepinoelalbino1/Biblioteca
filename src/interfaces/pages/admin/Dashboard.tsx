import React from 'react';
import { DashboardStats } from '../../components/Dashboard/DashboardStats';
import { TrendingUp, Activity, Clock, AlertCircle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
          Panel de Control
        </h1>
        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
          Bienvenido a tu sistema de gestión de bibliotecas
        </p>
      </div>

      <DashboardStats />

      <div className="dashboard-grid">
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="stats-card-icon green">
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: 0 }}>
                Análisis de Uso
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                Métricas de rendimiento de bibliotecas
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '1rem', 
              background: 'rgba(16, 185, 129, 0.1)', 
              borderRadius: '12px' 
            }}>
              <div>
                <p style={{ fontWeight: '500', color: '#065f46', margin: 0 }}>Préstamos de Libros</p>
                <p style={{ fontSize: '0.875rem', color: '#047857', margin: 0 }}>Este mes</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#065f46', margin: 0 }}>1,234</p>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '1rem', 
              background: 'rgba(74, 144, 226, 0.1)', 
              borderRadius: '12px' 
            }}>
              <div>
                <p style={{ fontWeight: '500', color: 'var(--dark-blue)', margin: 0 }}>Nuevos Miembros</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--icon-blue)', margin: 0 }}>Este mes</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--dark-blue)', margin: 0 }}>156</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="stats-card-icon orange">
              <Activity size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: 0 }}>
                Actividad Reciente
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: 0 }}>
                Últimos eventos del sistema
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { icon: Clock, text: 'Nueva biblioteca "Centro Tecnológico" creada', time: 'hace 2 horas', color: 'blue' },
              { icon: AlertCircle, text: 'Mantenimiento programado para Biblioteca Central', time: 'hace 4 horas', color: 'orange' },
              { icon: TrendingUp, text: 'Récord de reservas alcanzado hoy', time: 'hace 6 horas', color: 'green' },
            ].map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-icon ${activity.color}`}>
                  <activity.icon size={20} />
                </div>
                <div className="activity-content">
                  <p className="activity-text">{activity.text}</p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};