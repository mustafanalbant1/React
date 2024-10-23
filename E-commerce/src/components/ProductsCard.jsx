function ProductsCard({ prd }) {
    return (
        <div className="hover:border-indigo-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col justify-between items-center p-1 space-y-2">
            <img onClick={() => window.location = `detail/${prd.id}`} className="h-32 object-cover mt-5" src={prd?.image} alt="" />
            <div className="flex-grow flex flex-col justify-between items-center w-full">
                <div className="font-bold text-center mt-2">{(prd?.title).substring(0, 50)}</div>
                <div className="text-center opacity-70 text-sm">{(prd?.description).substring(0, 79)}</div>
                <div className="font-bold text-lg ">{prd?.price}$</div>
            </div>
            <button className="bg-indigo-600 w-full p-2 text-white rounded-xl mt-2" >Sepete Ekle</button>
        </div>
    )
}

export default ProductsCard;
