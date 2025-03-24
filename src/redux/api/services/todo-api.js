import { toQueryStrings } from "@/utils/helpers";
import baseApi from "../base-api";

export const todoApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({

		fetchTodoList: builder.query({
			query: (query = {}) => `/todos${toQueryStrings(query)}`,
			transformResponse: res => res.data,
			providesTags: ['TODO'],
		}),

		fetchTodo: builder.query({
			query: (id) => `/todos/${id}`,
			providesTags: ['TODO'],
		}),

		createTodo: builder.mutation({
			query: (payload) => ({
				url: `/todos`,
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: ['TODO']
		}),

		updateTodo: builder.mutation({
			query: ({ id, payload }) => ({
				url: `/todos/${id}`,
				method: 'PATCH',
				body: payload,
			}),
			invalidatesTags: ['TODO']
		}),

		deleteTodo: builder.mutation({
			query: (id) => ({
				url: `/todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['TODO']
		}),

	}),
});

export const {
	useFetchTodoListQuery,
	useFetchTodoQuery,
	useCreateTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation
} = todoApi;