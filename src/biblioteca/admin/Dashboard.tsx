import React from 'react';
import DashboardStats from './DashboardStats';
import { TrendingUp, Activity, Clock, AlertCircle, Users, BookOpen, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Panel de Control</h1>
        <p className="text-xl text-slate-600">Bienvenido a tu sistema de gestión de bibliotecas</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Análisis de Uso */}
        <div className="card">
          <div className="card-header">
            <div className="flex items-center gap-4">
              <div className="stats-icon stats-icon-emerald">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Análisis de Uso</h3>
                <p className="text-slate-600">Métricas de rendimiento de bibliotecas</p>
              </div>
            </div>
          </div>
          
          <div className="card-body space-y-4">
            <div className="glass rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={20} className="text-emerald-600" />
                    <span className="font-semibold text-slate-900">Préstamos de Libros</span>
                  </div>
                  <p className="text-sm text-slate-600">Este mes</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-emerald-600">1,234</div>
                  <div className="flex items-center gap-1 text-sm text-emerald-600">
                    <TrendingUp size={14} />
                    <span>+12%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={20} className="text-blue-600" />
                    <span className="font-semibold text-slate-900">Nuevos Miembros</span>
                  </div>
                  <p className="text-sm text-slate-600">Este mes</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">156</div>
                  <div className="flex items-center gap-1 text-sm text-blue-600">
                    <TrendingUp size={14} />
                    <span>+8%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={20} className="text-purple-600" />
                    <span className="font-semibold text-slate-900">Reservas Activas</span>
                  </div>
                  <p className="text-sm text-slate-600">Hoy</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">89</div>
                  <div className="flex items-center gap-1 text-sm text-purple-600">
                    <TrendingUp size={14} />
                    <span>+23%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actividad Reciente */}
        <div className="card">
          <div className="card-header">
            <div className="flex items-center gap-4">
              <div className="stats-icon stats-icon-amber">
                <Activity size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Actividad Reciente</h3>
                <p className="text-slate-600">Últimos eventos del sistema</p>
              </div>
            </div>
          </div>
          
          <div className="card-body space-y-3">
            {[
              { 
                icon: Clock, 
                text: 'Nueva biblioteca "Centro Tecnológico" creada', 
                time: 'hace 2 horas', 
                iconClass: 'bg-blue-100 text-blue-600' 
              },
              { 
                icon: AlertCircle, 
                text: 'Mantenimiento programado para Biblioteca Central', 
                time: 'hace 4 horas', 
                iconClass: 'bg-amber-100 text-amber-600' 
              },
              { 
                icon: TrendingUp, 
                text: 'Récord de reservas alcanzado hoy', 
                time: 'hace 6 horas', 
                iconClass: 'bg-emerald-100 text-emerald-600' 
              },
              { 
                icon: Users, 
                text: '25 nuevos usuarios registrados', 
                time: 'hace 8 horas', 
                iconClass: 'bg-purple-100 text-purple-600' 
              },
              { 
                icon: BookOpen, 
                text: 'Actualización del catálogo completada', 
                time: 'hace 12 horas', 
                iconClass: 'bg-slate-100 text-slate-600' 
              },
            ].map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-icon ${activity.iconClass}`}>
                  <activity.icon size={20} />
                </div>
                <div className="activity-content">
                  <div className="activity-text">{activity.text}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-xl font-bold text-slate-900">Acciones Rápidas</h3>
          <p className="text-slate-600">Accede a las funciones más utilizadas</p>
        </div>
        
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="btn btn-primary">
              <Users size={20} />
              Gestionar Usuarios
            </button>
            <button className="btn btn-success">
              <BookOpen size={20} />
              Añadir Recursos
            </button>
            <button className="btn btn-warning">
              <Calendar size={20} />
              Ver Reservas
            </button>
            <button className="btn btn-secondary">
              <TrendingUp size={20} />
              Generar Reportes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;