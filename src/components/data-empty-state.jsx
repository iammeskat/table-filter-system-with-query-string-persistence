import { InboxIcon } from 'lucide-react'

const DataEmptyState = () => {
	return (
		<div className="flex flex-col items-center justify-center py-10 gap-6">
			<div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full">
				<InboxIcon className="w-10 h-10 text-gray-500 " />
			</div>
			<div className="space-y-2 text-center">
				<h2 className="text-2xl font-bold tracking-tight">
					No data to display
				</h2>
				<p className="text-orange-500 ">
					Please select the required filters above and try again,<br />or adjust the filters to refine your search.
				</p>
			</div>
		</div>
	)
}

export default DataEmptyState