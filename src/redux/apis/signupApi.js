import { apiSlice } from "../apiSlice";

const signupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ body }) => {
        return {
          url: "/register",
          method: "POST",
          body: body,
        };
      },
      providesTags: ["signup"],
    }),
    searchGstin: builder?.mutation({
      query: ({ body }) => {
        return {
          url: "https://stagingsuperadmin.tizzygroup.com/api/v1/search-gstin",
          method: "POST",
          body: body,
        };
      },
      providesTags: ["signup"],
    }),
    getOtpVerified: builder?.mutation({
      query: ({ body }) => {
        return {
          url: "/verify-otp",
          method: "POST",
          body: body,
        };
      },
      providesTags: ["signup"],
    }),
    resendOtp: builder?.mutation({
      query: ({ body }) => {
        return {
          url: "/resend-otp",
          method: "POST",
          body: body,
        };
      },
      providesTags: ["signup"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useSearchGstinMutation,
  useGetOtpVerifiedMutation,
  useResendOtpMutation,
} = signupApi;
