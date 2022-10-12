import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom"

export const RestrictedRoute = ({element: Element, redirectTo = "/"}) => {
    const { isLoggedIn } = useAuth()

    return isLoggedIn ? <Navigate to={redirectTo}/> : <Element/>
}