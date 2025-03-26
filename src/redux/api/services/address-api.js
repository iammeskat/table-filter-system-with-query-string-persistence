
import baseApi from "../base-api";

export const todoApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({

		fetchDivisionList: builder.query({
			query: () => `https://bdapi.editboxpro.com/api/divisions`,
			providesTags: ['DIVISION'],
		}),

		fetchDistrictList: builder.query({
			query: (division = "") => `https://bdapi.editboxpro.com/api/districts/${division}`,
			providesTags: ['DISTRICT'],
		}),

	}),
});

export const {
	useFetchDivisionListQuery,
	useFetchDistrictListQuery,
} = todoApi;