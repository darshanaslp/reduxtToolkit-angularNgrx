import React, { createContext, useState, useEffect } from 'react';
import { getAuthors, deleteAuthor,createAuthor,updateAuthor } from '../service/api';

export const AuthorContext = createContext();

export const AuthorProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await getAuthors();
      setAuthors(response.data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const addAuthor = async (authorData) => {
    try {
      const response = await createAuthor(authorData);
      setAuthors([...authors, response.data]);
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

  const editAuthor = async (id, data) => {
    try {
      await updateAuthor(id, data);
      fetchAuthors(); // Refresh the list of authors after editing
    } catch (error) {
      console.error('Error editing author:', error);
    }
  };

  const removeAuthor = async (id) => {
    try {
      await deleteAuthor(id);
      fetchAuthors(); // Refresh the list of authors after deletion
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <AuthorContext.Provider value={{ authors, removeAuthor, addAuthor , editAuthor}}>
      {children}
    </AuthorContext.Provider>
  );
};