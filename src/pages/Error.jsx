import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
export default function Error() {
  return (
    <HelmetProvider>
          <Helmet>
            <title>Error</title>
            <meta name='description' content='Beginner friendly page for learning React Helmet.' />
          </Helmet>
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Home
      </Link>
    </div></HelmetProvider>

  )
}
