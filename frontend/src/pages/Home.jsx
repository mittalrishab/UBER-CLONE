import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center h-screen w-full relative flex flex-col'
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')"
        }}
      >
        <img
          className='w-16 ml-8 mt-8'
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="Uber-logo"
        />
        <div className='bg-white pb-7 py-5 px-8 rounded-t-2xl shadow-lg max-w-sm w-full absolute bottom-0 left-1/2 transform -translate-x-1/2'>
          <h2 className='text-3xl font-bold mb-4'>Get Started with Uber</h2>
          <Link
            to="/users/login"
            className='inline-block w-full bg-black text-white py-3 rounded mt-5 text-center font-semibold hover:bg-gray-900 transition'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
