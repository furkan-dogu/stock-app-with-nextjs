import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { useRouter } from "next/navigation"
import { fetchFail, fetchStart, loginSuccess } from "@/redux/features/AuthSlice"
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify"

const useAuthCalls = () => {
    const dispatch = useDispatch()
    const { axiosPublic } = useAxios()
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

    return { login }
}

export default useAuthCalls