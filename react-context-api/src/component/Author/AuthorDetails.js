import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthorContext } from '../../context/AuthorContext';

const AuthorDetails = () => {
  const { id } = useParams();
  const { authors } = useContext(AuthorContext);

  const author = authors.find((author) => author._id === id);

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div>
      <h1>Author Details</h1>
      <p>ID: {author.first_name}</p>
      <p>Name: {author.last_name}</p>
      <Link to="/" className="btn btn-primary">
        Back to List
      </Link>
    </div>
  );
};

export default AuthorDetails;