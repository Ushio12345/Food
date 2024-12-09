import React from "react";
import "./Services.scss";
import BirthdayImg from "../../../../../assets/images/birthday.png";
import CateringImg from "../../../../../assets/images/catering.png";
import Wedding from "../../../../../assets/images/wedding.png";
import EventImg from "../../../../../assets/images/events.png";
export default function Services() {
    return (
        <div className="services layout">
            <h2 className="md:w-1/2  w-full mb-20">We also offer unique services for your events</h2>
            <div className="services-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="service-item">
                    <div className="service-img">
                        <img src={CateringImg}></img>
                    </div>
                    <div className="service-content">
                        <h3>Caterings</h3>
                        <p>In the new era of technology we look in the future with certainty for life.</p>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-img">
                        <img src={BirthdayImg}></img>
                    </div>
                    <div className="service-content">
                        <h3>Birthdays</h3>
                        <p>In the new era of technology we look in the future with certainty for life.</p>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-img">
                        <img src={Wedding}></img>
                    </div>
                    <div className="service-content">
                        <h3>Weddings</h3>
                        <p>In the new era of technology we look in the future with certainty for life.</p>
                    </div>
                </div>
                <div className="service-item">
                    <div className="service-img">
                        <img src={EventImg}></img>
                    </div>
                    <div className="service-content">
                        <h3>Events</h3>
                        <p>In the new era of technology we look in the future with certainty for life.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
