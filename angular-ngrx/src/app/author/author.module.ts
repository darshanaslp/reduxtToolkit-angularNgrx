import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AddComponent } from './add/add.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authorReducer } from './ngrx/author.reducer';
import { AuthorEffects } from './ngrx/author.effects';


const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'add', component: AddComponent },
   { path: 'edit/:id', component: AddComponent },
];

@NgModule({
  declarations: [AddComponent, TableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('authors', authorReducer),
    EffectsModule.forFeature([AuthorEffects]),
    
  ]
})
export class AuthorModule { }
