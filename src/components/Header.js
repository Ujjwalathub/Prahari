import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Prahari (प्रहरी)
        </h1>
        <p className="mt-2 text-lg md:text-xl text-center">
          Your Digital Information Sentinel
        </p>
        <p className="mt-2 text-sm text-center max-w-2xl">
          Combat misinformation by analyzing news articles and social media content for trustworthiness
        </p>
      </div>
    </header>
  );
};

export default Header;
