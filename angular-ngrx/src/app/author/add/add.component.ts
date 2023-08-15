// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SharedServiceService } from '../../shared-service.service';
// import { Router } from '@angular/router';

// import { Store } from '@ngrx/store';
// import * as AuthorActions from '../ngrx/author.actions'; 
// import * as fromAuthor from '../ngrx/author.reducer'; 



// @Component({
//   selector: 'app-add',
//   templateUrl: './add.component.html',
//   styleUrls: ['./add.component.css']
// })
// export class AddComponent implements OnInit {
//   authorForm!: FormGroup;
 

//   constructor(
//     private formBuilder: FormBuilder,
//     private sharedService: SharedServiceService,
//     private router: Router,
//     private store: Store<fromAuthor.AuthorState> 
//   ) { }

//   ngOnInit(): void {
//     this.authorForm = this.formBuilder.group({
//       first_name: ['', [Validators.required]],
//       last_name: ['', [Validators.required]],
//     });
//   }

//   //create new author
//   addAuthor(): void {
//     if (this.authorForm.valid) {
//       const authorData = this.authorForm.value;
//       this.store.dispatch(AuthorActions.createAuthor({ authorData }));

//        // Dispatch loadAuthors action to update the table
//        this.store.dispatch(AuthorActions.loadAuthors());

//       // Navigate to home page after success
//       this.router.navigate(['/']);
//     }
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as AuthorActions from '../ngrx/author.actions';
import * as fromAuthor from '../ngrx/author.reducer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  authorForm!: FormGroup;
  editMode: boolean = false;
  authorId: string | null = null;
  mode: 'add' | 'edit' = 'add';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromAuthor.AuthorState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.authorForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
    });

    // Check if there's an author ID in the route params (editing mode)
    this.route.params.subscribe(params => {
      const authorId = params.id; 

      if (params.id) {
        this.editMode = true;
        this.authorId = params.id;
        this.loadAuthorData(authorId);
        this.mode = 'edit';
      }
    });
  }

  loadAuthorData(authorId: string): void {
    if (authorId) { // Check if authorId is not null
      this.store.dispatch(AuthorActions.loadAuthor({ authorId }));
  
      // Use the selectAuthorById selector
      this.store.select(fromAuthor.selectAuthorById(authorId)).subscribe(author => {
        if (author) {
          this.authorForm.patchValue({
            first_name: author.first_name,
            last_name: author.last_name
          });
        }
      });
    }
  }

  // Create new author or update existing author
  saveAuthor(): void {
    if (this.authorForm.valid) {
      const authorData = this.authorForm.value;
      if (this.editMode && this.authorId) {
        // Dispatch update action using authorData and authorId
      } else {
        this.store.dispatch(AuthorActions.createAuthor({ authorData }));
      }
      this.router.navigate(['/']);
    }
  }
}

