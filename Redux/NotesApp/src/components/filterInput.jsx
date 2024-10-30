import { useState } from 'react';
import '../App.css';
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { searchNote } from "../redux/noteSlice";

function FilterInput() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = async (e) => {
        const inputValue = e.target.value;
        const searchValue = inputValue.trim() === "" ? "" : inputValue;
        await dispatch(searchNote(searchValue));

    };



    return (
        <div className='filter-container'>
            <input
                type="text"
                className="search-input"
                placeholder='Search...'
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    handleChange(e);
                }}
            />
            <IoIosSearch className='search-icone' onClick={(e) => e.preventDefault()} />
        </div>
    );
}

export default FilterInput;