import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    vehicleColor: '',
    vehiclePlate: '',
    vehicleCapacity: 1,
    vehicleType: 'car'
};

const CaptainSignup = () => {
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (formData.firstName && formData.firstName.length < 3) newErrors.firstName = "First name must be at least 3 characters";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (formData.lastName && formData.lastName.length < 3) newErrors.lastName = "Last name must be at least 3 characters";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Looks like this is not an email";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password && formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        if (!formData.vehicleColor.trim()) newErrors.vehicleColor = "Vehicle color is required";
        if (formData.vehicleColor && formData.vehicleColor.length < 3) newErrors.vehicleColor = "Color must be at least 3 characters";
        if (!formData.vehiclePlate.trim()) newErrors.vehiclePlate = "License plate is required";
        if (formData.vehiclePlate && formData.vehiclePlate.length < 3) newErrors.vehiclePlate = "Plate must be at least 3 characters";
        if (!formData.vehicleCapacity || formData.vehicleCapacity < 1) newErrors.vehicleCapacity = "Capacity must be at least 1";
        if (!formData.vehicleType) newErrors.vehicleType = "Vehicle type is required";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "vehicleCapacity" ? Number(value) : value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                setFormData(initialForm);
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col justify-between min-h-[650px]">
                <div>
                    <img
                        className="w-20 mx-auto my-8"
                        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
                        alt="Uber Captain-logo"
                    />
                    <form onSubmit={submitHandler} noValidate>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Become a Captain</h2>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label htmlFor="firstName" className="text-lg font-semibold mb-2 text-gray-800 block">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                />
                                {errors.firstName && <span className="text-red-600 text-sm">{errors.firstName}</span>}
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="lastName" className="text-lg font-semibold mb-2 text-gray-800 block">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                />
                                {errors.lastName && <span className="text-red-600 text-sm">{errors.lastName}</span>}
                            </div>
                        </div>

                        <label htmlFor="email" className="text-lg font-semibold mb-2 text-gray-800 block mt-2">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                        />
                        {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}

                        <label htmlFor="password" className="text-lg font-semibold mb-2 text-gray-800 block mt-2">Password</label>
                        <input
                            id="password"
                            name="password"
                            className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                        />
                        {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}

                        <label htmlFor="confirmPassword" className="text-lg font-semibold mb-2 text-gray-800 block mt-2">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                        />
                        {errors.confirmPassword && <span className="text-red-600 text-sm">{errors.confirmPassword}</span>}

                        <div className="border-t pt-6 mt-6">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Vehicle Details</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="vehicleType" className="text-lg font-semibold mb-2 text-gray-800 block">Vehicle Type</label>
                                    <select
                                        id="vehicleType"
                                        name="vehicleType"
                                        className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.vehicleType ? 'border-red-500' : 'border-gray-300'}`}
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                    >
                                        <option value="car">Car</option>
                                        <option value="motorcycle">Motorcycle</option>
                                        <option value="auto">Auto</option>
                                    </select>
                                    {errors.vehicleType && <span className="text-red-600 text-sm">{errors.vehicleType}</span>}
                                </div>
                                <div>
                                    <label htmlFor="vehicleCapacity" className="text-lg font-semibold mb-2 text-gray-800 block">Seat Capacity</label>
                                    <input
                                        id="vehicleCapacity"
                                        name="vehicleCapacity"
                                        className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.vehicleCapacity ? 'border-red-500' : 'border-gray-300'}`}
                                        type="number"
                                        min="1"
                                        value={formData.vehicleCapacity}
                                        onChange={handleChange}
                                    />
                                    {errors.vehicleCapacity && <span className="text-red-600 text-sm">{errors.vehicleCapacity}</span>}
                                </div>
                            </div>
                            <label htmlFor="vehicleColor" className="text-lg font-semibold mb-2 text-gray-800 block mt-2">Vehicle Color</label>
                            <input
                                id="vehicleColor"
                                name="vehicleColor"
                                className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.vehicleColor ? 'border-red-500' : 'border-gray-300'}`}
                                type="text"
                                value={formData.vehicleColor}
                                onChange={handleChange}
                                placeholder="e.g., Red"
                            />
                            {errors.vehicleColor && <span className="text-red-600 text-sm">{errors.vehicleColor}</span>}

                            <label htmlFor="vehiclePlate" className="text-lg font-semibold mb-2 text-gray-800 block mt-2">License Plate</label>
                            <input
                                id="vehiclePlate"
                                name="vehiclePlate"
                                className={`bg-gray-100 mb-1 rounded-lg px-4 py-2 border w-full text-base focus:outline-none focus:ring-2 focus:ring-black transition ${errors.vehiclePlate ? 'border-red-500' : 'border-gray-300'}`}
                                type="text"
                                value={formData.vehiclePlate}
                                onChange={handleChange}
                                placeholder="e.g., MH01AB1234"
                            />
                            {errors.vehiclePlate && <span className="text-red-600 text-sm">{errors.vehiclePlate}</span>}
                        </div>

                        {success && (
                            <div className="text-green-600 text-center mt-4 mb-2">Registration successful!</div>
                        )}

                        <button
                            className={`bg-green-600 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-green-700 transition mb-3 mt-4 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Registering...' : 'Register as Captain'}
                        </button>
                    </form>
                    <p className="text-center text-gray-600">
                        Already a captain?{' '}
                        <Link to="/captains/login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
                <div>
                    <Link
                        to='/users/register'
                        className="inline-block text-center bg-gray-200 text-black font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-300 transition mt-8"
                        type="button"
                    >
                        Become a User Instead
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CaptainSignup
