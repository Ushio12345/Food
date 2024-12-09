import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import "./MainLayout.scss";
export default function MainLayout() {
    return (
        <div className="main-layout">
            <Header />

            <div className="" style={{ paddingTop: 120 }}>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
