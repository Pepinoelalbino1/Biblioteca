import React from 'react';
import { Building2, Users, BookOpen, Calendar } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  colorClass: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, colorClass }) => (
  <div className="stats-card">
    <div className="stats-card-content">
      <div className="stats-card-info">
        <h3>{title}</h3>
        <p className="value">{value}</p>
      </div>
      <div className={`stats-card-icon ${colorClass}`}>
        <Icon size={24} />
      </div>
    </div>
  </div>
);

export const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: 'Total de Bibliotecas',
      value: '24',
      icon: Building2,
      colorClass: 'blue'
    },
    {
      title: 'Servicios Activos',
      value: '156',
      icon: Users,
      colorClass: 'green'
    },
    {
      title: 'Recursos',
      value: '12.4K',
      icon: BookOpen,
      colorClass: 'purple'
    },
    {
      title: 'Reservas de Hoy',
      value: '89',
      icon: Calendar,
      colorClass: 'orange'
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};