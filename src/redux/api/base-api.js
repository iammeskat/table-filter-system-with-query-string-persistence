import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers) => {
		// const token = getCookie("accessToken");
		// if (token) {
		// 	headers.set("token", token);
		// }
		return headers;
	},
});

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery,
	tagTypes: ["TODO", "DIVISION", "DISTRICT"],
	endpoints: () => ({}),
});

export default baseApi;