import { appConfig } from '@/config/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${appConfig.backendUrl}`,
  prepareHeaders: (headers, api) => {
    headers.set('Accept', 'application/json');
    return headers;
  },
});

export const emptyApi = createApi({
  baseQuery,
  keepUnusedDataFor: appConfig.apiCacheDuration,
  reducerPath: 'api',
  tagTypes: ['PostList', 'GetPost'],
  endpoints: () => ({}),
});
