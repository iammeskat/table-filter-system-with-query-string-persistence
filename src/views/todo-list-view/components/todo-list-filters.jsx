import Button from "@/components/button";
import DebounceTextInput from "@/components/debounce-text-input";
import SelectDistrict from "@/components/select-district";
import SelectDivision from "@/components/select-division";
import SelectOption from "@/components/select-option";

const TodoListFilters = ({
	query = {},
	setQuery = () => { }
}) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setQuery((prev) => ({
			...prev,
			[name]: value,
			...(name === "division" ? { district: "" } : {})
		}));
	}

	const handleClearFilters = () => {
		setQuery({ _page: 1, _limit: 10 });
	}

	return (
		<div className="flex flex-wrap items-end gap-4 p-8 rounded-lg border border-slate-300 bg-blue-50">
			<div className="w-full sm:w-3xs">
				<SelectDivision
					required
					name="division"
					value={query?.division}
					onChange={handleChange}
				/>
			</div>
			<div className="w-full sm:w-3xs">
				<SelectDistrict
					required
					name="district"
					value={query?.district}
					onChange={handleChange}
					division={query?.division}
					title={query?.division ? "" : "Please select a division first, then choose a district."}
				/>
			</div>
			<div className="w-full sm:w-32">
				<SelectOption
					label="Status"
					name="status"
					value={query?.status}
					placeholder="Select Status"
					onChange={handleChange}
					options={[{ label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }]}
				/>
			</div>
			<div className="w-full sm:w-3xs">
				<DebounceTextInput
					label="Keyword"
					name="keyword"
					value={query?.keyword}
					onChange={handleChange}
					placeholder="Search by keyword"
				/>
			</div>
			<div className="ml-auto">
				<Button
					text="Clear Filters"
					onClick={handleClearFilters}
				/>
			</div>
		</div>
	)
}

export default TodoListFilters