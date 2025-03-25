/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ChevronLeft, ChevronRight } from "lucide-react";
import SelectOption from "../select-option";
import BtnPagination from "./btn-pagination";

const PaginationButtons = ({
	total = 0,
	current = 0,
	count = 0,
	onChange = () => { },
	setCount = () => { },
	isFetching = false,
}) => {
	const handlePagination = (current) => {
		onChange(current);
	};

	const dots = <div className="flex items-center gap-2">
		<div className={`w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-200`} />
		<div className={`w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-200`} />
		<div className={`w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-200`} />
	</div>

	return (
		<div className="flex gap-8 md:gap-2">
			<BtnPagination
				disabled={current == 1}
				onClick={() => handlePagination(current - 1)}
				isFetching={isFetching}
				component={<ChevronLeft />}
			/>
			<div className="hidden md:flex gap-2">
				{total < 7 ? (
					<>
						{Array.apply(0, Array(total)).map((arr, i) => (
							<BtnPagination
								key={i}
								active={current == (i + 1)}
								onClick={() => handlePagination(i + 1)}
								isFetching={isFetching}
								component={i + 1}
							/>
						))}
					</>
				) : current % 5 >= 0 &&
					current > 4 &&
					current + 2 < total ? (
					<>
						<BtnPagination
							active={current == 1}
							onClick={() => handlePagination(1)}
							isFetching={isFetching}
							component={1}
						/>
						{dots}
						<BtnPagination
							active={current == 1}
							onClick={() => handlePagination(current - 1)}
							isFetching={isFetching}
							component={current - 1}
						/>
						<BtnPagination
							active={true}
							onClick={() => handlePagination(current)}
							isFetching={isFetching}
							component={current}
						/>
						<BtnPagination
							active={current == 1}
							onClick={() => handlePagination(current + 1)}
							isFetching={isFetching}
							component={current + 1}
						/>
						{dots}
						<BtnPagination
							active={current == (total - 1)}
							onClick={() => handlePagination(total)}
							isFetching={isFetching}
							component={total}
						/>
					</>
				) : current % 5 >= 0 &&
					current > 4 &&
					current + 2 >= total ? (
					<>
						<BtnPagination
							active={current == 1}
							onClick={() => handlePagination(1)}
							isFetching={isFetching}
							component={1}
						/>
						{dots}
						<BtnPagination
							active={current == (total - 3)}
							onClick={() => handlePagination(total - 3)}
							isFetching={isFetching}
							component={total - 3}
						/>
						<BtnPagination
							active={current == (total - 2)}
							onClick={() => handlePagination(total - 2)}
							isFetching={isFetching}
							component={total - 2}
						/>
						<BtnPagination
							active={current == (total - 1)}
							onClick={() => handlePagination(total - 1)}
							isFetching={isFetching}
							component={total - 1}
						/>
						<BtnPagination
							active={current == (total)}
							onClick={() => handlePagination(total)}
							isFetching={isFetching}
							component={total}
						/>
					</>
				) : (
					<>
						{Array.apply(0, Array(5)).map((arr, i) => (
							<BtnPagination
								key={i}
								active={current == (i + 1)}
								onClick={() => handlePagination(i + 1)}
								isFetching={isFetching}
								component={i + 1}
							/>
						))}
						{dots}
						<BtnPagination
							active={current == (total - 1)}
							onClick={() => handlePagination(total)}
							isFetching={isFetching}
							component={total}
						/>
					</>
				)}
			</div>
			<BtnPagination
				disabled={current == total}
				onClick={() => handlePagination(current + 1)}
				isFetching={isFetching}
				component={<ChevronRight />}
			/>
			<SelectOption
				size="lg"
				value={count}
				onChange={e => setCount(e.target.value)}
				options={[
					{ label: "10 / page", val: 10 },
					{ label: "30 / page", val: 30 },
					{ label: "50 / page", val: 50 },
					{ label: "100 / page", val: 100 },
					{ label: "200 / page", val: 200 },
					{ label: "300 / page", val: 300 },
					{ label: "500 / page", val: 500 },
					{ label: "700 / page", val: 700 },
					{ label: "1000 / page", val: 1000 }
				]}
			/>
		</div>
	);
};

export default PaginationButtons;