import axios from "axios";

const api = axios.create({
    baseURL : process.env.NEXT_BACK_BASE_API,
    headers : {
        "Content-Type" : "application/json"
    }
})

export const subscription = {
    emailSub : async (email)=>{
        const res = await api.post("/emailSubscribers", email)
        return res.data
    }
}