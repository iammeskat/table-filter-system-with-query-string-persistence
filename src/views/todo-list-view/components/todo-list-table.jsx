import Table from "@/components/table";

const TodoListTable = ({
	data = [],
	loading = false,
	fetching = false,
	query = {},
	setQuery = () => { },
}) => {

	const tableColumns = [
		{
			title: "ID",
			dataIndex: "id",
			sortable: true,
			style: { width: '40px' }
		},
		{
			title: "Title",
			dataIndex: "title",
			sortable: true,
			render: ({ data, row, index }) => (
				<p className="text-blue-500 font-medium hover:underline">
					{data}
				</p>
			)
		},
		{
			title: "User ID",
			dataIndex: "userId",
			style: { width: '70px', },
		},
		{
			title: "Status",
			dataIndex: "completed",
			style: { width: '100px', },
			render: ({ data, row, index }) => (data ? "Completed" : "Incomplete")
		}
	];

	return (
		<Table
			title="Todo List"
			columns={tableColumns}
			data={data}
			loading={loading}
			fetching={fetching}
			// query={query}
			query={{ ...query, total: 200, page_size: query?.count || 50 }}
			setQuery={setQuery}
		/>
	)
}

export default TodoListTable