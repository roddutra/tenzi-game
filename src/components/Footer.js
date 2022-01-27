import { SiReact, SiTailwindcss } from 'react-icons/si';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='absolute bottom-0 right-0 flex flex-col px-4 py-1 text-sm bg-slate-50 font-inter rounded-tl-xl'>
      <div className='items-center justify-center inline gap-1 text-center'>
        Made with <FaHeart className='inline text-red-500' /> by{' '}
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
          alt='React'
        >
          <SiReact />
        </a>
        and
        <a
          className='self-center text-[#38bdf8] text-xl'
          href='https://tailwindcss.com'
          target='_blank'
          rel='noreferrer'
        >
          <SiTailwindcss />
        </a>
      </div>
    </div>
  );
}
