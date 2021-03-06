import { authConstants, userConstants } from './constants'
import axios from '../helpers/axios'




export const signup = (user) => {

    return async (dispatch) => {
        console.log("user", user)
        dispatch({ type: userConstants.USER_REGISTER_REQUEST })
        const res = await axios.post(`http://localhost:2000/api/admin/signup`, {
            ...user
        })


        if (res.status === 200) {
            const { message } = res.data

            dispatch({
                type:userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            })
        }else{
            if (res.status === 400){
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: {error:res.data.error}
                })
            }
        }
    }
}