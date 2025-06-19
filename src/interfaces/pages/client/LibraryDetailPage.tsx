import React from 'react';

const LibraryDetailPage: React.FC = () => (
  <div className="container py-4">
    <h2 className="mb-4">Detalle de Biblioteca</h2>
    <div className="mb-4">
      <h4>Búsqueda de Libros</h4>
      <form className="row g-2 align-items-end">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Título, autor, ISBN..." />
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn-primary w-100">Buscar</button>
        </div>
      </form>
    </div>
    <div className="mb-4">
      <h5>Búsqueda Avanzada</h5>
      <form className="row g-2 align-items-end">
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Autor" />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Año" />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Editorial" />
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn-outline-primary w-100">Buscar Avanzado</button>
        </div>
      </form>
    </div>
    {/* Aquí irán los resultados de libros */}
    <div className="alert alert-info text-center">No hay libros para mostrar.</div>
  </div>
);

export default LibraryDetailPage; 