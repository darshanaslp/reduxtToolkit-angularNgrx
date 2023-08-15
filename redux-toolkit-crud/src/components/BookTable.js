import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook } from '../redux/action/bookActions';
import { toast } from 'react-toastify';

const AuthorTable = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books); 

   useEffect(() => {
    dispatch(fetchBooks()); // Dispatch the fetchAuthors action to fetch authors
  }, [dispatch]);

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      dispatch(deleteBook(id));
      dispatch(fetchBooks()); // Dispatch the action to fetch authors again after delete
      toast.success('Book deleted successfully');
    } catch (error) {
      console.error('Error deleting Book:', error);
      toast.error('Error deleting Book');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Book Table</h2>
      <Link to="/books/add" className="btn btn-primary">
        Add Book
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
          <th>Name</th>
            <th>ISBN</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
               <td>{book.name}</td>
               <td>{book.isbn}</td>
               <td>{book.author.first_name} {book.author.last_name}</td>
              <td>
              <Link to={`/books/edit/${book._id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
               <button onClick={() => handleDeleteBook(book._id)} className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorTable;

