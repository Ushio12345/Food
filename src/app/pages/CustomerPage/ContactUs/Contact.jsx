import React from "react";
import "./Contact.scss";
export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-banner bg-color text-center  h-[500px]  ">
                <div className="w-full md:w-1/3 m-auto  content ">
                    {" "}
                    <h1 className="mb-4">Conatct Us</h1>
                    <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
                <div className=" form-contact bg-white absolute md:w-[40%] w-4/5">
                    <div className="grid grid-cols-2 gap-8">
                        {" "}
                        <div className=" flex flex-col items-start">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded-full w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className=" flex flex-col items-start">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded-full w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className=" mt-8 flex flex-col items-start">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className="shadow appearance-none border rounded-full w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Write a subject"
                        />
                    </div>
                    <div className="flex flex-col items-start mt-8 ">
                        <label htmlFor="message" className="block  font-medium text-gray-900 dark:text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="block p-2.5 w-full text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your massage..."
                            defaultValue={""}
                        />
                    </div>
                </div>
            </div>
            <div className=" w-full md:w-1/3 layout grid grid-cols-2 gap-8 md:grid-cols-3 infomation mt-[100px]">
                <div>
                    <h3 className="">Call Us:</h3>
                    <p className="text-red-800 font-bold text-xl sm:text-2xl md:text-3xl">+1-234-567-8900</p>
                </div>
                <div>
                    <h3>Hours:</h3>
                    <p className="text-xl sm:text-2xl md:text-3xl">Mon-Fri: 11am - 8pm</p>
                    <p className="text-xl sm:text-2xl md:text-3xl">Sat, Sun: 9am - 10pm</p>
                </div>
                <div>
                    <h3>Our Location:</h3>
                    <p className="text-xl sm:text-2xl md:text-3xl">123 Bridge Street Nowhere Land, LA 12345 United States</p>
                </div>
            </div>
        </div>
    );
}
