import { useEffect, useState } from "react"
import { PRODUCT_API } from "../utils/config"

const useFetchData = () => {
    const [data, setdata] = useState([])
    async function fetchData() {
        const res = await fetch(PRODUCT_API)
        const json = await res.json()
        setdata(json?.products)
    }
    useEffect(() => {
        fetchData()
    }, [])



    return (
        data
    )
}

export default useFetchData