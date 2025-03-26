import { Loader } from "lucide-react";

export default function BtnPagination({ component, onClick = () => { }, active, disabled, isFetching }) {

	const handleOnClick = () => {
		if (disabled || active) return;
		onClick();
	}



	return (
		<button
			href="#"
			onClick={handleOnClick}
			disabled={disabled}
			size="icon"
			variant={active ? "" : "outline"}
			className={` min-w-10 ${(active) ? "cursor-default opacity-40" : "cursor-pointer hover:bg-slate-100 rounded-lg"}	`}
		>
			{(active && isFetching) ? <Loader className="size-6 animate-spin" /> : component}
		</button>
	)
}