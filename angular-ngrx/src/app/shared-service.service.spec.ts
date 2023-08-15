import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SharedServiceService } from './shared-service.service';

describe('SharedServiceService', () => {
  let service: SharedServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SharedServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all books', () => {
    const dummyBooks = [
      // Add sample book data here
    ];

    service.getBooks().subscribe((books) => {
      expect(books).toEqual(dummyBooks);
    });

    const req = httpTestingController.expectOne('http://localhost:5000/api/books');
    expect(req.request.method).toEqual('GET');
    req.flush(dummyBooks);
  });

  // Add similar test cases for other methods (getBookById, createBook, updateBook, deleteBook, getAuthors, etc.)
  // Make sure to mock the API responses and test the behavior accordingly.

  afterEach(() => {
    httpTestingController.verify();
  });
});