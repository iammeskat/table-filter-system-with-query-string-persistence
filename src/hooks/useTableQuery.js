import { shallowRoute, toQueryStrings } from "@/utils/helpers";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const useTableQuery = (initialQuery = { _page: 1, _limit: 10 }) => {
	const [isReady, setIsReady] = useState(false);
	const [tableQuery, setTableQuery] = useState(initialQuery);
	const searchParams = useSearchParams();
	// const router = useRouter();

	useEffect(() => {
		if (!isReady) {
			const params = Object.fromEntries(searchParams.entries());
			if (Object.keys(params).length > 0)
				setTableQuery((prev) => ({ ...prev, ...params }));
			setIsReady(true);
		}
	}, [isReady, searchParams]);

	useEffect(() => {
		if (isReady) {
			shallowRoute(`${window.location.pathname}${toQueryStrings(tableQuery)}`);
			// router.replace("/" + toQueryStrings(tableQuery), undefined, { shallow: true });
		}
	}, [tableQuery, isReady]);

	return { tableQuery, setTableQuery, isReady }
}

export default useTableQuery