import { baseAPi } from "@/redux/api/BaseApi";

const OrdersApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }
        return {
          method: "GET",
          url: "/orders",
          params,
        };
      },
      providesTags: ["orders"],
    }),
    getSingleOrders: build.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/orderss/${id}`,
        };
      },
    }),
    createOrders: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/orders/create-order",
        body,
      }),
      invalidatesTags: ["orders"],
    }),
    updateOrders: build.mutation({
      query: (query) => {
        const { id, ...body } = query;
        return {
          method: "PATCH",
          url: `/orders/${id}`,
          body,
        };
      },
      invalidatesTags: ["orders"],
    }),
    deleteOrders: build.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/orders/${id}`,
        };
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetSingleOrdersQuery,
  useCreateOrdersMutation,
  useUpdateOrdersMutation,
  useDeleteOrdersMutation,
} = OrdersApi;
