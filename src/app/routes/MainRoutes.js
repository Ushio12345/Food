import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/CustomerPage/HomePage/Home";
import AboutUs from "../pages/CustomerPage/About/AboutUs";
import Menu from "../pages/CustomerPage/Menu/Menu";
import Contact from "../pages/CustomerPage/ContactUs/Contact";
import FoodWithCategory from "../pages/CustomerPage/MenuWithCategory/FoodWithCategory";

export default function MainRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="menuWithCategory/:category" element={<FoodWithCategory />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
