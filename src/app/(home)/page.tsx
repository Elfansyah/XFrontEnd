import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main>
      <div className=' sm:ml-10 grid sm:grid-cols-2 grid-cols-1 items-center h-svh '>
        <div className=''>
          <Image src="/twitter.svg" alt='logo twitter' width={500} height={500} className='text-white items-center lg:m-28 sm:m-10' />
        </div>
        <div className=' gap-5 p-5 mb-20 ml-10'>
          <h1 className='text-[60px] my-[48px] font-black'>Happening Now</h1>
          <div className='mb-[32px]  text-[28px] font-extrabold'>Join Today.</div>
          <div>
            <button className='bg-white px-10 py-2 rounded-[20px] text-slate-900 w-[300px] mt-2'>Sign in with Google</button>
          </div>
          <div>

            <button className='bg-white px-10 py-2 rounded-[20px] text-slate-900 w-[300px] my-2'>Sign in with apple</button>
          </div>
          <span className='w-[140px] h-[10px] bg-white-500'></span><p>or</p><span className='w-[140px] h-[1px] bg-gray-500'></span>
          <div className='bg-blue-300 px-10 py-2 rounded-[20px]  w-[300px] my-2 text-center'>Create Account</div>
          <p className='text-[10px] w-[300px]'>By Signingup, you agree to the <Link href="https://maps.app.goo.gl/jdGAUXarTbqZYtYZ6" className='text-blue-900'>Term of Service </Link>and, <Link href="https://maps.app.goo.gl/jdGAUXarTbqZYtYZ6" className='text-blue-900'>Privacy Policy</Link>, including <Link href="https://maps.app.goo.gl/jdGAUXarTbqZYtYZ6" className='text-blue-900'>Cookie Use</Link>.</p>
          <p className='mt-[40px] mb-[10px] font-medium'>Already have an account?</p>
          <div>
            <button className='border-white border-[1px] px-10 py-2 rounded-[20px] text-blue-500 font-medium w-[300px] my-2 '>Sign in</button>
          </div>
        </div>
      </div>
      <div  >
        <div className='flex text-[12px] m-10 gap-x-5 gap-y-2 text-stone-400 flex-wrap justify-center'>
          <div>About</div>
          <div>Download X App</div>
          <div>Help Center</div>
          <div>Term of Service</div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
          <div>Accessibility</div>
          <div>Ads Info</div>
          <div>Blog</div>
          <div>Careers</div>
          <div>Brand Resources</div>
          <div>Advertising</div>
          <div>Marketing</div>
          <div>X for Business</div>
          <div>Developer</div>
          <div>Directory Settings</div>
        </div>
      </div>
      <div className='flex text-[12px] m-10  justify-center text-stone-400'>
        <div>© 2024 X Corp.</div>
      </div>
    </main>
  )
}

export default HomePage;

