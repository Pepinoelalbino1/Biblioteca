import React from 'react';
import { Building2, Users, BookOpen, Calendar } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  colorClass: string;
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
  orange: 'bg-orange-100 text-orange-700',
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, colorClass }) => (
  <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow hover:shadow-lg transition p-6 flex items-center justify-between gap-4">
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${colorMap[colorClass]}`}>
      <Icon size={24} />
    </div>
  </div>
);

const DashboardStats: React.FC = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats; 