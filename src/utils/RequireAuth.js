import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AppContext } from "../context/AppContext"

export const RequireAuth = ({children}) => {
    const {appState: {isLogin}} = useContext(AppContext)
    const location = useLocation()

    return isLogin ? children : <Navigate to='/login' state={{from : location}}/>
}