// import * as dotenv from 'dotenv';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Label } from './type'
// dotenv.config()


const key = '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';
// query: (page = 1) => `https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=10`
export const apiGitHubSlice = createApi({
    reducerPath: 'apiGitHub',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/repos/facebook/react',
        // prepareHeaders(headers) {
        //     headers.set('Access-Control-Allow-Origin', '*')
        //     return headers
        // }
    }),
    endpoints(build) {
        return {
            fetchIssus: build.query<Label[], number | void>({
                query(page = 1) {
                    return `/labels`
                }
            }),
            postData: build.query<Label[], number | void>({
                query() {
                    return '/labels'
                }
            })
        }
    }
});

export const { useFetchIssusQuery, usePostDataQuery } = apiGitHubSlice;
