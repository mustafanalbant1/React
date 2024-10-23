import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { productActionsDetail } from "../redux/actions/Products";
import { productCard } from "../redux/actions/Card";
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.product)
    const [count, setCount] = useState(0)

    useEffect(() => {
        dispatch(productActionsDetail(id))
    }, [dispatch])

    console.log(product)


    const increment = (stock) => {
        if (count <= stock) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const addCard = () => {
        dispatch(productCard(id, count))
        dispatch({ type: 'DRAWER', payload: true })
    }

    return (
        <div className="w-full flex items-center   justify-center space-x-5">
            <img className="w-1/5" src={product?.image} alt="" />
            <div className="w-2/3 space-y-5">
                <div className="font-bold text-xl">{product?.title}</div>
                <div className="opacity-70">{product?.description} </div>
                <div className="opacity-70">Category: {product?.category}</div>
                <div className="opacity-70">Rate: {product?.rating?.rate} - Stoke: {product?.rating?.count}</div>
                <div className="font-bold text-xl">Fiyat: {product?.price}$</div>

                <div className="flex items-center space-x-4">
                    <CgMathMinus
                        onClick={decrement} className="cursor-pointer border rounded-full p-1"
                        size={30} />

                    <span className="text-2xl">{count}</span>

                    <CgMathPlus
                        onClick={() => increment(product?.rating?.count)} className="cursor-pointer border rounded-full p-1"
                        size={30} />
                </div>
                <button
                    onClick={addCard}
                    className="p-3 w-full text-center rounded-lg text-white text-lg bg-indigo-600">Sepete Ekle</button>

            </div>
        </div>
    )
}

export default Detail