import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthorState } from '../ngrx/author.reducer';
import { getAuthors, getAuthorsLoading, getAuthorsError } from '../ngrx/author.selectors';
import * as AuthorActions from '../ngrx/author.actions';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  authors$!: Observable<any[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  tableLoading!: boolean 

  constructor(private store: Store<AuthorState>) {}

  ngOnInit(): void {
    this.authors$ = this.store.select(getAuthors);
    this.loading$ = this.store.select(getAuthorsLoading);
    this.error$ = this.store.select(getAuthorsError);

    this.store.dispatch(AuthorActions.loadAuthors());
  }

  deleteAuthor(authorId: string): void {
    this.store.dispatch(AuthorActions.deleteAuthor({ authorId }));
    // Dispatch loadAuthors action to update the table
    this.store.dispatch(AuthorActions.loadAuthors());

  }
 

}
