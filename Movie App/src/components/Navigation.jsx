import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setGroup } from '../redux/groupSlice.jsx';
import { setPage } from '../redux/pagesSlice.jsx';
import { motion } from "framer-motion";

const Navigation = () => {

    const dispatch = useDispatch();
    const group = useSelector(state => state.group);
    const page = useSelector(state => state.page);

    return (
        <div className="relative z-10">
            <div className="fixed bottom-5 left-5 flex items-center gap-x-2 text-2xl bg-yellow-500 rounded-full px-2">
                <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.3 }}
                    onClick={() => page > 1 && dispatch(setPage(page - 1))} className="cursor-pointer">
                    <FaArrowCircleLeft />
                </motion.span>
                <p className="text-xl select-none">{page}</p>
                <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.3 }}
                    onClick={() => dispatch(setPage(page + 1))} className="cursor-pointer">
                    <FaArrowCircleRight />
                </motion.span>
            </div>
            <select
                value={group}
                onChange={(e) => dispatch(setGroup(e.target.value))}
                className="fixed to-5 left-5 bg-gray-200/90 text-sm tracking-wide text-gray-700 uppercase rounded-md outline-none p-1 cursor-pointer hover:bg-gray-200">
                <option value="TopRated">Top Rated</option>
                <option value="Popular">Popular</option>
                <option value="UpComing">UpComing</option>
                <option value="Discover">Discover</option>
            </select>
        </div>
    );
}

export default Navigation;
