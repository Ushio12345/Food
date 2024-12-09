import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchCategories } from "../../services/CategoriesServices";
import CategoryItem from "./CategoryItem";
import "./Category.scss";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1230 },
        items: 5,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1230, min: 750 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 750, min: 579 },
        items: 2,
        slidesToSlide: 1,
    },
    smallMobile: {
        breakpoint: { max: 579, min: 0 },
        items: 1,
        slidesToSlide: 2,
    },
};

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const cateItem = await fetchCategories();
                console.log("a", cateItem);

                setCategories(cateItem);
            } catch (error) {
                alert("Không thể lấy dữ liệu cate");
            }
        };
        getCategories();
    }, []);

    return (
        <div className="categories-container">
            <Carousel
                className="categoriesList"
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                arrows={false}
                centerMode={false}
                additionalTransfrom={0}
                renderArrowsWhenDisabled={true}
            >
                {categories.map((cate) => (
                    <CategoryItem key={cate.idCategory} category={cate} />
                ))}
            </Carousel>
        </div>
    );
}
