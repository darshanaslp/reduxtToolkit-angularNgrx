import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editAuthor, selectAuthors } from '../redux/reducers/authorsSlice'; // Adjust import paths

const EditAuthor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const authors = useSelector(selectAuthors);
  const author = authors.find((author) => author._id === id);

  const initialValues = {
    first_name: author ? author.first_name : '',
    last_name: author ? author.last_name : '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
  });

  const handleSubmit = async (values) => {
    try {
      // Make the API call to update the author
      await dispatch(editAuthor({ id: id, data: values }));

      // Redirect to the author list page after successful update
      navigate('/');
    } catch (error) {
      console.error('Error updating author:', error);
      // Show error message
    }
  };

  return (
    <div className="card">
      <div className="card-header">Edit Author</div>
      <div className="card-body">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <Field type="text" name="first_name" className="form-control" />
              <ErrorMessage name="first_name" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <Field type="text" name="last_name" className="form-control" />
              <ErrorMessage name="last_name" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary">Update Author</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditAuthor;