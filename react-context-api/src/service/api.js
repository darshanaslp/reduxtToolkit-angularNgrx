import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getAuthors = () => {
  return axios.get(`${API_BASE_URL}/authors`);
};

export const getAuthorById = (id) => {
  return axios.get(`${API_BASE_URL}/author/${id}`);
};

export const createAuthor = (data) => {
  return axios.post(`${API_BASE_URL}/author`, data);
};

export const updateAuthor = (id, data) => {
  return axios.put(`${API_BASE_URL}/author/${id}`, data);
};

export const deleteAuthor = (id) => {
  return axios.delete(`${API_BASE_URL}/author/${id}`);
};

export const getBooks = () => {
  return axios.get(`${API_BASE_URL}/books`);
};

export const getBookById = (id) => {
  return axios.get(`${API_BASE_URL}/book/${id}`);
};

export const createBook = (data) => {
  return axios.post(`${API_BASE_URL}/book`, data);
};

export const updateBook = (id, data) => {
  return axios.put(`${API_BASE_URL}/book/${id}`, data);
};

export const deleteBook = (id) => {
  return axios.delete(`${API_BASE_URL}/book/${id}`);
};