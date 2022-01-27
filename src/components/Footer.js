import { SiReact, SiTailwindcss } from 'react-icons/si';
import ProfilePhoto from '../images/profile.jpg';

export default function Footer() {
  return (
    <div className='absolute bottom-0 right-0 flex flex-row items-center gap-4 px-4 py-2 text-sm bg-slate-50 font-inter rounded-tl-xl'>
      {/* <div className='w-10'> */}

      {/* </div> */}
      <div className='flex flex-col'>
        <div className='items-center justify-center inline gap-1 text-center'>
          Made by{' '}
          <a
            href='https://roddutra.com'
            target='_blank'
            rel='noreferrer'
            className='font-bold'
          >
            Rod Dutra
          </a>
        </div>
        <div className='inline-flex justify-center gap-1'>
          <span>with</span>
          <a
            className='self-center text-[#61dafb] text-xl'
            href='https://reactjs.org'
            target='_blank'
            rel='noreferrer'
          >
            <SiReact title='React.js' />
          </a>
          and
          <a
            className='self-center text-[#38bdf8] text-xl'
            href='https://tailwindcss.com'
            target='_blank'
            rel='noreferrer'
          >
            <SiTailwindcss title='Tailwind CSS' />
          </a>
        </div>
      </div>
      <img src={ProfilePhoto} alt='Rod Dutra' className='w-12 rounded-full' />
    </div>
  );
}
