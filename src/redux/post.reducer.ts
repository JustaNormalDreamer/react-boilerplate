import { Post } from '@/models/Post';
import { emptyApi } from '@/redux/baseQuery';

export const postApi= emptyApi.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getPostsList: builder.query<Post[], void>({
            query: () => '/posts',
            providesTags: ['PostList'],
        }),
        getPost: builder.query<Post, string | undefined>({
            query: (id) => `/posts/${id}`,
            providesTags: ['GetPost'],
        })
    })
});

export const {
    useGetPostQuery,
    useGetPostsListQuery,
    useLazyGetPostQuery,
    useLazyGetPostsListQuery,
} = postApi;