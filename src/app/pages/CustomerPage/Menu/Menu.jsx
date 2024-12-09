import React, { useState } from "react";
import "./Menu.scss";
import Category from "./patials/Category/Category";
import Food from "./patials/Menu/Food";
import Ship1Img from "../../../assets/images/banner-ship-img/ship1.png";
import Ship2Img from "../../../assets/images/banner-ship-img/ship2.png";
import Ship3Img from "../../../assets/images/banner-ship-img/ship3.png";
import Ship4Img from "../../../assets/images/banner-ship-img/ship4.png";
import Ship5Img from "../../../assets/images/banner-ship-img/ship5.png";
import Ship6Img from "../../../assets/images/banner-ship-img/ship6.png";
import Ship7Img from "../../../assets/images/banner-ship-img/ship7.png";
import Ship8Img from "../../../assets/images/banner-ship-img/ship8.png";
import Ship9Img from "../../../assets/images/banner-ship-img/ship9.png";
import Search from "./patials/Search/Search";
export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchCriteria, setSearchCriteria] = useState({ foodName: "", country: "" });
    const onSearch = (selectedCountry, foodName) => {
        setSearchCriteria({ foodName, country: selectedCountry });

        console.log("Search Criteria Updated:", { foodName, country: selectedCountry });
    };

    return (
        <div className="menu">
            <div className="text-center md:w-2/5 w-[90%] m-auto">
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>

            <div className="w-full md:w-1/2 m-auto">
                <Search onSearch={onSearch} />
            </div>

            <div className="list-category mt-20">
                <Category setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            </div>
            <div className="our-menu">
                <Food selectedCategory={selectedCategory} searchCriteria={searchCriteria} />
            </div>

            {/* order banner */}
            <div className="order bg-color">
                <div className="layout grid grid-cols-1 md:grid-cols-6 gap-20 items-center">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="mb-5">You can order through apps</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                    </div>
                    <div className="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="grid grid-cols-3 gap-6  col-span-4 px-20">
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship1Img} alt="" className="w-[60%]" />
                            </div>
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship2Img} alt="" className="w-[60%]" />
                            </div>
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship3Img} alt="" className="w-[60%]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6  col-span-4">
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship4Img} alt="" className="w-[60%]" />
                            </div>
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship5Img} alt="" className="w-[60%]" />
                            </div>
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship6Img} alt="" className="w-[60%]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6  col-span-4 px-20">
                            {" "}
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship7Img} alt="" className="w-[60%]" />
                            </div>
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship8Img} alt="" className="w-[60%]" />
                            </div>
                            <div className="bg-white flex-center rounded-lg p-8">
                                <img src={Ship9Img} alt="" className="w-[60%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
