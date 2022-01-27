export default function Die(props) {
  return (
    <button
      key={props.number.id}
      className={`flex items-center justify-center w-12 h-12 m-2 font-bold rounded-md drop-shadow-md ${
        props.number.isSelected
          ? 'bg-tenzies-green'
          : 'bg-white hover:bg-green-200'
      } ${
        props.numberSelected &&
        props.numberSelected !== props.number.num &&
        'hover:bg-red-200'
      } ${props.number.animation && 'animate-spin-once'}`}
      onClick={() => props.freezeDie(props.number)}
    >
      {props.number.num}
    </button>
  );
}
