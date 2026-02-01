import styled from 'styled-components';
import { Link } from 'react-router';
const Hero = () => {
  if (sessionStorage.getItem("username")) {
    window.location.href = '/profile';
  }
  return (
    <>
      <section className="relative w-full h-screen bg-white dark:bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-purple-900/20 p-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              GitHub profile fetching...
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Get Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                GitHub
              </span>
              <br />
              Profile Details
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              A simple authentication and profile fetching system using react and Firebase.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/register" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Register
              </Link>
              <Link to="/login" className="px-8 py-4 border-2 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-zinc-600 font-semibold rounded-lg transition-colors duration-200">
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </section>
    </>
  )
}

export default Hero;