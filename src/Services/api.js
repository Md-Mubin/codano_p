import axios from "axios";

// api
const api = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BACK_BASE_API,
    headers : {
        "Content-Type" : "application/json"
    }
})

// variables
export const subscription = {
    emailSub : async (email)=>{
        const res = await api.post("/emailSubscribers", {email})
        console.log(res)
        return res.data
    }
}