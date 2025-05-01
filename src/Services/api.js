import axios from "axios";

const api = axios.create({
    baseURL : import.meta.env.VITE_BACK_BASE_API,
    headers : {
        "Content-Type" : "application/json"
    }
})

export const subscription = {
    emailSub : async (userEmail)=>{
        const res = await api.post("/emailSubscribers", userEmail)
        return res.data
    }
}