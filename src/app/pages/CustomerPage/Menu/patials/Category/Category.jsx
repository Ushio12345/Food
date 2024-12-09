import React, { useEffect, useState } from "react";
import { fetchNameCategories } from "../../models/Categories/ListCategory";

export default function Category({ setSelectedCategory, selectedCategory }) {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const getCategoryList = async () => {
            const data = await fetchNameCategories();
            setCategories(data);
        };
        getCategoryList();
    }, []);

    // Tính toán các nhóm items (mỗi nhóm 5 item)
    const pageCount = Math.ceil(categories.length / itemsPerPage);
    const categoriesToDisplay = categories.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Xử lý chuyển trang
    const handleNextPage = () => {
        if (currentPage < pageCount - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="cate">
            <div className=" flex-space m-auto  w-[80%]">
                <button
                    onClick={handlePrevPage}
                    className="text-white bg-red-700 hover:bg-white hover:text-red-700 hover:outline-2 transition duration-300 outline icon rounded-full"
                    disabled={currentPage === 0}
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className=" cate-item bg-black md:h-[30px]  md:w-[150px] w-[100px] flex-center rounded-full text-white font-bold"
                    >
                        All
                    </button>
                    {categoriesToDisplay.map((cate) => (
                        <button
                            key={cate.strCategory}
                            onClick={() => setSelectedCategory(cate.strCategory)}
                            className={`cate-item bg-transparent h-[30px]  md:w-[150px] w-[100px] flex-center rounded-full text-black font-bold outline-2 outline outline-gray-200 hover:bg-red-800 hover:text-white transition duration-300 
            ${selectedCategory === cate.strCategory ? "active" : ""}`}
                        >
                            {cate.strCategory}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNextPage}
                    className="text-white bg-red-700 hover:bg-white hover:text-red-700 hover:outline-2 transition duration-300 outline icon rounded-full"
                    disabled={currentPage === pageCount - 1}
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}
