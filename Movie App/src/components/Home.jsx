import { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { fetchMovies } from '../redux/fetchMovies';
import Navigation from './Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion';

const Home = () => {
    const [cardWidth, setCardWidth] = useState(500);
    const cardInRow = 5;
    const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardInRow);
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const group = useSelector(state => state.group);
    const page = useSelector(state => state.page);
    const [mousePos, setMousePos] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0
    });
    const cardsRef = useRef(null);
    const loading = useSelector(state => state.movies.loading);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    x.set(mousePos.left);
    y.set(mousePos.top);

    const xSpring = useSpring(x, { stiffness: 10, damping: 10 });
    const ySpring = useSpring(y, { stiffness: 10, damping: 10 });

    const translateX = useTransform(xSpring, [0, windowWidth], [0, -mousePos.width + windowWidth]);
    const translateY = useTransform(ySpring, [0, windowHeight], [0, -mousePos.height + windowHeight]);
    const abortControllerRef = useRef(null)
    const getMousePositions = (e, referenceElement) => {
        const positions = {
            x: e.clientX,
            y: e.clientY,
        };
        const offset = {
            left: positions.x,
            top: positions.y,
            width: referenceElement.clientWidth,
            height: referenceElement.clientHeight
        };
        setMousePos(offset);

    };
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)

            let newCardWidth = 500
            if (window.innerWidth < 1280) newCardWidth = 400
            if (window.innerWidth < 768) newCardWidth = 350

            setCardWidth(newCardWidth)
            setWrapperWidth(newCardWidth * cardInRow)

            x.set(mousePos.left)
            y.set(mousePos.top)
            window.addEventListener('resize', handleResize);

            // Clean up the event listener on unmount
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        x.set(0)
        y.set(0)
    }, [windowWidth, windowHeight])


    useEffect(() => {
        dispatch(fetchMovies(group, page));
        return () => {
            // Bileşen unmounted olduğunda isteği iptal et
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };

    }, [group, page, dispatch]);

    return (
        <>
            <Navigation />
            {loading ? (
                <div className="flex justify-center items-center h-screen w-screen bg-[#240000]">
                    <h1 className="text-white text-3xl uppercase">Loading...</h1>
                </div>
            ) : (
                <motion.div
                    className='flex justify-center items-center fixed top-0 overflow-hidden'
                    style={{ width: wrapperWidth, translateX, translateY }}
                    ref={cardsRef}
                    onMouseMove={(e) => getMousePositions(e, cardsRef.current)}
                >
                    <div className='flex flex-wrap'>
                        {movies.map((movie, index) => (
                            <motion.div key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: loading ? 0 : 1 }}
                                transition={{ delay: index * 0.05 }}>
                                <Card cardWidth={cardWidth} movie={movie} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Home;
