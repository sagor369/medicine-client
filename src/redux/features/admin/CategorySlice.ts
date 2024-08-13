import { baseAPi } from "@/redux/api/BaseApi";

const CategoryApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }
        return {
          method: "GET",
          url: "/categorys",
          params,
        };
      },
      providesTags: ["categorys"],
    }),
    getSingleCategory: build.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/categorys/${id}`,
        };
      },
    }),
    createCategory: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/categorys/create-category",
        body,
      }),
      invalidatesTags: ["categorys"],
    }),
    updateCategory: build.mutation({
      query: (query) => {
        const { id, ...body } = query;
        return {
          method: "PATCH",
          url: `/categorys/${id}`,
          body,
        };
      },
      invalidatesTags: ["categorys"],
    }),
    deleteCategory: build.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/categorys/${id}`,
        };
      },
      invalidatesTags: ["categorys"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetSingleCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = CategoryApi;
