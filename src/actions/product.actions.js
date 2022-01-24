import axios from 'axios';

export const addProduct =form =>{
    const token = window.localStorage.getItem('token')
    return async dispatch => {
        const res = await axios.post('http://localhost:2000/api/product/create', form, {
            headers: {
                'Authorization': token ? `Bearer ${token}` : ''
            }
        })
    }
}