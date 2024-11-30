import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white flex items-center justify-center h-full">
          <h1 className="text-5xl font-semibold">Welcome to the Ethiopian Payment Gateway</h1>
          <p className="mt-4 text-xl">Start integrating our payment system into your app today.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
