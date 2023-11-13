import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IAccount {
  // name: string
  password: string
  // enterPassword: string
  email: string
}

const API_URL = 'http://localhost:3000'

export const apis = createApi({
  reducerPath: '/',
  tagTypes: ['Item'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include'
  }),
  endpoints: builder => ({

    createUser: builder.mutation<null, IAccount>({
      query: (user) => ({
        body: user,
        url: 'auth/sign-up',
        method: 'POST',

      }),
      invalidatesTags: () => [{
        type: 'Item'
      }]
    }),

    authUser: builder.mutation<null, IAccount>({
      query: (user) => ({
        body: user,
        url: 'auth/sign-in',
        method: 'POST',

      }),
      invalidatesTags: () => [{
        type: 'Item'
      }]
    }),

    takeToken: builder.query({
      query: () => ({
        // http://localhost:3000/
        url: 'auth/session', method: 'GET', headers: {
          'Content-Type': 'application/json',
        }
      }),


    }),



    addItem: builder.mutation({
      query: (item) => ({
        body: item,
        url: 'market-list/item',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      invalidatesTags: () => [{
        type: 'Item'
      }]
    }),

    getItems: builder.query({
      query: () => ({
        url: 'market-list',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      providesTags: () => [{
        type: 'Item'
      }]
    }),

    deleteItems: builder.mutation<null, number>({
      query: (id) => ({

        url: `market-list/item/${id}`,
        method: 'DELETE',


      }),
      invalidatesTags: () => [{
        type: 'Item'
      }]
    }),

    outToken: builder.mutation<null, null>({
      query: () => ({

        url: 'auth/sign-out', method: 'POST'
      }),
      invalidatesTags: () => [{
        type: 'Item'
      }]

    }),


  })

})

export const { useCreateUserMutation, useAuthUserMutation, useTakeTokenQuery, useAddItemMutation, useGetItemsQuery, useOutTokenMutation, useDeleteItemsMutation } = apis