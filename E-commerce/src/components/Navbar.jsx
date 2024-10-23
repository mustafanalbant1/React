import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/actions/Search";

function Navbar() {
    const [color, setColor] = useState(false)

    const dispatch = useDispatch();

    const { cardItems } = useSelector(state => state.card)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const root = document.getElementById('root');
        if (color) {
            root.style.backgroundColor = "black"
            root.style.color = "lightgray"
        }
        else {
            root.style.backgroundColor = "white"
            root.style.color = "black"
        }
    }, [color])

    const searchPost = (e) => {
        if (e.key === 'Enter') {
            dispatch(searchAction(search))
        }
    }

    return (
        <div className="flex items-center justify-between  px-3 h-28 ">
            <div className="text-2xl font-bold tracking-wider">LOGO</div>
            <div className="flex items-center justify-between px-3">
                <input value={search} onKeyPress={searchPost} onChange={e => setSearch(e.target.value)} className="border-b border-l border-r rounded-xl p-3 outline-none " type="text" placeholder="search" />
                <div onClick={() => setColor(!color)}>
                    {
                        color ? <FaMoon size={25} className=" cursor-pointer ml-4 mr-3 " /> : <GoSun size={25} className="cursor-pointer ml-4 mr-3" />
                    }


                </div>
                <div
                    onClick={() => dispatch({ type: 'DRAWER', payload: true })}
                    className="relative">
                    <FaBasketShopping size={25} className="cursor-pointer" />
                    <span className=" absolute -top-1 -right-3 px-1.5 bg-red-600 text-white rounded-full text-sm">{cardItems?.length}</span>
                </div>
            </div>
        </div >
    )
}

export default Navbar