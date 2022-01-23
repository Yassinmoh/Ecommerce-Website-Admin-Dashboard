import axios from "axios"
import axiosInstance from "../helpers/axios"
import {categoryConstants} from './constants'
export const getAllCategory =()=>{
    return async dispatch => {

        dispatch({type: categoryConstants.GET_ALL_CATEGORIES_REQUEST})

        const res =await axios.get('http://localhost:2000/api/category/getcategory')
        console.log("res",res)
        if(res.status === 200) {
            // const {categoryList} = res.data
            // console.log("categoryList",categoryList)
            dispatch({ 
                type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: {categories:res.data}
            })
        }else{
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: {error: res.data.error}
            })
        }
    }
}


export const addCategory =(form) => {
    const token =window.localStorage.getItem('token')
    
    return async dispatch => {
        dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST})
        const res = await axios.post('http://localhost:2000/api/category/create',form,{headers:{
            'Authorization':token ? `Bearer ${token}` :''
        }})
        if(res.status === 200){
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                payload:res.data.category
            })
        }else{
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                payload:res.data.error
            })
        }
        console.log("res", res)
    }
}