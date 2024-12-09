import React from "react";
import axiosInstance from "../../../../../hooks/axiosInstance";

// gọi api các quốc gia
export const fetchCountry = async () => {
    try {
        const res = await axiosInstance.get("/list.php?a=list");

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

// seafch food
export const searchFoodByName = async (foodName) => {
    try {
        const res = await axiosInstance.get(`search.php?s=${foodName}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching food by name:", error);
        throw new Error("Unable to fetch food data. Please try again later.");
    }
};
export const searchFoodByCountry = async (country) => {
    try {
        const res = await axiosInstance.get(`filter.php?a=${country}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching food by name:", error);
        throw new Error("Unable to fetch food data. Please try again later.");
    }
};
