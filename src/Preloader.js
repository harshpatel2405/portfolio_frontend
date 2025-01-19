import React from "react";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800">
      <div className="flex flex-col items-center gap-6">
        {/* Puzzle Animation */}
        <div className="relative w-32 h-32">
          {/* Spinning Circle */}
          <div className="absolute inset-0 animate-spin-slow rounded-full border-8 border-t-purple-200 border-purple-400"></div>

          {/* Centered Puzzle Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-purple-200 animate-bounce-center"
            >
              <path d="M19 13.5c1.1 0 2-.9 2-2s-.9-2-2-2h-.59c-.26 0-.52-.11-.71-.29l-1.41-1.41c-.18-.18-.29-.44-.29-.71V6c0-1.1-.9-2-2-2s-2 .9-2 2v.59c0 .26-.11.52-.29.71L11 8.71c-.18.18-.44.29-.71.29H9.5c-1.1 0-2 .9-2 2s.9 2 2 2h.59c.26 0 .52.11.71.29l1.41 1.41c.18.18.29.44.29.71V15c0 1.1.9 2 2 2s2-.9 2-2v-.59c0-.26.11-.52.29-.71L17 12.71c.18-.18.44-.29.71-.29H19zM5 16H4c-1.1 0-2 .9-2 2s.9 2 2 2h1v1c0 1.1.9 2 2 2s2-.9 2-2v-1h1c1.1 0 2-.9 2-2s-.9-2-2-2H9v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1z"></path>
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-xl text-purple-100 font-semibold animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
