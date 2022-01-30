import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { People, isPeople } from "./types";

const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    getTodos: builder.query<People, void>({
      query: () => `/people`,
      transformResponse: (response: People) => {
        // Typeguard. We check the shape of the response data. If the response data is not in
        // expected shape, we add it "empty" equivalent to the store (here [] instead of Peron[]).
        if (!isPeople(response)) {
          console.log("Invalid data: getTodos.", response.results);
          response.results = [];
        }
        return response;
      },
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;

export default todoApi;
