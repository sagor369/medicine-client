import {jwtDecode} from 'jwt-decode'
export const verifyToken = (token:string) =>{
    console.log(token)
    const decode = jwtDecode(token)
    return decode
} 