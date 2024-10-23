import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../redux/actions/Card";

function Card() {
    const dispatch = useDispatch();
    const { cardItems } = useSelector(state => state.card)
    console.log("cardItems", cardItems)

    const deleteCard = (id) => {
        dispatch(removeCard(id))
    }
    return (
        <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3" >
            <div className="flex items-center h-20  justify-between">
                <h1 className="text-2xl">Sepetim</h1>
                <IoClose
                    onClick={() => dispatch({ type: 'DRAWER', payload: false })}
                    size={25}
                    className="cursor-pointer text-red-600" />
            </div >
            {
                cardItems?.map((card, i) => (
                    <div key={i} className="h-28 flex items-center justify-between  py-4 border-b border-l border-r rounded-xl">
                        <img className="h-24 " src={card?.image} alt="" />
                        <div className="w-44">
                            <div className="font-bold text-sm">
                                {(card?.title).substring(0, 45)} ( {card?.qty})
                            </div>
                            <div className="opacity-70 text-xs">
                                {(card?.description).substring(0, 90)}
                            </div>
                        </div>
                        <div className="font-bold  text-lg"> {card?.price}</div>
                        <div onClick={() => deleteCard(card.id)} className="bg-red-500 w-20 p-1 text-center text-white rounded-lg cursor-pointer">Sil</div>

                    </div>
                ))
            }

        </div>
    )
}

export default Card