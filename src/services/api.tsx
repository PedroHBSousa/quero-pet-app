import axios from "axios";
import config from "../global/config";


const api = axios.create({
    baseURL: config.BaseUrl + "/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "aplication/json",
    }
});
export default api;