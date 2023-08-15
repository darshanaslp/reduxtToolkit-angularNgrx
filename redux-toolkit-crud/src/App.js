import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthorTable from './components/AuthorTable';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';


const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
        <Route path="/" element={<AuthorTable />} />
          <Route path="/authors" element={<AuthorTable />} />
          <Route path="/add-author" element={<AddAuthor />} />
          <Route path="/add-author/:id" element={<EditAuthor />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
