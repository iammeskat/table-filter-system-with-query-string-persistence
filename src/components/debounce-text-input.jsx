import { useEffect, useState } from 'react';
import TextInput from './text-input';

const DebounceTextInput = ({
	name = "",
	value = "",
	delay = 500,
	onChange = () => { },
	...otherProps
}) => {
	const [event, setEvent] = useState(null);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (event)
				onChange(event);
		}, delay);
		return () => clearTimeout(timeoutId);
	}, [event]);

	// useEffect(() => {
	// 	if (!value) {
	// 		setEvent({ target: {} })
	// 	}
	// }, [value]);

	return (
		<TextInput
			name={name}
			value={event?.target?.value === undefined ? value : event.target.value}
			onChange={setEvent}
			{...otherProps}
		/>
	);
}

export default DebounceTextInput;