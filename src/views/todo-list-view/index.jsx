"use client";
import Table from "@/components/table";
import { useFetchTodoListQuery } from "@/redux/api/services/todo-api";
import { HashIcon } from "lucide-react";
import Link from "next/link";

const TodoListView = () => {
	const { data = [], isLoading, isFetching } = useFetchTodoListQuery();
	console.log({ data })

	const tableColumns = [
		{
			title: <HashIcon className="size-4" />,
			dataIndex: "idx",
			sortable: true,
			render: ({ data, index }) => (
				<p>
					{data}
				</p>
			),
			style: { width: '40px' }
		},
		{
			title: "Title",
			dataIndex: "title",
			sortable: true,
			render: ({ data, row, index }) => (
				<Link href={`/tickets/${row._id}`}>
					<p className="text-blue-500 font-medium hover:underline">
						{data}
					</p>
				</Link>
			)
		},
		{
			title: "Device",
			dataIndex: "device",
			render: ({ data, row, index }) => (
				<p>
					{data?.serial_number || "N/A"}
				</p>
			)
		},
		{
			title: "Ticket Owner",
			dataIndex: "submitter",
			render: ({ data, row, index }) => (
				<p className="notranslate">
					{data?.name || "---"}
				</p>
			)
		},

		{
			title: "Creation Date",
			dataIndex: "createdAt",
			sortable: true,
			render: ({ data, row, index }) => (
				<p>
					{/* {getFormattedDate(data) || "N/A"} */}
				</p>
			)
		},
		// {
		// 	title: "Action",
		// 	render: ({ row, index }) => (
		// 		<TicketActionMenu
		// 			data={row}
		// 			onAction={(action) => onAction(action, row)}
		// 		/>
		// 	)
		// },
	];
	console.log({ data })
	return (
		<div>
			<Table
				columns={tableColumns}
				data={data}
				isLoading={isLoading}
				isFetching={isFetching}
			/>
		</div>
	)
}

export default TodoListView