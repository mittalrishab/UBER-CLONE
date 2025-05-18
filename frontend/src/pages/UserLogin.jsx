import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        // Simple validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setError('');
        setLoading(true);

        // Simulate login API call
        setTimeout(() => {
            setUserData({ email, password });
            setEmail('');
            setPassword('');
            setLoading(false);
            // Redirect or further logic here
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col justify-between min-h-[600px]">
                <div>
                    <img
                        className="w-20 mx-auto my-8"
                        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
                        alt="Uber logo"
                    />
                    <form onSubmit={submitHandler}>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">User Login</h2>
                        <label className="block text-lg font-semibold mb-2 text-gray-800" htmlFor="email">
                            What's your email
                        </label>
                        <input
                            id="email"
                            className="bg-gray-100 mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@example.com"
                            autoComplete="username"
                        />
                        <label className="block text-lg font-semibold mb-2 text-gray-800" htmlFor="password">
                            Enter Password
                        </label>
                        <input
                            id="password"
                            className="bg-gray-100 mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            autoComplete="current-password"
                        />
                        {error && <div className="text-red-600 text-center mb-3">{error}</div>}
                        <button
                            className={`bg-black text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition mb-3 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <p className="text-center text-gray-600">
                        New here?{' '}
                        <Link to="/users/register" className="text-blue-600 hover:underline">
                            Create a new account
                        </Link>
                    </p>
                </div>
                <div>
                    <Link
                        to="/captains/login"
                        className="inline-block text-center bg-green-600 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-green-700 transition mt-8"
                        type="button"
                    >
                        Login as Captain
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
