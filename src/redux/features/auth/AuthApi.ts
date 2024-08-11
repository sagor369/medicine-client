import { baseAPi } from "../../Apis/BaseApi";

const authApi = baseAPi.injectEndpoints({
    endpoints:(build)=> ({
        login: build.mutation({
            query: (userInfo)=>({
                url: '/auth/login',
                body: userInfo,
                method: 'POST'
            })
        })
    }),
})

export const {useLoginMutation} = authApi