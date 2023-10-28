import { userRegisterFailed, userRegisterStart, userRegisterSuccess } from "./userRedux"
import axios from "axios"
import { baseURL } from "./requestMethod"


export const registUserFromApiCalls = async (dispatch, user) => {
    dispatch(userRegisterStart())
    try{
        const createUser = await axios.post(`${baseURL}user/c`, user)
        dispatch(userRegisterSuccess(createUser.data))
    }catch(err) {
        dispatch(userRegisterFailed(err))
    }
}