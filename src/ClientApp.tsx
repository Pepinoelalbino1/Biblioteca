import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './interfaces/pages/client/HomePage';
import LoginPage from './interfaces/pages/client/LoginPage';
import SignupPage from './interfaces/pages/client/SignupPage';
import LibrariesPage from './interfaces/pages/client/LibrariesPage';
import SearchPage from './interfaces/pages/client/SearchPage';
import CatalogPage from './interfaces/pages/client/CatalogPage';
import BooksPage from './interfaces/pages/client/BooksPage';
import LibraryDetailPage from './interfaces/pages/client/LibraryDetailPage';
import ReservationsPage from './interfaces/pages/client/ReservationsPage';
import MyReservationsPage from './interfaces/pages/client/MyReservationsPage';
import ClientHeader from './interfaces/components/ClientHeader';
import ClientFooter from './interfaces/components/ClientFooter';

const ClientApp: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ClientHeader />
      <main className="flex-fill container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/bibliotecas" element={<LibrariesPage />} />
          <Route path="/buscar" element={<SearchPage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/libros" element={<BooksPage />} />
          <Route path="/biblioteca/:id" element={<LibraryDetailPage />} />
          <Route path="/reservas" element={<ReservationsPage />} />
          <Route path="/mis-reservas" element={<MyReservationsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <ClientFooter />
    </div>
  );
};

export default ClientApp; 