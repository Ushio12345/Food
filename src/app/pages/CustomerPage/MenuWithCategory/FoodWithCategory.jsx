import React, { useEffect, useMemo, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { fetchFoodByCategory } from "../Menu/models/Food/Food";
import Pagination from "../../../components/pagination/Pagination";

const PageSize = 10;

export default function FoodWithCategory() {
    const { category } = useParams();
    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return foodItems.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, foodItems]);

    useEffect(() => {
        const fetchFoodWithCate = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchFoodByCategory(category);
                setFoodItems(data.meals || []);
            } catch (err) {
                console.log("Error fetching data for category:", err);
                setError("Error fetching data. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchFoodWithCate();
    }, [category]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    if (foodItems.length === 0) return <div>No food items found for this category.</div>;

    return (
        <div>
            <h2 className="text-center mt-20">{category}</h2>
            <div className="food">
                <div className="layout grid flex-col items-center justify-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {currentTableData.map((food) => (
                        <div
                            key={food.idMeal}
                            className="card-food h-[350px] flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5"
                        >
                            <img className="rounded-t-lg" src={food.strMealThumb || "/default-image.jpg"} alt={food.strMeal} />
                            <h5 className="my-3 text-2xl font-bold text-red-800 dark:text-white">{food.strMeal}</h5>
                            <NavLink
                                to="#"
                                className="inline-flex items-center text-xl flex-center w-[50%] h-[30px] bg-red-500 text-white font-bold rounded-lg hover:bg-red-800 hover:text-white transition duration-300 focus:ring-4"
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
                            </NavLink>
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
        </div>
    );
}
