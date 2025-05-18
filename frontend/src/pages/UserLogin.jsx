import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [userData,setUserData]=useState({});

    const submitHandler=(e)=>{
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        })
        setEmail('');
        setPassword('');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col justify-between min-h-[600px]">
                <div>
                    <img
                        className="w-20 mx-auto my-8"
                        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
                        alt="Uber-logo"
                    />
                    <form onSubmit={(e)=>{submitHandler(e)}}>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">What's your email</h3>
                        <input
                            className="bg-gray-100 mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                            type="email"
                            required
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                            placeholder="email@example.com"
                        />
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Enter Password</h3>
                        <input
                            className="bg-gray-100 mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                            type="password"
                            required
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                            placeholder="password"
                        />
                        <button
                            className="bg-black text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition mb-3"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center text-gray-600">
                        New Here?{' '}
                        <Link to="/users/register" className="text-blue-600 hover:underline">
                            Create New Account
                        </Link>
                    </p>
                </div>
                <div>
                    <Link
                        to='/captains/login'
                        className="inline-block text-center bg-green-600 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-green-700 transition mt-8"
                        type="button"
                    >
                        LogIn as Captain
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
