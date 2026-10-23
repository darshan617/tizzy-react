import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stagingsuperadmin.tizzygroup.com/api/v1/b2c/",
  }),
  tagTypes: ["login", 'signup'],
  endpoints: (builder) => ({}),
});
