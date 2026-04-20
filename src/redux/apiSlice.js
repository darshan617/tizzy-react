import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://goyalinfotech.in/tizzy",
  }),
  tagTypes: ["login"],
  endpoints: (builder) => ({}),
});
