import axios from "axios"

// api
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACK_END_BASE_API,
    headers: {
        "Content-Type": "application/json"
    }
})

// subscription
export const subscription = {
    emailSub: async (email) => {
        const res = await api.post("/emailSubscribers", { email })
        return res.data
    }
}

// inquries
export const inquires = {
    inquiresData: async (name, email, phone, companyName, budget, description) => {
        const res = await api.post("/inquiresDatas", { name, email, phone, companyName, budget, description })
        return res.data
    }
}