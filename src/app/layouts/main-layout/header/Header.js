import React from "react";
import { IconEmail, IconFacebook, IconGit, IconInstagram, IconPhone, IconTwiter } from "../../../components/icon/Icon";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import Navbar from "./Navbar";
export default function Header() {
    return (
        <div className="header">
            <div className="header-top   ">
                <div className="layout-not-padding flex items-center justify-between m-auto py-5">
                    {" "}
                    <div className="header-top-left flex flex-wrap  items-center">
                        <div className="header-top-left-item ">
                            <p className="flex items-center mr-16">
                                {" "}
                                <IconPhone /> (+84) 773866692
                            </p>
                        </div>
                        <div className="header-top-left-item">
                            <p className="flex items-center ">
                                <IconEmail /> anhqueht1100@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="header-top-right flex-wrap flex items-center justify-end ">
                        <Link to="">
                            <IconTwiter />
                        </Link>
                        <Link to="">
                            <IconFacebook />
                        </Link>
                        <Link to="">
                            <IconInstagram />
                        </Link>
                        <Link to="">
                            <IconGit />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="Navbar">
                <div className="">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}
