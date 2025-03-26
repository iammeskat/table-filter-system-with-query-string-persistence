
const Button = ({
	text = "",
	onClick = () => { }
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer active:scale-95 transition-all duration-300"
		>
			{text}
		</button>
	)
}

export default Button