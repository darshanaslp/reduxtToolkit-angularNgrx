import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthors, deleteAuthor as deleteAuthorApi, createAuthor as createAuthorApi, updateAuthor as updateAuthorApi } from '../../services/api'; // Adjust import paths

export const fetchAuthors = createAsyncThunk('authors/fetchAuthors', async () => {
  const response = await getAuthors();
  return response.data;
});

export const addAuthor = createAsyncThunk(
  'authors/addAuthor',
  async (authorData) => {
    const response = await createAuthorApi(authorData);
    return response.data;
  }
);

export const editAuthor = createAsyncThunk('authors/editAuthor', async ({ id, data }) => {
  console.log(id)
  console.log(data)
  const response = await updateAuthorApi(id, data);
  return response.data;
});


export const removeAuthor = createAsyncThunk(
  'authors/removeAuthor',
  async (id) => {
    await deleteAuthorApi(id);
    return id;
  }
);

const authorsSlice = createSlice({
  name: 'authors',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addAuthor.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(editAuthor.fulfilled, (state, action) => {
        const index = state.findIndex((author) => author._id === action.payload._id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(removeAuthor.fulfilled, (state, action) => {
        return state.filter((author) => author.id !== action.payload);
      });
  },
});

export const selectAuthors = (state) => state.authors;

export default authorsSlice.reducer;