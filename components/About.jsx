import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div id='about'>
      <div className='shadow-2xl mt-24'>
        <div className='container grid grid-cols-12 mx-auto'>
          <div className='bg-no-repeat bg-cover col-span-full lg:col-span-4 pl-10 pt-4'>
            <Image src='/working.png' height={250} width={250} />
          </div>
          <div className='flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10'>
            <h1 className='text-4xl text-gray-300 font-semibold'>About ME</h1>
            <p className='text-xl text-gray-400 flex-1 pt-2'>
              Hi, I am Bhupesh, a web developer based in India currently
              pursuing B.Tech in Computer Science Engineering. I love
              experimenting with stuff and reading about technologies in my free
              time. I also like working with modern web technologies such as
              React, Next JS and others. I'm currently comfortable with
              Javascript while expanding my knowledge in other areas as well.
              Sounds Nice? say {''}
              <a
                href='mailto:pradhanbhupesh0@gmail.com'
                target='_blank'
                className='hover:text-gray-200'
              >
                Hello !
              </a>
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className='container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8'>
          <h2 className='text-3xl text-gray-400 font-bold'>
            Familiar Technologies
          </h2>
          <div className='flex flex-wrap justify-center space-x-4 px-2 text-gray-500 lg:justify-between'>
            <span>
              <i className='ib la-react'></i>
              <div>React</div>
            </span>
            <span>
              <i className='ib ion-logo-nodejs'></i>
              <div>Node JS</div>
            </span>
            <span>
              <i className='ib cib-mongodb'></i>
              <div>MongoDB</div>
            </span>
            <span>
              <i className='ib cib-javascript'></i>
              <div>Javascript</div>
            </span>
            <span>
              <i className='ib cib-typescript'></i>
              <div>typescript</div>
            </span>
            <span>
              <i className='ib file-icons-nextjs'></i>
              <div>NextJS</div>
            </span>
            <span>
              <i className='ib fa-html5'></i>
              <div>HTML</div>
            </span>
            <span>
              <i className='ib ion-logo-css3'></i>
              <div>CSS</div>
            </span>
            <span>
              <i className='ib simple-icons-tailwindcss'></i>
              <div>Tailwind</div>
            </span>
            <span>
              <i className='ib fe-git'></i>
              <div>git</div>
            </span>
            <span>
              <i className='ib cib-python'></i>
              <div>Python</div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
