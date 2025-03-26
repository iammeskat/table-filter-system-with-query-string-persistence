
const SelectOption = ({
	id = "",
	label = "",
	name = "",
	value = "",
	options = [],
	onChange = () => { },
	required = false,
	placeholder = "",
	disabled = false,
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
			<select
				id={eleId}
				name={name}
				value={value || ""}
				onChange={onChange}
				required={required}
				disabled={disabled}
				className={`${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-gray-50"} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
				{...otherProps}
			>
				{placeholder &&
					<option
						value=""
						disabled
						className="text-gray-400"
					>
						{placeholder}
					</option>
				}
				{options.map((option, indx) => (
					<option
						key={indx}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectOption