import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [datalist, setDatalist] = useState([]);
    async function getDatalist() {
        const {data} = await axios.get(url);
        setDatalist(data);
    }

    useEffect(() => {
        getDatalist();
    }, []);
    return { datalist };
}