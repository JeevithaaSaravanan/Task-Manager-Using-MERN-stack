import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import MainLayout from '../layouts/MainLayout';

const Login = () => {
  const { state } = useLocation();
  const redirectUrl = state?.redirectUrl || null;

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <MainLayout>
        <div
          className="w-screen h-screen overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80")'
          }}
        >
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl w-[90%] max-w-md">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Login to Your Account</h2>
            <p className="text-center text-sm text-gray-500 mb-6">
              Welcome back! Let’s manage your tasks professionally 
            </p>
            <LoginForm redirectUrl={redirectUrl} />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Login;
