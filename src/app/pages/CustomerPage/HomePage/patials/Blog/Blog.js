import React from "react";
import Button from "../../../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import BurgerImg from "../../../../../assets/images/burger.png";
import CakeImg from "../../../../../assets/images/cake.png";
import chickenrImg from "../../../../../assets/images/chicken.png";
import PastaImg from "../../../../../assets/images/pasta.png";
import PizzaImg from "../../../../../assets/images/pizza.png";
import "./Blog.scss";
export default function Blog() {
    const navigate = useNavigate();
    const handleChangePage = () => {
        navigate("/a");
    };

    return (
        <div className="blog bg-color">
            <div className="layout">
                {" "}
                <div className="flex-space">
                    {" "}
                    <h2>Our Blog & Articles</h2>
                    <Button
                        children="Read All Articles"
                        hoverTextColor="var(--red-color)"
                        hoverBgColor="transparent"
                        onClick={handleChangePage}
                    ></Button>
                </div>
                <div className="blog-articles grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 ">
                    <div className="blog-left bg-red-50 flex flex-col">
                        <div className="blog-item flex-grow">
                            <div className="blog-img">
                                <img src={BurgerImg} />
                            </div>
                            <div className="blog-content">
                                <p>January 3, 2023</p>
                                <h4>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim
                                    quis nibholm varius amet gravida ut facilisis neque egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-right ">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                            {" "}
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={PastaImg} />
                                </div>
                                <div className="blog-content">
                                    <p>January 3, 2023</p>
                                    <h4>How to prepare the perfect french fries in an air fryer</h4>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={chickenrImg} />
                                </div>
                                <div className="blog-content">
                                    <p>January 3, 2023</p>
                                    <h4>How to prepare delicious chicken tenders</h4>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={CakeImg} />
                                </div>
                                <div className="blog-content">
                                    <p>January 3, 2023</p>
                                    <h4>7 delicious cheesecake recipes you can prepare</h4>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={PizzaImg} />
                                </div>
                                <div className="blog-content">
                                    <p>January 3, 2023</p>
                                    <h4>5 great pizza restaurants you should visit this city</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
