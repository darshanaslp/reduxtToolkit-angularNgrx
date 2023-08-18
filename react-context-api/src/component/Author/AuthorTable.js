import React, { useState,useContext } from 'react';
import { AuthorContext } from '../../context/AuthorContext';
import { useNavigate,Link } from 'react-router-dom';


import { toast } from 'react-toastify';

const AuthorTable = () => {
  const { authors, removeAuthor } = useContext(AuthorContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  

  const handleDelete = async (id) => {
    try {
      await removeAuthor(id);
      toast.success('Author deleted successfully');
    } catch (error) {
      toast.error('Error deleting author');
    }
  };

  return (
<div>
      <h1>Author Table</h1>
      <Link to="/add-author" className="btn btn-success mb-3">Add Author</Link> {/* Add the Link */}
      <table className="table table-striped">
        <thead>
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
              <button onClick={() => navigate(`/author/${author._id}`)} className="btn btn-info">Details</button>
                <button onClick={() => navigate(`/add-author/${author._id}`)} className="btn btn-warning mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(author._id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorTable;