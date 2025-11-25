import React from 'react'

function SharedHeading({title,description}) {
  return (
    <div className='container mx-auto flex flex-col items-center text-center bg-blue-50 py-8 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold font-serif mb-4'>
        {title}
      </h1>
      <p className='text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl'>
        {description}
      </p>
    </div>
  )
}

export default SharedHeading
