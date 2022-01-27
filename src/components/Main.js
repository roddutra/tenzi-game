import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import Die from './Die';
import Modal from './Modal';
import Completed from './Completed';

export default function Main(props) {
  let startingNumbers = [];
  for (let i = 0; i < 10; i++) {
    startingNumbers.push({
      id: nanoid(),
      num: getRandomDie(),
      isSelected: false,
      animation: true,
    });
  }

  const [numbers, setNumbers] = useState(startingNumbers);
  const [numberSelected, setNumberSelected] = useState(null);
  const [diceRolled, setDiceRolled] = useState(0);
  const [numbersRemaining, setNumbersRemaining] = useState(10);
  const [showModal, setShowModal] = useState(false);

  function getRandomDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function freezeDie(number) {
    if (numberSelected === null || numberSelected === number.num) {
      setNumberSelected(number.num);
      setNumbers((prevNumbers) =>
        prevNumbers.map((prevNumber) =>
          prevNumber.id === number.id
            ? { ...prevNumber, isSelected: true, animation: false }
            : prevNumber
        )
      );
      setNumbersRemaining((prevNumbersRemaining) => prevNumbersRemaining - 1);
    } else {
      return setShowModal(true);
    }
  }

  function rollDice() {
    const newNumbers = numbers.map((number) => {
      return number.isSelected
        ? number
        : { ...number, id: nanoid(), num: getRandomDie(), animation: true };
    });
    setNumbers(newNumbers);
    setDiceRolled((prevDiceRolled) => prevDiceRolled + 1);
  }

  function restart() {
    setNumbers(startingNumbers);
    setNumberSelected(null);
    setDiceRolled(0);
    setNumbersRemaining(10);
  }

  const numberElements = numbers.map((number) => {
    return (
      <Die
        number={number}
        freezeDie={freezeDie}
        key={number.id}
        numberSelected={numberSelected}
      />
    );
  });

  return (
    <div className='flex flex-col gap-5 p-6 rounded-md w-96 bg-slate-200'>
      {showModal && (
        <Modal setShowModal={setShowModal} numberSelected={numberSelected} />
      )}

      {numbersRemaining === 0 ? (
        <Completed
          diceRolled={diceRolled}
          numberSelected={numberSelected}
          restart={restart}
        />
      ) : (
        <div className='relative flex flex-col gap-5'>
          <span
            className='absolute text-lg cursor-pointer -top-2 -right-2'
            title='Restart'
            onClick={restart}
          >
            <BsArrowCounterclockwise />
          </span>

          <h1 className='text-3xl font-bold text-center'>Tenzi Dice Game</h1>
          <p className='text-center font-inter'>
            Pick a number and click the dice that match to collect it. Roll the
            dice and continue until you have collected all 10 of your chosen
            number.
          </p>

          <div className='flex flex-wrap justify-center'>{numberElements}</div>

          <button
            className='self-center text-2xl text-white rounded-md p-4 bg-tenzies-blue hover:bg-[#5B42FF] drop-shadow-md'
            onClick={rollDice}
          >
            Roll <span className='animate-spin'>🎲</span>
          </button>

          {
            <div className='self-center text-xs font-inter'>
              {diceRolled === 1
                ? `Rolled ${diceRolled} time`
                : `Rolled ${diceRolled} times`}
            </div>
          }
        </div>
      )}
    </div>
  );
}
