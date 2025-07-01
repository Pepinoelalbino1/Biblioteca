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
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-105 transition-transform duration-200">
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
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${colorClass}`}>
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
      colorClass: 'bg-gradient-to-br from-blue-500 to-blue-600',
      trend: '+12% este mes'
    },
    {
      title: 'Usuarios Activos',
      value: '5,234',
      icon: Users,
      colorClass: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      trend: '+8% este mes'
    },
    {
      title: 'Recursos Disponibles',
      value: '12.4K',
      icon: BookOpen,
      colorClass: 'bg-gradient-to-br from-purple-500 to-purple-600',
      trend: '+156 nuevos'
    },
    {
      title: 'Reservas Hoy',
      value: '89',
      icon: Calendar,
      colorClass: 'bg-gradient-to-br from-amber-500 to-amber-600',
      trend: '+23% vs ayer'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;