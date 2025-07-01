import React from 'react';
import DashboardStats from './DashboardStats';
import { TrendingUp, Activity, Clock, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Control</h1>
        <p className="text-gray-600 m-0">Bienvenido a tu sistema de gestión de bibliotecas</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Análisis de Uso */}
        <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow hover:shadow-lg transition p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700">
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 m-0">Análisis de Uso</h3>
              <p className="text-sm text-gray-600 m-0">Métricas de rendimiento de bibliotecas</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-green-800 m-0">Préstamos de Libros</p>
                <p className="text-sm text-green-600 m-0">Este mes</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-800 m-0">1,234</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-blue-900 m-0">Nuevos Miembros</p>
                <p className="text-sm text-blue-600 m-0">Este mes</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-900 m-0">156</p>
              </div>
            </div>
          </div>
        </div>
        {/* Actividad Reciente */}
        <div className="bg-white/80 backdrop-blur rounded-xl border border-white/20 shadow hover:shadow-lg transition p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-700">
              <Activity size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 m-0">Actividad Reciente</h3>
              <p className="text-sm text-gray-600 m-0">Últimos eventos del sistema</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: Clock, text: 'Nueva biblioteca "Centro Tecnológico" creada', time: 'hace 2 horas', color: 'text-blue-700 bg-blue-100' },
              { icon: AlertCircle, text: 'Mantenimiento programado para Biblioteca Central', time: 'hace 4 horas', color: 'text-orange-700 bg-orange-100' },
              { icon: TrendingUp, text: 'Récord de reservas alcanzado hoy', time: 'hace 6 horas', color: 'text-green-700 bg-green-100' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activity.color}`}>
                  <activity.icon size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 m-0">{activity.text}</p>
                  <p className="text-xs text-gray-500 m-0">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 