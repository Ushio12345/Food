import React from "react";

import "./Banner.scss";
import Button from "../../../../../components/button/Button";
export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Best food for</h1>
                <h1> your taste</h1>
                <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
                <div className="flex items-center justify-center">
                    <div className="mr-5">
                        {" "}
                        <Button children="Book A Table" hoverBgColor="transparent" outline="false"></Button>
                    </div>
                    <div className="ml-5">
                        <Button
                            children="Explore Menu"
                            bgColor="transparent"
                            color="var(--red-color)"
                            outline={true}
                            outlineColor="var(--red-color)"
                            hoverTextColor="var(--white-color)"
                            hoverBgColor="var(--red-color)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
