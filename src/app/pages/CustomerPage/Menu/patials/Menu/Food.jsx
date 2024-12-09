import React, { useEffect, useState, useMemo } from "react";
import { fetchFoodByCategory } from "../../models/Food/Food";
import { NavLink } from "react-router-dom";
import Pagination from "../../../../../components/pagination/Pagination";
import { searchFoodByCountry, searchFoodByName } from "../../models/Search/Search";

const PageSize = 10;

export default function Food({ selectedCategory, searchCriteria }) {
    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return foodItems.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, foodItems]);

    useEffect(() => {
        const getFoodItems = async () => {
            setLoading(true);
            setError(null);
            try {
                let items = [];

                // Nếu có quốc gia được chọn
                if (searchCriteria.country) {
                    const data = await searchFoodByCountry(searchCriteria.country);
                    items = data.meals || [];
                } else {
                    // Lấy tất cả món ăn từ tất cả quốc gia
                    const countries = [
                        "American",
                        "British",
                        "Canadian",
                        "Chinese",
                        "Croatian",
                        "Dutch",
                        "Egyptian",
                        "Filipino",
                        "French",
                        "Greek",
                        "Indian",
                        "Irish",
                        "Italian",
                        "Jamaican",
                        "Japanese",
                        "Kenyan",
                        "Malaysian",
                        "Mexican",
                        "Moroccan",
                        "Polish",
                        "Portuguese",
                        "Russian",
                        "Spanish",
                        "Thai",
                        "Tunisian",
                        "Turkish",
                        "Ukrainian",
                        "Unknown",
                        "Vietnamese",
                    ];
                    const countryPromises = countries.map((country) => searchFoodByCountry(country));
                    const countryResponses = await Promise.all(countryPromises);
                    countryResponses.forEach((response) => {
                        items = [...items, ...(response.meals || [])];
                    });
                }

                // Lọc theo Danh Mục
                if (selectedCategory && selectedCategory !== "All") {
                    const categoryData = await fetchFoodByCategory(selectedCategory);
                    items = items.filter((item) => categoryData.meals.some((categoryItem) => categoryItem.idMeal === item.idMeal));
                }

                // Lọc theo Tên món ăn nếu có
                if (searchCriteria.foodName) {
                    items = items.filter((item) => item.strMeal.toLowerCase().includes(searchCriteria.foodName.toLowerCase()));
                }

                setFoodItems(items);
            } catch (err) {
                console.error("Error fetching food items:", err);
                setError("Cannot load food data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        getFoodItems();
    }, [selectedCategory, searchCriteria]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    if (foodItems.length === 0)
        return (
            <div className="text-center sold-out">
                {" "}
                <i class="fa-brands fa-waze"></i> No food items available.
            </div>
        );

    return (
        <div className="food">
            <div className="layout grid flex-col items-center justify-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {currentTableData.map((food) => (
                    <div
                        key={food.idMeal}
                        className="card-food h-[350px] flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5"
                    >
                        <img className="rounded-t-lg" src={food.strMealThumb || "/default-image.jpg"} alt={food.strMeal} />
                        <h5 className="my-3 text-2xl font-bold text-red-800 dark:text-white">{food.strMeal}</h5>
                        {/* <NavLink
                            to={`detail/${food.idMeal}`}
                            className="inline-flex items-center  text-xl flex-center w-[50%] h-[30px] bg-red-500 text-white font-bold rounded-lg hover:bg-red-800 hover:text-white transition duration-300 focus:ring-4"
                        >
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </NavLink> */}
                    </div>
                ))}
            </div>
            <div className="layout-not-padding flex my-5 justify-end">
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={foodItems.length}
                    pageSize={PageSize}
                    onPageChange={(page) => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                />
            </div>
        </div>
    );
}
