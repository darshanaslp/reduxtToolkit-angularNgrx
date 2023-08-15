import * as api from '../../services/api';

export const fetchAuthors = () => async (dispatch) => {
  try {
    const response = await api.getAuthors();
    dispatch({ type: 'FETCH_AUTHORS_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching books:', error);
    dispatch({ type: 'FETCH_AUTHOR_FAILURE', error:error.message });
  }
};


export const addAuthor = (authorData) => async (dispatch) => {
  try {
    const response = await api.createAuthor(authorData);
    dispatch({ type: 'ADD_AUTHOR', payload: response.data });
    return response.data; // Return the added book data for further use if needed
  } catch (error) {
    console.error('Error adding Author:', error);
    throw error; //  Rethrow the error to handle it in the component
  }
};


export const deleteAuthor = (id) => async (dispatch) => {
  try {
    await api.deleteAuthor(id);
    dispatch({ type: 'DELETE_AUTHOR', payload: id });
  } catch (error) {
    console.error('Error deleting author:', error);
    dispatch({ type: 'DELETE_AUTHOR_FAILURE', error: 'Error deleting author' });
  }
};