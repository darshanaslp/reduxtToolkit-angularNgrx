import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthorProvider } from './context/AuthorContext';

// Lazy-loaded components
const LazyAuthorTable = React.lazy(() => import('./component/Author/AuthorTable'));
const LazyAuthorDetails = React.lazy(() => import('./component/Author/AuthorDetails'));
const LazyAddAuthor = React.lazy(() => import('./component/Author/AddAuthor'));

function App() {
  return (
    <Router>
      <AuthorProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LazyAuthorTable />} />
            <Route path="/author/:id" element={<LazyAuthorDetails />} />
            <Route path="/add-author" element={<LazyAddAuthor />} />
            <Route path="/add-author/:id" element={<LazyAddAuthor />} />
          </Routes>
        </Suspense>
      </AuthorProvider>
    </Router>
  );
}

export default App;