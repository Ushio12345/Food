import React, { useEffect, useState } from "react";

// fetch name meals
import axiosInstance from "../../../../../hooks/axiosInstance";

export const fetchNameCategories = async () => {
    try {
        const response = await axiosInstance.get("/list.php?c=list");
        const meals = response.data.meals;
        // console.log(meals);
        return meals;
    } catch (err) {
        alert("Có lỗi trong quá trình lấy dữ liệu.");
        console.error(err);
    }
};
