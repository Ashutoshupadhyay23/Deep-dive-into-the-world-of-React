import { useState } from "react"
import { useEffect } from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-07-01/v1/currencies/${currency}.json`
        )
        .then((resp) => resp.json())
        .then((res) => setData(res[currency])) // we can access object data using square bracket [] as well like res.currency :- res[currency]
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo










