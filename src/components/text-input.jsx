
const TextInput = ({
	id = "",
	label = "",
	name = "",
	value = "",
	onChange = () => { },
	required = false,
	disabled = false,
	type = "text",
	...otherProps
}) => {
	const eleId = id || ("select-" + label?.replaceAll(" ", "-"));
	return (
		<div className="w-full">
			{label &&
				<label
					htmlFor={eleId}
					className="mb-1 text-sm font-medium text-gray-900"
				>
					{label} {required && <span className="text-red-500">*</span>}
				</label>
			}
			<input
				id={eleId}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				disabled={disabled}
				type={type}
				className={`${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-gray-50"} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-0 block w-full p-2.5`}
				{...otherProps}
			/>
		</div>
	)
}

export default TextInput