import { createAction, props } from '@ngrx/store';

export const loadAuthors = createAction('[Author] Load Authors');

export const loadAuthorsFailure = createAction(
  '[Author] Load Authors Failure',
  props<{ error: any }>()
);

export const loadAuthorsSuccess = createAction(
  '[Author] Load Authors Success',
  props<{ authors: any[] }>()
);

export const loadAuthor = createAction(
  '[Author] Load Author',
  props<{ authorId: string }>()
);

export const loadAuthorSuccess = createAction(
  '[Author] Load Author Success',
  props<{ author: any }>()
);

export const loadAuthorFailure = createAction(
  '[Author] Load Author Failure',
  props<{ error: any }>()
);

export const createAuthor = createAction(
  '[Author] Create Author',
  props<{ authorData: any }>() // Use the appropriate type for your author data
);

export const createAuthorSuccess = createAction(
  '[Author] Create Author Success',
  props<{ response: any }>() // Use the appropriate type for your response data
);

export const createAuthorFailure = createAction(
  '[Author] Create Author Failure',
  props<{ error: any }>()
);

export const deleteAuthor = createAction(
  '[Author] Delete Author',
  props<{ authorId: string }>()
);

export const deleteAuthorSuccess = createAction(
  '[Author] Delete Author Success',
  props<{ authorId: string }>()
);

export const deleteAuthorFailure = createAction(
  '[Author] Delete Author Failure',
  props<{ error: any }>()
);

