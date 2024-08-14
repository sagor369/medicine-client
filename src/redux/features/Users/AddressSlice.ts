import { baseAPi } from "@/redux/api/BaseApi";

const AddressApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    getAddress: build.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }
        return {
          method: "GET",
          url: "/address",
          params,
        };
      },
      providesTags: ["address"],
    }),
    getSingleAddress: build.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/addresss/${id}`,
        };
      },
    }),
    createAddress: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/address/create-address",
        body,
      }),
      invalidatesTags: ["address"],
    }),
    updateAddress: build.mutation({
      query: (query) => {
        const { id, ...body } = query;
        return {
          method: "PATCH",
          url: `/address/${id}`,
          body,
        };
      },
      invalidatesTags: ["address"],
    }),
    deleteAddress: build.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/address/${id}`,
        };
      },
      invalidatesTags: ["address"],
    }),
  }),
});

export const {
  useGetAddressQuery,
  useGetSingleAddressQuery,
  useCreateAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
} = AddressApi;
