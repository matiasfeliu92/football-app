import axios, { AxiosInstance } from "axios";

export const axiosHttp: AxiosInstance = axios.create({
    baseURL: 'https://apiv2.allsportsapi.com/football',
    headers: {
        "Content-type": "application/json"
      }
})