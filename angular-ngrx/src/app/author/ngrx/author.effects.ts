import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as AuthorActions from './author.actions';
import { SharedServiceService } from '../../shared-service.service';

@Injectable()
export class AuthorEffects {
  loadAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorActions.loadAuthors),
      tap(() => console.log('loadAuthors action dispatched')),
      switchMap(() =>
        this.sharedService.getAuthors().pipe(
          tap(authors => console.log('Received authors:', authors)),
          map(authors => AuthorActions.loadAuthorsSuccess({ authors })),
          catchError(error => {
            console.error('Error loading authors:', error);
            return of(AuthorActions.loadAuthorsFailure({ error }));
          })
        )
      )
    )
  );

  createAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorActions.createAuthor),
      mergeMap(action =>
        this.sharedService.createAuthor(action.authorData).pipe(
          map(response => AuthorActions.createAuthorSuccess({ response })),
          catchError(error => of(AuthorActions.createAuthorFailure({ error })))
        )
      )
    )
  );

  loadAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorActions.loadAuthor),
      switchMap(action =>
        this.sharedService.getAuthorById(action.authorId).pipe(
          map(author => AuthorActions.loadAuthorSuccess({ author })),
          catchError(error => of(AuthorActions.loadAuthorFailure({ error })))
        )
      )
    )
  );

  deleteAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorActions.deleteAuthor),
      switchMap((action) =>
        this.sharedService.deleteAuthor(action.authorId).pipe(
          map(() => AuthorActions.deleteAuthorSuccess({ authorId: action.authorId })),
          catchError((error) => of(AuthorActions.deleteAuthorFailure({ error })))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private sharedService: SharedServiceService
  ) { }
}