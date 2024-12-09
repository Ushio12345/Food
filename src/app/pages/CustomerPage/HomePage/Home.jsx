import React from "react";
import Banner from "./patials/Banner/Banner";
import Category from "./patials/Category/Category";
import "./Home.scss";
import Contact_Introduction from "./patials/Contact_Introduction/Contact_Introduction";
import Services from "./patials/Services/Services";
import ShipBanner from "./patials/ShipBanner/ShipBanner";
import CustomerSay from "./patials/CustomerSay/CustomerSay";
import Blog from "./patials/Blog/Blog";

export default function Home() {
    return (
        <div className="homePage">
            <Banner />

            <Category />
            <Contact_Introduction />
            <Services />
            <ShipBanner />
            <CustomerSay />
            <Blog />
        </div>
    );
}
