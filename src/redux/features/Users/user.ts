import { baseAPi } from "@/redux/api/BaseApi";

const UserApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (areg) => {
        const params = new URLSearchParams();
        if (areg) {
          areg.map((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "",
          method: "",
          params,
        };
      },
    }),
    createUser: build.mutation({
      query: (data) => {
        return {
          url: "",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {useGetUserQuery, useCreateUserMutation} = UserApi
