import React from "react";
import "./ShipBanner.scss";

import CheftImg from "../../../../../assets/images/mid-shot-chef-holding-plate-with-pasta-making-ok-sign.png";
import CariImg from "../../../../../assets/images/sadj-iron-pot-with-various-salads.png";
import GrillIng from "../../../../../assets/images/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food.png";
export default function ShipBanner() {
    return (
        <div className="ship bg-color">
            <div className="layout grid grid-cols-1 md:grid-cols-2  gap-24">
                <div className="ship-left grid grid-cols-1 md:grid-cols-[60%_40%] gap-8">
                    <div>
                        <img src={CheftImg} className="w-full h-auto" alt="Chef" />
                    </div>

                    <div className=" ship-left-item-2 flex flex-col  gap-8 mt-10">
                        <div className="">
                            <img src={GrillIng} className="" alt="Grill" />
                        </div>

                        <div className="">
                            <img src={CariImg} className="" alt="Cari" />
                        </div>
                    </div>
                </div>

                <div className="ship-right flex flex-col  justify-center ml-20">
                    <h2>Fastest Food Delivery in City</h2>
                    <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                    <div className="ship-option flex flex-col  gap-5 mt-8">
                        <div className="ship-item flex items-center">
                            <div className="icon flex-center">
                                <i class="fa-regular fa-clock"></i>
                            </div>
                            <div>
                                <p>Delivery within 30 minutes</p>
                            </div>
                        </div>
                        <div className="ship-item flex items-center">
                            <div className="icon flex-center">
                                <i class="fa-regular fa-clock"></i>
                            </div>
                            <div>
                                <p>Best Offer & Prices</p>
                            </div>
                        </div>
                        <div className="ship-item flex items-center">
                            <div className="icon flex-center">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div>
                                <p>Online Services Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
