import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { useRouter } from "next/navigation"
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "@/redux/features/AuthSlice"
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify"

const useAuthCalls = () => {
    const dispatch = useDispatch()
    const { axiosPublic, axiosWithToken } = useAxios()
    const router = useRouter()

    const login = async (info) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosPublic.post("/auth/login", info)
            dispatch(loginSuccess(data))
            toastSuccessNotify("The login process is successful.")
            router.push("/stock")
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("The login process failed.")
        }
    }

    const register = async (info) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosPublic.post("/users", info)
            dispatch(registerSuccess(data))
            toastSuccessNotify("The register process is successful.")
            router.push("/stock")
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify(`The register process failed. ${error.response.data.message}`)
        }
    }

    const logout = async () => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.get("/auth/logout")
            dispatch(logoutSuccess())
            toastSuccessNotify("The logout process is successful.")
            router.push("/")
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("The logout process failed.")
        }
    }

    return { login, register, logout }
}

export default useAuthCalls