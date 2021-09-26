import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id='header'>
        <section>
          <div>
            <div className='container flex flex-col px-10 py-20 pt-24 lg:pb-56 md:py-32 md:px-10 lg:px-32'>
              <h1 className='text-gray-200 text-xl py-4 font-bold leading-none sm:text-5xl'>
                Hello,
              </h1>
              <h2 className='text-gray-300 text-xl font-bold leading-none sm:text-5xl'>
                I am Bhupesh.
              </h2>
              <p className='text-gray-400 text-xl mt-2 mb-8 sm:mb-12 sm:text-3xl'>
                I build things for the web, mostly in React
              </p>
            </div>
          </div>
          <div className='w-5/6 mx-auto mb-12 -mt-20 rounded-xl shadow-md lg:-mt-40'>
            <About />
          </div>
        </section>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
