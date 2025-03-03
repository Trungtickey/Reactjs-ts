// chứa cấu hình axios 

import axios from "axios";
// đăng nhập xong thì trả về accessToken -> lưu vào bộ nhớ trình duyệt : local, session, cookie 

export const instance = axios.create({
    baseURL : import.meta.env.VITE_API_HOST
})
// instance.get('student') // axios.get("http://localhost999/students")

export const auth = axios.create({
    baseURL : import.meta.env.VITE_API_HOST,
    headers:{
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
})