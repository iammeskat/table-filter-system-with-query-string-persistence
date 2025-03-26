import { useFetchDistrictListQuery } from '@/redux/api/services/address-api';
import { useMemo } from 'react';
import SelectOption from './select-option';

const SelectDistrict = ({
	id = "",
	division = "",
	label = "District",
	name = "",
	value = "",
	onChange = () => { },
	required = false,
	placeholder = "Select District",
	disabled = false,
	...otherProps
}) => {
	const { data: districts = [], isLoading } = useFetchDistrictListQuery(division, { skip: !division });

	const options = useMemo(() => {
		return districts.map((division) => ({
			value: division.name.toLowerCase(),
			label: division.name
		}))
	}, [districts]);

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
			disabled={!division || isLoading || disabled}
			{...otherProps}
		/>
	)
}

export default SelectDistrict