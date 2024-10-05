import React from 'react';

const Sobre = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex bg-black text-white rounded-lg shadow-lg overflow-hidden">
        
       
        <div className="w-1/3 bg-pink-500 p-4 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Profile"
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="w-2/3 p-8">
          <h1 className="text-4xl font-bold mb-4">Biography</h1>
          <p className="mb-4">
            I am working on a professional, visually sophisticated and technologically
            proficient, responsive and multi-functional creative personal resume portfolio
            template Aali.
          </p>
          
          <div className="mb-8">
            <ul className="mb-4">
              <li>Birthday: 4th April 1991</li>
              <li>Age: 22 Yr</li>
              <li>Residence: Canada</li>
              <li>Address: California, USA</li>
              <li>Email: info@domain.com</li>
              <li>Phone: 820-885-3321</li>
              <li>Skype: skype.0404</li>
              <li>Freelance: Available</li>
            </ul>
          </div>
          
          <div className="flex mb-8 space-x-6">
            <div className="text-center">
              <span className="block text-3xl font-bold">6+</span>
              <span>Years Of Experience</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold">10K</span>
              <span>Completed Projects</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold">8K</span>
              <span>Happy Customers</span>
            </div>
          </div>
          
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sobre;