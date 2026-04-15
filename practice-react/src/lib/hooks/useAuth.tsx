import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

export const useAuth = () => {                                        //use "use" inorder to use it as hook Function , useauth expose the provider to the component where we use them
    const { login, authUser, getloggedInUser, authloading } = useContext(AuthContext)
    return { login, authUser, getloggedInUser, authloading }
}