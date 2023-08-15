import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from '../../shared-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  authorForm: FormGroup;
  authorId: string;
  

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.authorForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
    });

    // Get the author ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.authorId = params.get('id');
      if (this.authorId) {
        this.getAuthorDetails();
      }
    });
  }

  getAuthorDetails(): void {
    // Fetch the author details using the authorId and populate the form
    this.sharedService.getAuthorById(this.authorId).subscribe(
      (response) => {
        this.authorForm.patchValue({
          first_name: response.first_name,
          last_name: response.last_name
        });
      },
      (error) => {
        console.error('Error fetching author details:', error);
      }
    );
  }


//edit author details
  editAuthor(): void {
    if (this.authorForm.valid) {
      this.sharedService.updateAuthor(this.authorId, this.authorForm.value).subscribe(
        (response) => {
          // Handle success (e.g., show success message, navigate to author list page)
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Author Update Successfully',
            confirmButtonText: 'OK'
          }).then(() => {
            // After user clicks OK, navigate to the author list page
            this.router.navigate(['/']);
          });
        },
        (error) => {
          // Handle error (e.g., show error message)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error adding author',
            confirmButtonText: 'OK'
          });
          console.error('Error updating author:', error);
        }
      );
    }
  }

 
}
