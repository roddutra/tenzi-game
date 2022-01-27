import { GoMarkGithub } from 'react-icons/go';

export default function GithubBadge() {
  return (
    <a
      href='https://github.com/roddutra/tenzi-game'
      target='_blank'
      rel='noreferrer'
    >
      <GoMarkGithub className='absolute text-3xl text-white top-6 right-5' />
    </a>
  );
}
