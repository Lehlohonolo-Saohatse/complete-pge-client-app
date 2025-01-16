import React from 'react'

const LoadingSpinner = () => {
  return (
    <div>
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#82e7d6] via-transparent to-[#82e7d6] animate-gradient-blur opacity-50"></div>
  
  {/* Text */}
  <h1 className="relative text-3xl md:text-5xl font-extrabold text-center tracking-wide text-gray-50 z-10">
    {Array.from("Putsoa Global Enterprise").map((char, index) => (
      <span
        key={index}
        className="animate-fade text-[#82e7d6]"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </h1>
</div>

    </div>
  )
}

export default LoadingSpinner