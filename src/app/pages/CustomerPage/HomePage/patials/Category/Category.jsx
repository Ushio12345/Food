import React from "react";
import "./Category.scss";
import CategoryItem from "./patials/CategoryItem/CategoryItem";
import CategoryList from "./patials/CategoryItem/CategoryList";
export default function Category() {
    return (
        <div className="homeItem cateList layout">
            <h2 className="text-center">Browse Our Menu</h2>
            <div className="mt-8 categoriesList">
                <CategoryList />
            </div>
        </div>
    );
}
