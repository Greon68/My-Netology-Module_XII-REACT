import { useEffect , useState} from "react"
import { loadData } from "../../api/loadData";
import S from "./Pokemon.module.css"

export const Pokemon = ({name}) => {
    // console.log('Покемон - ', name)
    const [data, setData]= useState(null);

    useEffect ( ()=>{
        loadData(`pokemon/${name}`).then ( r => setData(r))
    },[name])

    return (
        
        <div className={S.container}>
            <h2>{name}</h2>
            { data && <img src = {data.sprites.front_default} className={S.image}/>}
        </div>
    )
}