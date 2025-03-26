import { useFetchDivisionListQuery } from '@/redux/api/services/address-api';
import { useMemo } from 'react';
import SelectOption from './select-option';

const SelectDivision = ({
	id = "",
	label = "Division",
	name = "",
	value = "",
	onChange = () => { },
	required = false,
	placeholder = "Select Division",
	disabled = false,
	...otherProps
}) => {
	const { data: divisions = [], isLoading } = useFetchDivisionListQuery();

	const options = useMemo(() => {
		return divisions.map((division) => ({
			value: division.name.toLowerCase(),
			label: division.name
		}))
	}, [divisions]);

	return (
		<SelectOption
			id={id}
			label={label}
			name={name}
			value={value}
			options={options}
			required={required}
			placeholder={isLoading ? "Loading..." : placeholder}
			onChange={onChange}
			disabled={isLoading || disabled}
			{...otherProps}
		/>
	)
}

export default SelectDivision