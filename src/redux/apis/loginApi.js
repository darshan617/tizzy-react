import { apiSlice } from "../apiSlice";

const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ body }) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["login"],
    }),

    verifyOtp: builder.mutation({
      query: ({ body }) => ({
        url: "/verify-otp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["login"],
    }),
  }),
});

export const { useLoginMutation, useVerifyOtpMutation } = loginApi;
