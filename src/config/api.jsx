import axios from 'axios'
 
export const apiLogin = axios.create({
    
    timeout: 1000,
    headers: {
        Authorization: 'Basic bG9hZDp1c2Vy',
        Accept: 'application/json',
        'Api-Key': '123456789ABCD',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
const instance = axios.create({
    crossdomain: true,
   
    timeout: 9000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        // 'Api-Token': '0456B92CAE264ADA16D9DA3D2C5D64FA'
    }
})
instance.interceptors.request.use(
    config => {
        if (localStorage.access_token) {
            config.headers.Authorization = 'Bearer ' + localStorage.access_token
        }
        return config
    },
    err => {
         return Promise.reject(err)
    }
)
export default instance