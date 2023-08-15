import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as AuthorActions from './author.actions';

export interface AuthorState {
  authors: any[];
  loading: boolean;
  error: any;
}

export const initialState: AuthorState = {
  authors: [],
  loading: false,
  error: null,
};

export const selectAuthorState = createFeatureSelector<AuthorState>('authors');

export const getAuthors = createSelector(
  selectAuthorState,
  (state) => state.authors
);

export const getAuthorsLoading = createSelector(
  selectAuthorState,
  (state) => state.loading
);

export const getAuthorsError = createSelector(
  selectAuthorState,
  (state) => state.error
);

export const selectAuthorById = (authorId: string) => createSelector(
  selectAuthorState,
  (state) => state.authors.find(author => author._id === authorId)
);

export const authorReducer = createReducer(
  initialState,
  on(AuthorActions.loadAuthors, (state) => ({ ...state, loading: true })),
  on(AuthorActions.loadAuthorsSuccess, (state, { authors }) => ({ ...state, authors, loading: false, error: null })),
  on(AuthorActions.loadAuthorsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(AuthorActions.deleteAuthorSuccess, (state, { authorId }) => ({
    ...state,
    authors: state.authors.filter((author) => author._id !== authorId),
    loading: false,
    error: null,
  })),
  on(AuthorActions.deleteAuthorFailure, (state, { error }) => ({ ...state, loading: false, error }))
);