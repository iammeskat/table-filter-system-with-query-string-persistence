import { ArrowUpNarrowWide, ArrowUpWideNarrow, ChevronsUpDown } from "lucide-react";
import DataEmptyState from "./data-empty-state";
import PaginationButtons from "./pagination-buttons";

const Table = ({
	title = "",
	columns = [],
	data: tableData = [],
	query = {},
	setQuery = () => { },
	fetching = false,
	loading = false,
}) => {
	const { sort_by, sort_order, _limit, _page, total } = query;
	const data = loading ? Array(10).fill({}) : tableData;

	return (
		<div className="w-full flex flex-col gap-1">
			{title &&
				<h3 className="font-bold text-xl">
					{title}
				</h3>
			}
			<div className="rounded-md border border-slate-300 w-full overflow-hidden">
				{data?.length ? (
					<div className="w-full overflow-y-auto ">
						<table className="w-full text-sm text-left rtl:text-right">
							<thead className="text-xs text-slate-900 uppercase bg-gray-100 ">
								<tr>
									{columns.map((item = {}, indx) => {
										const { title = '', sortable, style = {}, dataIndex = '', hide } = item;
										if (hide) return "";
										return (
											<th
												key={`table-col-${indx}`}
												scope="col"
												className="px-2 py-3 first:pl-4 last:pr-4 last:[&>div]:last:justify-end"
												style={style}
											>
												<div
													onClick={() => sortable && setQuery({
														...query, sort_by: dataIndex, sort_order: sort_order == "asc" ? "desc" : "asc"
													})}
													className={`w-full flex items-center gap-2 ${sortable ? 'cursor-pointer' : ''}`}
												>
													{title}
													{sortable &&
														<div className="size-4 min-w-4">
															{sort_by == dataIndex ? (
																sort_order == "asc" ? (
																	<ArrowUpNarrowWide className="size-4" />
																) : (
																	<ArrowUpWideNarrow className="size-4" />
																)
															) : (
																<ChevronsUpDown className="size-4" />
															)}
														</div>
													}
												</div>
											</th>
										)
									})}
								</tr>
							</thead>
							<tbody className="text-slate-600 font-medium" >
								{data.map((row = {}, rIndx) => (
									<tr
										key={`r_${rIndx}`}
										className="bg-white border-b border-slate-300 hover:bg-gray-50"
									>
										{columns.map((column = {}, cIndx) => {
											const { dataIndex, render, style = {}, hide } = column;
											if (hide) return "";
											return (
												<td
													key={`r_${rIndx}_c_${cIndx}`}
													className="px-2 py-4  first:pl-4 last:pr-4 last:text-right"
													style={style}
												>
													{fetching ? (
														<div className="h-4 my-1 w-full bg-slate-300 rounded animate-pulse" />
													) : (render ? render({
														row,
														index: rIndx,
														data: row[dataIndex] || null,
													}) : row[dataIndex] || null)}
												</td>
											)
										})}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<DataEmptyState />
				)}
				<div className="w-full flex justify-end py-2 pr-2">
					<PaginationButtons
						total={Math.ceil(total / _limit) || 0}
						current={_page}
						count={_limit}
						onChange={val => setQuery(prev => ({ ...prev, _page: val }))}
						setCount={(val) => setQuery(prev => ({ ...prev, _limit: val }))}
						fetching={fetching}
					/>
				</div>
			</div >
		</div>

	)
}

export default Table