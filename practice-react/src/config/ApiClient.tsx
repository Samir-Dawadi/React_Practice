import axios from "axios";
import Cookies from "js-cookie"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    // timeout:30000, //default is 30000ms if u want more time for expire , u can give else if 30000 then that is default no need to write 
    timeout: 60000,
    timeoutErrorMessage: "Server Timeout.........",
    responseType: "json",
    headers: {
        "Content-Type": "application/json"
    }
})


//request interceptors

axiosInstance.interceptors.request.use((config) => {
    //console.log("i am in req interceptor")
    const token = Cookies.get("Auth_Key_61")
    if (token) {
        config.headers.Authorization = "Bearer " + token   //to authorize private api endpoints
    }
    return config
})

//response interceptor

axiosInstance.interceptors.response.use(    //use two parameter ->success and failure
    (response) => response.data,       //this is success case 
    (exception) => {                   //this is failure case , now the error will be displayed from this file ApiClient
        // console.log(exception)
        // console.error(exception)
        // console.error(exception.status)
        if (exception.status === 400 || exception.status === 402) {
            throw exception?.response?.data
        }
        else {
            throw exception?.response
        }
    }
)



export default axiosInstance