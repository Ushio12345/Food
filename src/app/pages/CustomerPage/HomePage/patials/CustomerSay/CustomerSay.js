import React, { useState } from "react";
import "./CustomerSay.scss";

export default function CustomerSay() {
    const reviews = [
        {
            title: "“The best restaurant”",
            content:
                "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
            user: { name: "Sophire Robson", location: "Los Angeles, CA", avatar: "https://i.pravatar.cc/300" },
        },
        {
            title: "“Simply delicious”",
            content:
                "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
            user: { name: "Sophire Robson", location: "Los Angeles, CA", avatar: "https://i.pravatar.cc/300" },
        },
        {
            title: "“One of a kind restaurant”",
            content:
                "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
            user: { name: "Sophire Robson", location: "Los Angeles, CA", avatar: "https://i.pravatar.cc/300" },
        },
    ];

    return (
        <div className="customer layout">
            <h2 className="text-center mb-12">What Our Customers Say</h2>
            <div className="cus-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {reviews.map((review, index) => (
                    <ReviewItem key={index} review={review} />
                ))}
            </div>
        </div>
    );
}

function ReviewItem({ review }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="cus-item">
            <h3>{review.title}</h3>
            <p>
                {isExpanded || review.content.length <= maxLength ? review.content : `${review.content.slice(0, maxLength)}... `}
                {review.content.length > maxLength && (
                    <span className="read-more" onClick={toggleExpand} style={{ color: "var(--red-color)", cursor: "pointer" }}>
                        {isExpanded ? "Read less" : "Read more"}
                    </span>
                )}
            </p>
            <div className="user">
                <div className="userAvatar">
                    <img src={review.user.avatar} alt={`${review.user.name}'s avatar`} />
                </div>
                <div className="userInfo">
                    <h4>{review.user.name}</h4>
                    <p>{review.user.location}</p>
                </div>
            </div>
        </div>
    );
}
