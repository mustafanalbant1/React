import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productActions } from "../redux/actions/Products"
import ProductsCard from "../components/ProductsCard"
import { searchAction } from "../redux/actions/Search"

function Home() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const { search } = useSelector(state => state.search)

    useEffect(() => {
        dispatch(productActions())
        dispatch(searchAction())
    }, [dispatch])

    console.log(products)
    return (
        <div className="flex flex-wrap justify-center ">
            {
                search.length > 0 ?
                    search.map((prd, i) => (
                        <ProductsCard key={i} prd={prd} />
                    )) :
                    products && products.map((prd, i) => (
                        <ProductsCard key={i} prd={prd} />
                    ))
            }
        </div>
    )
}

export default Home