import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addAuthor } from '../redux/reducers/authorsSlice';


const AddAuthor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const initialValues = {
    first_name: '',
    last_name: '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
  });

 
  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Make the API call to add the author
      const newAuthorData = {
        first_name: values.first_name,
        last_name: values.last_name,
      };
      await dispatch(addAuthor(newAuthorData));

      // Show success message
      resetForm(initialValues);
      navigate('/');
    } catch (error) {
      console.error('Error adding Author:', error);
      // Show error message
    }
  }


  return (
    <div className="card">
      <div className="card-header">Add New Author</div>
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
            <button type="submit" className="btn btn-primary mt-2">Add Author</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddAuthor;



// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { addAuthor, editAuthor, selectAuthors } from '../redux/reducers/authorsSlice'; // Adjust import paths

// const AuthorFormPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [initialValues, setInitialValues] = useState({
//     first_name: '',
//     last_name: '',
//   });

//   useEffect(() => {
//     if (id) {
//       // Fetch and set initial author data for editing
//       const authorToEdit = selectAuthors.find((author) => author._id === id);
//       if (authorToEdit) {
//         setInitialValues({
//           first_name: authorToEdit.first_name,
//           last_name: authorToEdit.last_name,
//         });
//       }
//     }
//   }, [id]);

//   const validationSchema = Yup.object({
//     first_name: Yup.string().required('First Name is required'),
//     last_name: Yup.string().required('Last Name is required'),
//   });

//   const handleSubmit = async (values) => {
//     try {
//       if (id) {
//         // Edit existing author
//         await dispatch(editAuthor({ id, data: values }));
//       } else {
//         // Add new author
//         await dispatch(addAuthor(values));
//       }

//       // Redirect to the author list page after successful operation
//       navigate('/');
//     } catch (error) {
//       console.error('Error:', error);
//       // Show error message
//     }
//   };

//   return (
//     <div className="card">
//       <div className="card-header">
//         {id ? 'Edit Author' : 'Add New Author'}
//       </div>
//       <div className="card-body">
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           <Form>
//             <div className="form-group">
//               <label htmlFor="first_name">First Name</label>
//               <Field type="text" name="first_name" className="form-control" />
//               <ErrorMessage name="first_name" component="div" className="text-danger" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="last_name">Last Name</label>
//               <Field type="text" name="last_name" className="form-control" />
//               <ErrorMessage name="last_name" component="div" className="text-danger" />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               {id ? 'Update Author' : 'Add Author'}
//             </button>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default AuthorFormPage;