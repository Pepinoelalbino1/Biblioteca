import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './interfaces/components/Layout/Sidebar';
import { Dashboard } from './interfaces/pages/admin/Dashboard';
import { Libraries } from './interfaces/pages/admin/Libraries';
import { Resources } from './interfaces/pages/admin/Resources';

const AdminApp: React.FC = () => {
  return (
    <div className="app">
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="libraries" element={<Libraries />} />
            <Route path="resources" element={<Resources />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminApp; 