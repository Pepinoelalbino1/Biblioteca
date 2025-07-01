import React from 'react';
import { Building2, Users, BookOpen, Calendar, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  colorClass: string;
  trend?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, colorClass, trend }) => (
  <div className="stats-card">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp size={16} className="text-emerald-600" />
            <span className="text-sm text-emerald-600 font-medium">{trend}</span>
          </div>
        )}
      </div>
      <div className={`stats-icon ${colorClass}`}>
        <Icon size={24} />
      </div>
    </div>
  </div>
);

const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: 'Total de Bibliotecas',
      value: '24',
      icon: Building2,
      colorClass: 'stats-icon-blue',
      trend: '+12% este mes'
    },
    {
      title: 'Usuarios Activos',
      value: '5,234',
      icon: Users,
      colorClass: 'stats-icon-emerald',
      trend: '+8% este mes'
    },
    {
      title: 'Recursos Disponibles',
      value: '12.4K',
      icon: BookOpen,
      colorClass: 'stats-icon-purple',
      trend: '+156 nuevos'
    },
    {
      title: 'Reservas Hoy',
      value: '89',
      icon: Calendar,
      colorClass: 'stats-icon-amber',
      trend: '+23% vs ayer'
    }
  ];

  return (
    <div className="grid-responsive-4 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;