import React from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from '../components/NavBar'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div className="min-h-screen bg-lime-100">
      
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg overflow-hidden relative 
          transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-100 rounded-full opacity-70"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-100 rounded-full opacity-70"></div>
          
          {/* Logo/Icon placeholder */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-center text-gray-600 mb-8">Login to continue donating and making a difference.</p>
          
          <form className="space-y-5">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-between">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs text-green-600 hover:text-green-700 font-medium">Forgot Password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition duration-200"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300 flex items-center justify-center"
            >
              <span>Login</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
          </form>
          
          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account? <Link to="/signup" className="text-green-600 hover:text-green-700 hover:underline font-medium transition">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
