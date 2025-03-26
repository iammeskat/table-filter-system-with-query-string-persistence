"use client";
import useTableQuery from "@/hooks/useTableQuery";
import { useFetchTodoListQuery } from "@/redux/api/services/todo-api";
import TodoListFilters from "./components/todo-list-filters";
import TodoListTable from "./components/todo-list-table";

const TodoListView = () => {
	const { tableQuery, setTableQuery, isReady } = useTableQuery();
	const isFilledRequiredFields = (tableQuery.division && tableQuery.district);
	const skip = (!isReady || !isFilledRequiredFields);
	const { data = [], isLoading, isFetching } = useFetchTodoListQuery(tableQuery, { skip });

	const loading = (isLoading || !isReady);
	const fetching = (isFetching || !isReady);

	return (
		<div className="w-full flex flex-col gap-8">
			<TodoListFilters
				query={tableQuery}
				setQuery={setTableQuery}
			/>
			<TodoListTable
				data={isFilledRequiredFields ? data : []}
				setQuery={setTableQuery}
				query={tableQuery}
				loading={loading}
				fetching={fetching}
			/>
		</div>
	)
}

export default TodoListView