import React from 'react';
import Link from 'next/link';

function Contact() {
  return (
    <div id='contact' className='flex justify-center'>
      <div className='flex justify-center max-w-xs p-6 rounded-xl sm:px-12'>
        <div className='space-y-4 text-center'>
          <div className='my-2 space-y-1'>
            <h2 className='text-xl text-gray-400 font-semibold sm:text-2xl md:text-4xl'>
              Contact ME
            </h2>
          </div>
          <div className='flex justify-center pt-2 space-x-4 align-center'>
            <span className='pl-4'>
              <a href='https://github.com/bhupeshpr25' target='_blank'>
                <i className='ib la-github'></i>
              </a>
            </span>
            <span className='pl-4'>
              <a
                href='https://twitter.com/bhupeshpr25?t=M55rqT55xCDdPDEbF6YUOQ&s=09s'
                target='_blank'
              >
                <i className='ib uil-twitter'></i>
              </a>
            </span>
            <span className='pl-4'>
              <a
                href='https://www.linkedin.com/in/bhupesh-pradhan-070311202/'
                target='_blank'
              >
                <i className='ib mdi-linkedin'></i>
              </a>
            </span>
            <span className='pl-4'>
              <a href='mailto:pradhanbhupesh0@gmail.com' target='_blank'>
                <i className='ib mdi-gmail'></i>
              </a>
            </span>
          </div>

          <h3 className='text-gray-500'>
            <Link href='#header'>go to top</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
