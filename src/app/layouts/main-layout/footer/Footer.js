import React from "react";
import imgLogo from "../../../assets/images/japanese-food.png";
import "../MainLayout.scss";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/footer1.png";
import img2 from "../../../assets/images/footer2.png";
import img3 from "../../../assets/images/footer3.png";
import img4 from "../../../assets/images/footer4.png";
export default function Footer() {
    return (
        <div className="footer ">
            <div className="layout  ">
                {" "}
                <div className="footer-lay grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="footer-item ">
                        <Link to="/" className="namecom flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={imgLogo} className="" alt="Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bistro Bliss</span>
                        </Link>
                        <p className="my-8">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>

                        <div className="flex ">
                            <div className="icon-item icon flex-center">
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div className="icon-item icon flex-center">
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className="icon-item icon flex-center">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div className="icon-item icon flex-center">
                                <i class="fa-brands fa-github"></i>
                            </div>
                        </div>
                    </div>
                    <div className="footer-item grid grid-cols-2">
                        <div className="link-item">
                            <h4>Pages</h4>
                            <ul className="">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="">About</Link>
                                </li>
                                <li>
                                    <Link to="">Menu</Link>
                                </li>
                                <li>
                                    <Link to="">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="">Blog</Link>
                                </li>
                                <li>
                                    <Link to="">Contact</Link>
                                </li>
                                <li>
                                    <Link to="">Delivery</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="link-item">
                            <h4>Utility Pages</h4>
                            <ul>
                                <li>
                                    <Link to="">Start Here</Link>
                                </li>
                                <li>
                                    <Link to="">Styleguide</Link>
                                </li>
                                <li>
                                    <Link to="">Password Protected</Link>
                                </li>
                                <li>
                                    <Link to="">404 Not Found</Link>
                                </li>
                                <li>
                                    <Link to="">Licenses</Link>
                                </li>
                                <li>
                                    <Link to="">Changelog</Link>
                                </li>
                                <li>
                                    <Link to="">View More</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h4>Follow Us On Instagram</h4>
                        <div className="img-footer grid grid-cols-2 gap-6 w-3/4">
                            <img src={img2}></img>
                            <img src={img3}></img>
                            <img src={img4}></img>
                            <img src={img1}></img>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <p className="text-center">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}
