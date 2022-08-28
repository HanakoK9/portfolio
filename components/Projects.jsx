import React from 'react';
import Image from 'next/image';

function Projects() {
  return (
    <div id='projects' className='projects mt-20'>
      <div className='relative items-center justify-center'>
        <h1 className='text-center text-3xl font-bold p-4 text-gray-300'>
          My Recent Projects
        </h1>

        <div className='lg:m-4 shadow-lg rounded-lg bg-transparent my-12 mx-8 px-4 lg:flex'>
          <div className='mt-4 lg:w-4/6'>
            <Image
              src='/miniblog.png'
              alt='miniblog'
              height={400}
              width={600}
              objectFit='contain'
              className='overflow-hidden'
            />
          </div>
          <div className='p-4'>
            <h3 className='font-medium text-gray-100 text-lg my-2 uppercase'>
              MiniBlog
            </h3>

            <div className='flex'>
              <a href='https://github.com/bhupeshpr25/miniblog' target='_blank'>
                <button className='transform mouse-pointer bg-gray-600 text-sm text-white py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none'>
                  Code
                </button>
              </a>

              <a href='https://mern-miniblog.herokuapp.com/' target='_blank'>
                <button className='transform mouse-pointer bg-gray-600 text-sm text-white ml-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none'>
                  Live
                </button>
              </a>
            </div>

            <p className='text-justify mt-2 text-gray-200'>
              MiniBlog is a short blogging platform I made to test out my skills
              after getting familiar with the MERN full-stack. This includes
              features user signup/login and create/edit/delete posts
            </p>

            <div className='font-semibold text-l mt-4 text-gray-300'>
              Tech Stack:
            </div>
            <div className='mt-2'>
              <span className='transform transition-all duration-150 inline-block bg-blue-800 bg-opacity-75 rounded px-2 py-2 text-md font-thin text-gray-200  hover:shadow-sm  hover:scale-105'>
                React
              </span>
              <span className='transform transition-all duration-150 inline-block bg-green-800 bg-opacity-100 rounded px-2 py-2 ml-2  text-md font-thin text-gray-200  hover:shadow-sm  hover:scale-105'>
                NodeJS
              </span>
              <span className='transform transition-all duration-150 inline-block bg-gray-800  bg-opacity-75 rounded px-2 py-2 ml-2  text-md font-thin text-gray-200 hover:shadow-sm  hover:scale-105'>
                Express
              </span>
              <span className='transform transition-all duration-150 inline-block bg-purple-800  bg-opacity-75 rounded px-2 py-2 ml-2  text-md font-thin text-gray-200 hover:shadow-sm  hover:scale-105'>
                MongoDB
              </span>
              <span className='transform transition-all duration-150 inline-block bg-red-800  bg-opacity-75 rounded px-2 py-2 ml-2  text-md font-thin text-gray-200 hover:shadow-sm  hover:scale-105'>
                Context API
              </span>
              <span className='transform transition-all duration-150 inline-block bg-indigo-800  bg-opacity-75 rounded px-2 py-2 ml-2  text-md font-thin text-gray-200 hover:shadow-sm  hover:scale-105'>
                Chakra UI
              </span>
            </div>
          </div>
        </div>

        <div className='items-center container mx-auto my-auto'>
          <div className='lg:m-4 rounded-lg bg-transparent shadow-xl my-12 mx-8 px-4 lg:flex flex-row-reverse'>
            <div className='mt-4 lg:w-2/5'>
              <Image
                src='/palette.png'
                alt='palette'
                height={400}
                width={800}
                objectFit='contain'
                className='overflow-hidden'
              />
            </div>

            <div className='p-4 lg:mr-40'>
              <h3 className='font-medium text-gray-100 text-lg my-2 uppercase'>
                Palette
              </h3>

              <div className='flex'>
                <a href='https://github.com/bhupeshpr25/palette' target='_blank'>
                  <button className='transform mouse-pointer bg-gray-600 text-sm text-white py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
                    Code
                  </button>
                </a>

                <a href='https://bhupeshpr25.github.io/palette/' target='_blank'>
                  <button className='transform mouse-pointer bg-gray-600 text-sm text-white ml-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none'>
                    Live
                  </button>
                </a>
              </div>

              <p className='text-justify mt-2 text-gray-200'>
                HEX colour palette generator made using Vanilla Javascript
              </p>

              <div className='font-semibold text-l mt-4 text-gray-300'>
                Tech Stack:
              </div>
              <div className='mt-2'>
                <span className='transform transition-all duration-150 inline-block bg-yellow-800  bg-opacity-75 rounded px-2 py-2  text-md font-thin text-gray-200 hover:shadow-sm  hover:scale-105'>
                  Vanilla JS
                </span>
                <span className='transform transition-all duration-150 inline-block bg-blue-700 bg-opacity-75 rounded px-2 py-2 ml-2 text-md font-thin text-gray-200  hover:shadow-sm  hover:scale-105'>
                  CSS
                </span>
                <span className='transform transition-all duration-150 inline-block bg-red-700 bg-opacity-100 rounded px-2 py-2 ml-2 text-md font-thin text-gray-200  hover:shadow-sm  hover:scale-105'>
                  HTML
                </span>
              </div>
            </div>
          </div>

          <div className='lg:m-4 shadow-xl rounded-lg my-12 mx-8 px-4 lg:flex'>
            <div className='mt-4 lg:w-5/6'>
              <Image
                src='/anisearch.jpeg'
                alt='anisearch'
                height={400}
                width={800}
                objectFit='contain'
                className='overflow-hidden'
              />
            </div>
            <div className='p-4'>
              <h3 className='font-medium text-gray-100 text-lg my-2 uppercase'>
                Anisearch
              </h3>

              <div className='flex'>
                <a href='https://github.com/bhupeshpr25/anisearch' target='_blank'>
                  <button className='transform mouse-pointer bg-gray-600 text-sm text-white py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
                    Code
                  </button>
                </a>

                <a href='https://anisearch-bice.vercel.app/' target='_blank'>
                  <button className='transform mouse-pointer bg-gray-600 text-sm text-white ml-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none'>
                    Live
                  </button>
                </a>
              </div>

              <p className='text-justify mt-2 text-gray-200'>
                Anime Search Engine made with React, Next JS and Tailwind CSS. It uses Jikan
                API to fetch data using Fetch API from MyAnimeList to show top
                ranked anime and manga, along with an anime search engine and a
                custom 404 page.
              </p>

              <div className='font-semibold text-l mt-4 text-gray-300'>
                Tech Stack:
              </div>
              <div className='mt-2'>
                <span className='transform transition-all duration-150 inline-block bg-blue-800 bg-opacity-75 rounded px-2 py-2 text-md font-thin text-gray-200  hover:shadow-sm  hover:scale-105'>
                  React
                </span>
                <span className='transform transition-all duration-150 inline-block bg-gray-800 bg-opacity-100 rounded px-2 py-2 ml-2 text-md font-thin text-gray-200  hover:shadow-sm  hover:scale-105'>
                  Next JS
                </span>
                <span className='transform transition-all duration-150 inline-block bg-pink-800  bg-opacity-75 rounded px-2 py-2 ml-2 text-md font-thin text-gray-200 hover:shadow-sm  hover:scale-105'>
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
