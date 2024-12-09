import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

export default function CategoryItem({ category }) {
    return (
        <div className="cateItem text-center rounded-md shadow-md p-4">
            <div className="cate-icon">
                {category.strCategoryThumb ? (
                    <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-auto" />
                ) : (
                    <div className="placeholder">No Image Available</div>
                )}
            </div>
            <h3 className="cateName text-3xl mt-4">{category.strCategory}</h3>
            <p className="des my-4">
                {category.strCategoryDescription && category.strCategoryDescription.length > 100
                    ? `${category.strCategoryDescription.substring(0, 100)}...`
                    : category.strCategoryDescription || "No Description Available"}
            </p>
            <Link to={`/menuWithCategory/${category.strCategory}`} className="text-2xl hover:text-black">
                Explore Menu
            </Link>
        </div>
    );
}
