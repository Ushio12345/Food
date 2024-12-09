import React from "react";
import Contact_Introduction from "../HomePage/patials/Contact_Introduction/Contact_Introduction";
import "./AboutUs.scss";
import RestaurantImg from "../../../assets/images/restaurant.jpg";
import { About1, About2, About3 } from "../../../components/icon/Icon";
import AboutImg1 from "../../../assets/images/aboutImg1.png";
import CustomerSay from "../HomePage/patials/CustomerSay/CustomerSay";
export default function AboutUs() {
    return (
        <div className="about-us">
            <Contact_Introduction />
            <div className="res-img bg-color">
                <img src={RestaurantImg} className="h-[400px]" alt="Img Restaurant"></img>
                <h2 className="absolute w-full sm:px-10 top-1/2 text-white text-center left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Feel the authentic & original taste from us
                </h2>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 py-12 layout ">
                <div className="about-res-item flex items-center gap-10">
                    <div className=" ">
                        <About3 className="" />
                    </div>
                    <div className="about-res-content flex flex-col gap-3">
                        <h5 className="font-bold">Multi Cuisine</h5>
                        <p>In the new era of technology we look in the future with certainty life.</p>
                    </div>
                </div>
                <div className="about-res-item flex items-center gap-10">
                    <div className="">
                        <About1 />
                    </div>
                    <div className="about-res-content flex flex-col gap-3">
                        <h5 className="font-bold">Easy To Order</h5>
                        <p>In the new era of technology we look in the future with certainty life.</p>
                    </div>
                </div>
                <div className="about-res-item flex items-center gap-10">
                    <div className="">
                        <About2 />
                    </div>
                    <div className="about-res-content flex flex-col gap-3">
                        <h5 className="font-bold">Fast Delivery</h5>
                        <p>In the new era of technology we look in the future with certainty life.</p>
                    </div>
                </div>
            </div>

            <div className="bg-color">
                <div className="layout">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                        <div className="left flex flex-col gap-10 h-full">
                            <div>
                                <h2 className="mb-8">A little information for our valuable guest</h2>
                                <p>
                                    At place, we believe that dining is not just about food, but also about the overall experience. Our staff,
                                    renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="num text-center bg-white w-full rounded-md flex flex-col justify-between p-12">
                                    <h5 className="font-bold" style={{ fontSize: 32 }}>
                                        3
                                    </h5>
                                    <p>Locations</p>
                                </div>
                                <div className="num text-center bg-white w-full rounded-md flex flex-col justify-between p-12">
                                    <h5 className="font-bold" style={{ fontSize: 32 }}>
                                        1995
                                    </h5>
                                    <p>Founded</p>
                                </div>
                                <div className="num text-center bg-white w-full rounded-md flex flex-col justify-between p-12">
                                    <h5 className="font-bold" style={{ fontSize: 32 }}>
                                        65 <span className="">+</span>
                                    </h5>
                                    <p>Staff Members</p>
                                </div>
                                <div className="num text-center bg-white w-full rounded-md flex flex-col justify-between p-12">
                                    <h5 className="font-bold" style={{ fontSize: 32 }}>
                                        100%
                                    </h5>
                                    <p>Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="right rounded-lg"
                            style={{
                                backgroundImage: `url(${AboutImg1})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            <CustomerSay />
        </div>
    );
}
