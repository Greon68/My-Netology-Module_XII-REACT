import { useEffect, useState } from "react";
import { loadData } from "../../api/loadData";

export const useLoadData = ( onLoad ) => {
    const [results, setResults] = useState([]);

    useEffect ( () => {
        loadData('pokemon/').then ( ({results}) => {
            setResults(results);

            console.log(results);

            onLoad?.()
        })       
    },[]);

    return results
}