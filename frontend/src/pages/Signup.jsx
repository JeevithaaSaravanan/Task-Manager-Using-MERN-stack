import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import MainLayout from '../layouts/MainLayout';

const Signup = () => {
  useEffect(() => {
    document.title = "Signup";
  }, []);

  return (
    <>
      <MainLayout>
        <div
          className="w-screen h-screen overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1470&q=80")'
          }}
        >
          <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-[90%] max-w-md">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Create Your Account</h2>
            <p className="text-center text-sm text-gray-500 mb-6">
              Stay organized. Manage your tasks efficiently 
            </p>
            <SignupForm />
            <p className="text-center mt-4 text-sm text-blue-600 hover:underline">
              <a href="/reset-password">Forgot Password?</a>
            </p>

          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Signup;
