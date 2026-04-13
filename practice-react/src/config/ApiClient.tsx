import axios from "axios";
import Cookies from "js-cookie"

const axiosInstance = axios.create({
    // Base URL for all API requests (no need to repeat in every call)
    baseURL: import.meta.env.VITE_APP_BASE_URL,

    // timeout:30000, //default is 30000ms if u want more time for expire , u can give else if 30000 then that is default no need to write 
    timeout: 60000,

    // Custom error message if request takes too long
    timeoutErrorMessage: "Server Timeout.........",

    // Expect response data in JSON format
    responseType: "json",


    headers: {
        // Tell server we are sending JSON data
        "Content-Type": "application/json"
    }
})


//request interceptors-Runs before every request is sent

axiosInstance.interceptors.request.use((config) => {
    //console.log("i am in req interceptor")
    //Get authentication token from cookies, Used to identify logged-in user
    const token = Cookies.get("Auth_Key_61")

    if (token) {       //Check if token exists
        //Add token to request header,Required for protected/private APIs
        config.headers.Authorization = "Bearer " + token   //to authorize private api endpoints i.e cookie ko header ma token halera pathauni
    }
    return config  //Return modified config so request can continue
})

//response interceptor - Runs after response is received

axiosInstance.interceptors.response.use(    //use two parameter ->success and failure
    // Return only .data part of response
    //Removes extra info (status, headers)
    //Makes response cleaner and easier to use
    (response) => response.data,       //this is success case  , single line vayera w/o return we write like this

    (exception) => {                   //this is failure case , now the error will be displayed from this file ApiClient
        // console.log(exception)
        // console.error(exception)
        // console.error(exception.status)
        if (exception.status === 400 || exception.status === 402) {
            throw exception?.response?.data         //exception xa vane response her, response xa vane data de, natra error nafal                        //if exception occurs then it returns the data 
        }
        else {
            throw exception?.response
        }
    }
)



export default axiosInstance