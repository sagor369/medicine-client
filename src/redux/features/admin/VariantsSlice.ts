import { baseAPi } from "@/redux/api/BaseApi";

const VariantsApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    getVariants: build.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }
        return {
          method: "GET",
          url: "/variants",
          params,
        };
      },
      providesTags: ["variants"],
    }),
    getSingleVariants: build.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/variantss/${id}`,
        };
      },
    }),
    createVariants: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/variants/create-variants",
        body,
      }),
      invalidatesTags: ["variants"],
    }),
    updateVariants: build.mutation({
      query: (query) => {
        const { id, ...body } = query;
        return {
          method: "PATCH",
          url: `/variants/${id}`,
          body,
        };
      },
      invalidatesTags: ["variants"],
    }),
    deleteVariants: build.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/variants/${id}`,
        };
      },
      invalidatesTags: ["variants"],
    }),
  }),
});

export const {
  useGetVariantsQuery,
  useGetSingleVariantsQuery,
  useCreateVariantsMutation,
  useUpdateVariantsMutation,
  useDeleteVariantsMutation,
} = VariantsApi;
