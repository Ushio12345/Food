import React, { useEffect, useState, useRef } from "react";
import { fetchCountry } from "../../models/Search/Search";
import Button from "../../../../../components/button/Button";
export default function Search({ onSearch, selectedCategory }) {
    const [country, setCountry] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [foodName, setFoodName] = useState("");
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    const handleCountrySelect = (countryName) => {
        setSelectedCountry(countryName); // Chọn quốc gia
        setIsDropdownOpen(false);
    };

    const handleClearCountry = () => {
        setSelectedCountry(""); // Xóa chọn quốc gia
        setIsDropdownOpen(false);
    };

    const handleFoodNameChange = (e) => setFoodName(e.target.value);

    const handleSearch = (e) => {
        e.preventDefault();
        // Truyền foodName và selectedCountry vào onSearch, nếu selectedCountry rỗng thì không lọc theo quốc gia
        onSearch(selectedCountry || null, foodName);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        const getCountry = async () => {
            try {
                const response = await fetchCountry();
                const countries = response.meals || [];
                setCountry(countries);
            } catch (error) {
                console.error("Error when fetching countries:", error);
            }
        };
        getCountry();
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        // Reset foodName khi category thay đổi
        setFoodName("");
    }, [selectedCategory]); // Dependency on selectedCategory

    return (
        <div className="layout-not-padding pt-6">
            <form onSubmit={handleSearch}>
                <div className="flex">
                    <div
                        ref={dropdownRef}
                        onClick={toggleDropdown}
                        className="z-2 flex-center bg-white divide-y divide-gray-100 rounded-lg shadow w-44 relative"
                        role="button"
                        aria-expanded={isDropdownOpen}
                    >
                        {selectedCountry || "All"} {/* Nếu không chọn quốc gia, hiển thị "Select Country" */}
                        {isDropdownOpen && (
                            <div
                                className="dropdown-menu mt-2 absolute top-[100%] bg-white border border-gray-200 rounded-lg shadow-lg"
                                style={{ maxHeight: "200px", overflowY: "auto" }}
                            >
                                <ul className="py-2">
                                    {/* Nút xóa để bỏ chọn quốc gia */}
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleClearCountry}>
                                        All
                                    </li>
                                    {country.length > 0 ? (
                                        country.map((item) => (
                                            <li
                                                key={item.strArea || item.strCountry}
                                                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                onClick={() => handleCountrySelect(item.strArea || item.strCountry)}
                                            >
                                                {item.strArea || item.strCountry}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="px-4 py-2 text-gray-500">No countries available</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    <input
                        type="search"
                        value={foodName}
                        onChange={handleFoodNameChange}
                        className="p-2.5 w-full text-gray-900 bg-gray-50 rounded-e-lg border-gray-300"
                        placeholder="Search food by name..."
                    />
                    <Button
                        type="submit"
                        borderRadius="3px"
                        children="Search"
                        hoverTextColor="var(--red-color)"
                        hoverBgColor="var(--white-color)"
                    ></Button>
                </div>
            </form>
        </div>
    );
}
