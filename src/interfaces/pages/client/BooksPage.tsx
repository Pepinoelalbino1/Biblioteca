import React, { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  year: string;
  publisher: string;
  category: string;
  available: boolean;
  location: string;
}

const BooksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState({
    author: '',
    year: '',
    publisher: '',
    category: ''
  });
  const [showAdvanced, setShowAdvanced] = useState(false);

  const mockBooks: Book[] = [
    {
      id: 1,
      title: 'El Señor de los Anillos',
      author: 'J.R.R. Tolkien',
      isbn: '978-84-450-7054-7',
      year: '1954',
      publisher: 'Minotauro',
      category: 'Fantasía',
      available: true,
      location: 'Estante A-12'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-84-397-2077-5',
      year: '1949',
      publisher: 'Debolsillo',
      category: 'Ciencia Ficción',
      available: true,
      location: 'Estante B-8'
    },
    {
      id: 3,
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      isbn: '978-84-397-2077-5',
      year: '1967',
      publisher: 'Debolsillo',
      category: 'Literatura',
      available: false,
      location: 'Estante C-15'
    },
    {
      id: 4,
      title: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes',
      isbn: '978-84-376-0494-7',
      year: '1605',
      publisher: 'Cátedra',
      category: 'Clásicos',
      available: true,
      location: 'Estante A-1'
    }
  ];

  const filteredBooks = mockBooks.filter(book => {
    const matchesBasicSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              book.isbn.includes(searchTerm);
    
    const matchesAdvancedSearch = (!advancedSearch.author || book.author.toLowerCase().includes(advancedSearch.author.toLowerCase())) &&
                                 (!advancedSearch.year || book.year.includes(advancedSearch.year)) &&
                                 (!advancedSearch.publisher || book.publisher.toLowerCase().includes(advancedSearch.publisher.toLowerCase())) &&
                                 (!advancedSearch.category || book.category.toLowerCase().includes(advancedSearch.category.toLowerCase()));
    
    return matchesBasicSearch && matchesAdvancedSearch;
  });

  const handleAdvancedInputChange = (field: keyof typeof advancedSearch, value: string) => {
    setAdvancedSearch(prev => ({ ...prev, [field]: value }));
  };

  const renderBookCard = (book: Book) => (
    <div 
      key={book.id}
      className="card"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
            {book.title}
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 0.5rem 0' }}>
            <strong>Autor:</strong> {book.author}
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', margin: '0 0 0.5rem 0' }}>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
            <span><strong>Año:</strong> {book.year}</span>
            <span><strong>Editorial:</strong> {book.publisher}</span>
          </div>
        </div>
        <div style={{ 
          padding: '0.25rem 0.75rem', 
          borderRadius: '20px', 
          fontSize: '0.75rem', 
          fontWeight: '500',
          background: book.available ? 'rgba(16, 185, 129, 0.1)' : 'rgba(220, 53, 69, 0.1)',
          color: book.available ? '#10b981' : '#dc3545'
        }}>
          {book.available ? 'Disponible' : 'Prestado'}
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
        <span><strong>Categoría:</strong> {book.category}</span>
        <span><strong>Ubicación:</strong> {book.location}</span>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gray-900)', margin: '0 0 0.5rem 0' }}>
          Búsqueda de Libros
        </h1>
        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
          Encuentra el libro perfecto en nuestro catálogo
        </p>
      </div>

      {/* Busca Simple */}
      <div className="search-filter-container">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar por título, autor, ISBN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="btn btn-secondary"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            color: 'var(--gray-700)',
            border: '1px solid var(--gray-300)',
            borderRadius: '12px',
            padding: '0.75rem 1.5rem',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
            e.currentTarget.style.color = 'var(--gray-900)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.color = 'var(--gray-700)';
          }}
        >
          {showAdvanced ? 'Ocultar' : 'Mostrar'} Búsqueda Avanzada
        </button>
      </div>

      {/* Busqueda Avanzada */}
      {showAdvanced && (
        <div className="card" style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '1.5rem'
        }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1rem 0' }}>
            Búsqueda Avanzada
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                Autor
              </label>
              <input
                type="text"
                value={advancedSearch.author}
                onChange={(e) => handleAdvancedInputChange('author', e.target.value)}
                className="form-input"
                placeholder="Nombre del autor"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                Año
              </label>
              <input
                type="text"
                value={advancedSearch.year}
                onChange={(e) => handleAdvancedInputChange('year', e.target.value)}
                className="form-input"
                placeholder="Año de publicación"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                Editorial
              </label>
              <input
                type="text"
                value={advancedSearch.publisher}
                onChange={(e) => handleAdvancedInputChange('publisher', e.target.value)}
                className="form-input"
                placeholder="Nombre de la editorial"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                Categoría
              </label>
              <input
                type="text"
                value={advancedSearch.category}
                onChange={(e) => handleAdvancedInputChange('category', e.target.value)}
                className="form-input"
                placeholder="Categoría del libro"
              />
            </div>
          </div>
        </div>
      )}

      {/* Resultados */}
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', margin: '0 0 1rem 0' }}>
          Resultados ({filteredBooks.length} libros encontrados)
        </h3>
        <div className="libraries-grid">
          {filteredBooks.map((book) => renderBookCard(book))}
        </div>
      </div>

      {filteredBooks.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <span style={{ fontSize: '2rem' }}>📚</span>
          </div>
          <h3 className="empty-state-title">No se encontraron libros</h3>
          <p className="empty-state-description">
            Intenta ajustar tus criterios de búsqueda
          </p>
        </div>
      )}
    </div>
  );
};

export default BooksPage; 