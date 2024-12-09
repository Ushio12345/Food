import axiosInstance from "../../../../../../hooks/axiosInstance";

export const fetchCategories = async () => {
    try {
        const res = await axiosInstance.get("/categories.php");
        return res.data.categories;
    } catch (err) {
        alert("Có lỗi khi lấy dữ liệu!");
    }
};
