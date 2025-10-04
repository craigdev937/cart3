import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData, IProd, ICat } from "../models/Interfaces";
const URL = "https://dummyjson.com";

export const API = createApi({
    reducerPath: "API",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        prod: builder.query<IProd, {
            limit?: number, skip?: number,
            category?: string
        }>({
            query: ({
                limit = 50, skip = 0,
                category
            }) => category
                ? `/products/category/${category}?limit=${limit}&skip=${skip}`
                : `/products?limit=${limit}&skip=${skip}`,
            providesTags: ["Products"]
        })
    })
});


