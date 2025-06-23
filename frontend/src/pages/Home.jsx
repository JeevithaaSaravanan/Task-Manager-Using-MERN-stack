import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div
            className='h-[90vh] flex flex-col items-center justify-center text-white text-center px-4 bg-cover bg-center'
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1350&q=80")`,
            }}
          >
            <div className='bg-black bg-opacity-50 p-8 rounded-xl'>
              <h1 className='text-4xl font-bold mb-4 drop-shadow'>Welcome to Task Manager App</h1>
              <p className='text-lg mb-6'>Manage your tasks smartly and efficiently.</p>
              <Link
                to="/signup"
                className='inline-block px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition duration-300'
              >
                Join Now <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <h1 className='text-xl font-semibold mt-8 mx-8 border-b border-b-gray-300 pb-2'>
              Welcome {authState.user.name}
            </h1>
            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home;
