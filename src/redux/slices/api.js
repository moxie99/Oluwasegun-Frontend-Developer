import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/",
    prepareHeaders: (headers, { getState }) => {
      const apiKey = getState().auth.apiKey;
      if (apiKey) {
        headers.set("Authorization", `Bearer ${apiKey}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  reducerPath: "adminApi",
  tagTypes: ["Capsules", "Rockets"],
  endpoints: (build) => ({
    getCapsules: build.query({
      query: (id) => "capsules",
      providesTags: ["Capsules"],
    }),
    getRockets: build.query({
      query: () => "rockets",
      providesTags: ["Rockets"],
    }),
  }),
});

export const { useGetCapsulesQuery, useGetRocketsQuery } = api;
