import * as api from '../../services/api';

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await api.getBooks();
    dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching authors:', error);
   
  }
};


export const addBook = (bookData) => async (dispatch) => {
  try {
    const response = await api.createBook(bookData);
    dispatch({ type: 'ADD_BOOK', payload: response.data });
    return response.data; // Return the added book data 
  } catch (error) {
    console.error('Error adding book:', error);
    throw error; 
  }
};

export const updateBook = (id, bookData) => async (dispatch) => {
  try {
    const response = await api.updateBook(id, bookData);
    dispatch({ type: 'UPDATE_BOOK', payload: response.data });
    return response.data; // Return the updated book 
  } catch (error) {
    console.error('Error updating book:', error);
    throw error; // Rethrow the error 
  }
};


export const deleteBook = (id) => async (dispatch) => {
  try {
    await api.deleteBook(id);
    dispatch({ type: 'DELETE_BOOK', payload: id });
  } catch (error) {
    console.error('Error deleting author:', error);
   
  }
};