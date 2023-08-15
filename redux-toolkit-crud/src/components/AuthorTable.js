import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors, removeAuthor } from '../redux/reducers/authorsSlice';
import { Link } from 'react-router-dom';


const AuthorTable = () => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);

  useEffect(() => {
    dispatch(fetchAuthors()); // Dispatch an action to fetch authors when the component mounts
  }, [dispatch]);

  const handleDelete = (id) => {
    if (id ?? false) {
      dispatch(removeAuthor(id))
        .then(() => {
          dispatch(fetchAuthors());
          console.log('User delete sucessfully');
        })
        .catch((error) => {
          console.error('Error deleting author:', error);
        });
    } else {
      console.error('Invalid author ID:', id);
    }
  };

  return (
    <div>
      <Link to="/add-author" className="btn btn-primary mb-3">
        Add New Author
      </Link>
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>{author.first_name}</td>
              <td>{author.last_name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(author._id)}
                >
                  Delete
                </button>
                <Link to={`/add-author/${author._id}`} className="btn btn-primary">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorTable;