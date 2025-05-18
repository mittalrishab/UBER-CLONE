import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setCaptainData({ email, password });
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
                        alt="Uber Captain-logo"
                    />
                    <form onSubmit={submitHandler}>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Captain Login</h2>
                        <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gray-800">
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
                        <label htmlFor="password" className="block text-lg font-semibold mb-2 text-gray-800">
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
                        New Captain?{' '}
                        <Link to="/captains/register" className="text-blue-600 hover:underline">
                            Create Captain Account
                        </Link>
                    </p>
                </div>
                <div>
                    <Link
                        to='/users/login'
                        className="inline-block text-center bg-gray-200 text-black font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-300 transition mt-8"
                        type="button"
                    >
                        Sign in as User
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CaptainLogin
