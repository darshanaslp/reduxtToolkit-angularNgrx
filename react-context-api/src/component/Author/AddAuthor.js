import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthorContext } from '../../context/AuthorContext';
import { useNavigate,useParams  } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddAuthor = () => {
  const { authors,addAuthor,editAuthor } = useContext(AuthorContext);
  const navigate = useNavigate();
  const { id } = useParams();

 // Find the author to be edited based on the id parameter
 const authorToEdit = id ? authors.find(author => author._id === id) : null;


const initialValues = {
  first_name: authorToEdit ? authorToEdit.first_name : '',
  last_name: authorToEdit ? authorToEdit.last_name : '',
};

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (authorToEdit) {
        await editAuthor(id, values);
        toast.success('Author Edited successfully');
        navigate("/");
      } else {
        await addAuthor(values);
        toast.success('Author added successfully');
        navigate("/");
      }
      resetForm();
    } catch (error) {
      toast.error('Error adding author');
      console.error('Error adding author:', error);
    }
  };


  return (
    <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h2 className="text-center">{authorToEdit ? 'Edit Author' : 'Add Author'}</h2>
          </div>
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <Field type="text" id="first_name" name="first_name" className="form-control" />
                    <ErrorMessage name="first_name" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <Field type="text" id="last_name" name="last_name" className="form-control" />
                    <ErrorMessage name="last_name" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddAuthor;