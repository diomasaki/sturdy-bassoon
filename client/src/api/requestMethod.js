import axios from "axios";


export const baseURL = "http://localhost:8800/api/"
const token = "AD252592i5295SHA"


export const requestWithAuthorization = axios.create({
    url: baseURL,
    headers: `Bearer ${token}`,
})