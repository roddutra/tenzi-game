import Confetti from 'react-confetti';

export default function Completed(props) {
  return (
    <div className='flex flex-col justify-center gap-8'>
      <div className='absolute top-0 left-0 w-screen h-screen'>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
      <h1 className='self-center text-4xl text-center'>You did it!</h1>
      <p className='text-center font-inter'>
        You rolled the dice{' '}
        <span className='text-lg font-bold'>{props.diceRolled} times</span> 🎲{' '}
        <br />
        and your selected number was{' '}
        <span className='text-lg font-bold'>{props.numberSelected}</span>
      </p>
      <img
        alt='Happy Dance gif'
        src='https://media.giphy.com/media/5PSPV1ucLX31u/giphy.gif'
      />
      <button
        className='self-center text-xl text-white rounded-md p-4 bg-tenzies-blue hover:bg-[#5B42FF] drop-shadow-md'
        onClick={props.restart}
      >
        Play again
      </button>
    </div>
  );
}
