import { useState } from "react";
import { IoIosSearch } from "react-icons/io";


function SearchBar({ onSearch }) {
    const [city, setCity] = useState('')

    const handleSebmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city)
            setCity('');
        }
    }
    return (
        <div className="SearchBar">
            <div className="search" onSubmit={handleSebmit}>
                <input
                    type="text"
                    value={city}
                    className="search-input"
                    placeholder="Search"
                    onChange={(e) => setCity(e.target.value)}
                />

                <IoIosSearch onClick={handleSebmit} size={30} className="search-button" />
            </div>
        </div>
    )
}

export default SearchBar