import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.')
            return
        }
        setError('')
        // TODO: Send formData to your backend API here
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
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
                    <form onSubmit={submitHandler}>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Create User Account</h2>
                        
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">First Name</h3>
                                <input
                                    className="bg-gray-100 mb-4 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                    placeholder="John"
                                />
                            </div>
                            <div className="w-1/2">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">Last Name</h3>
                                <input
                                    className="bg-gray-100 mb-4 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Email Address</h3>
                        <input
                            className="bg-gray-100 mb-4 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="email@example.com"
                        />

                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Password</h3>
                        <input
                            className="bg-gray-100 mb-4 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            placeholder="••••••••"
                        />

                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Confirm Password</h3>
                        <input
                            className="bg-gray-100 mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                            type="password"
                            required
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                            placeholder="••••••••"
                        />

                        {error && (
                            <div className="text-red-600 text-center mb-3">{error}</div>
                        )}

                        <button
                            className="bg-black text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition mb-3"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </form>
                    <p className="text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/users/login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
                <div>
                    <Link
                        to='/captains/register'
                        className="inline-block text-center bg-green-600 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-green-700 transition mt-8"
                        type="button"
                    >
                        Become a Captain
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserSignup
