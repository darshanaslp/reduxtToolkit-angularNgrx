import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorState } from './author.reducer';

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