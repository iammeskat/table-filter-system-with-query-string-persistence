import TodoListView from "@/views/todo-list-view";
import { Suspense } from "react";

export default function TodoListPage() {
	return (
		<Suspense fallback="Loading...">
			<TodoListView />
		</Suspense>
	);
}
