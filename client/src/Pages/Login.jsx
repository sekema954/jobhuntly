// src/RegisterForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  // Define the initial form values
  const initialValues = {
    email: '',
    password: '',
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form data submitted:', values);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              <div>
                <Field
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
              </div>

              <div>
                <Field
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
              </div>


              <div className="flex justify-center">
                <button
                  className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
