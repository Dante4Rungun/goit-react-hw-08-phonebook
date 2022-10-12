import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({element: Element, redirectTo = "/"}) => {
    const { isLoggedIn, isRefreshing } = useAuth()
    const shouldRedirect = !isLoggedIn && !isRefreshing
    return shouldRedirect ? <Navigate to={redirectTo}/> : <Element/>
}