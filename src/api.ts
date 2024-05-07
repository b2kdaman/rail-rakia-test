import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { LoginFormData, User } from './types';

/**
 * Dummy JSON API
 * @docs https://dummyjson.com/docs/auth
 * @examples https://dummyjson.com/users
 */
const BASE_URL = 'https://dummyjson.com';

const api = createApi({
  reducerPath: 'api', // Unique key for the API state reducer
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginFormData>({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = api;

export default api;

