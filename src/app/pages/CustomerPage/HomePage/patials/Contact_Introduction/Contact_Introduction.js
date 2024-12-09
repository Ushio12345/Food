import React from "react";
import ContactImg from "../../../../../assets/images/ContactImg.png";
import "./Contact_Introduction.scss";
import Button from "../../../../../components/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
export default function Contact_Introduction() {
    const naviagte = useNavigate();
    const location = useLocation();
    const handleChangePage = () => {
        naviagte("about-us");
    };
    return (
        <div className="contact_intro bg-color bg-color">
            <div className="contact_intro_item layout grid grid-cols-1 md:grid-cols-2 ">
                <div className="contact_intro_item_left">
                    <div className="contact_intro_item_left_img w-full  md:w-4/5 m-auto ">
                        <img className="contact_img" src={ContactImg}></img>{" "}
                        <div className="contact_content  p-12">
                            <h4 className="mb-6">Come and visit us</h4>
                            <div className="contact_content_item flex">
                                <div className="contact_content_item flex_icon">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact_content_item flex_text">
                                    <p>(414) 857 - 0107</p>
                                </div>
                            </div>
                            <div className="contact_content_item flex">
                                <div className="contact_content_item flex_icon">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact_content_item flex_text">
                                    <p>happytummy@restaurant.com</p>
                                </div>
                            </div>
                            <div className="contact_content_item flex">
                                <div className="contact_content_item flex_icon">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact_content_item flex_text">
                                    <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_intro_item_right  ml-20 ">
                    <h2>We provide healthy food for your family.</h2>
                    <p className="my-5" style={{ fontWeight: 500, color: "var(--text-color)" }}>
                        Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant
                        ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                    </p>

                    <p className="" style={{ color: "var(--text-color)" }}>
                        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their
                        warmth and dedication, strives to make every visit an unforgettable event.
                    </p>

                    {location.pathname != "/about-us" && (
                        <div className="mt-10">
                            <Button
                                children="More About Us"
                                color="var(--black2-color)"
                                bgColor="transparent"
                                outlineColor="var(--black2-color)"
                                hoverBgColor="var(--black2-color)"
                                hoverTextColor="var(--white-color)"
                                onClick={handleChangePage}
                            ></Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
