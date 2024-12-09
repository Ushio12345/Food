// axiosInstance.js
import axios from "axios";

// Tạo một instance của Axios
const axiosInstance = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1",
    headers: {
        "Content-Type": "application/json",
    },
});

// Thêm request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        console.log("Request Interceptor: Đang gửi yêu cầu", config);
        // Có thể thêm token hoặc các thông tin khác vào header nếu cần
        return config;
    },
    (error) => {
        console.error("Lỗi trong request:", error);
        return Promise.reject(error);
    }
);

// Thêm response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        console.log("Response Interceptor: Đã nhận phản hồi", response);
        return response;
    },
    (error) => {
        console.error("Lỗi trong response:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
