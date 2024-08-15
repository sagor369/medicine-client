import { baseAPi } from "@/redux/api/BaseApi";

const ProductApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.map((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }
        return {
          method: "GET",
          url: "/products",
          params,
        };
      },
      providesTags: ["products"],
    }),
    getSingleProduct: build.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/products/${id}`,
        };
      },
    }),
    createProduct: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/products/create-product",
        body,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: build.mutation({
      query: (query) => {
        const { id, ...body } = query;
        return {
          method: "PATCH",
          url: `/products/${id}`,
          body,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: build.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/products/${id}`,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = ProductApi;
