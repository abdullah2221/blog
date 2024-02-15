
interface Props{
title:string
}
const Button = (props:Props) => {
  return (
    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
    {props.title}
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="w-4 h-4 ml-1"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </button>
  )
}

export default Button