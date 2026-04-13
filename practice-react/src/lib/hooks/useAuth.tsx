import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

export const useAuth = () => {
    const { login, authUser } = useContext(AuthContext)                //use "use" inorder to use it as hook Function
    return { login, authUser }
}