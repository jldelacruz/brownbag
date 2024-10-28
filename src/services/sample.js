import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sampleApi = createApi({
  reducerPath: 'sampleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
    }),
    getPostsByUserId: builder.query({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: ['Post']
    }),
  }),
});

export const { 
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetPostsByUserIdQuery
 } = sampleApi;