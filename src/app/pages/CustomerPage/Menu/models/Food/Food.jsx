// export const fetchAllFood = async () => {
//     try {
//         const res = await axiosInstance.get("/list.php?i=list");
//         const meals = res.data.meals;
//         return meals ? { meals } : null;
//     } catch (err) {
//         console.error("Lỗi khi lấy dữ liệu tất cả món ăn:", err);
//         return null;
//     }
// };

import axiosInstance from "../../../../../hooks/axiosInstance";

export const fetchFoodByCategory = async (category, page) => {
    try {
        const res = await axiosInstance.get(`/filter.php?c=${category}&page=${page}`);

        if (res.data && res.data.meals) {
            return res.data;
        }
        return null;
    } catch (err) {
        console.error("Lỗi khi lấy món ăn theo danh mục:", err);
        return null;
    }
};
