import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  
  private apiUrl = 'http://localhost:5000/api'; 

  constructor(private http: HttpClient) { }


  // Get all books
  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books`);
  }

  // Get a book by ID
  getBookById(bookId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/book/${bookId}`);
  }

  // Create a new book
  createBook(bookData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, bookData);
  }

  // Update an existing book
  updateBook(bookId: string, bookData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/book/${bookId}`, bookData);
  }

  // Delete a book by ID
  deleteBook(bookId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/book/${bookId}`);
  }

  // Get all authors
  getAuthors(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/authors`);
  }

  // Get an author by ID
  getAuthorById(authorId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/author/${authorId}`);
  }

  // Create a new author
  createAuthor(authorData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/author`, authorData);
  }

  // Update an existing author
  updateAuthor(authorId: string, authorData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/author/${authorId}`, authorData);
  }

  // Delete an author by ID
  deleteAuthor(authorId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/author/${authorId}`);
  }

}
