import { useEffect, useState } from "react";
import { loadData } from "../../api/loadData";
import S from "./PokemonSearch.module.css";
import { Pokemon } from "../Pokemom/Pokemon";
import { useBoolean } from "../../hooks/useBoolean";
import { useLoadData } from "./useLoadData";

export const PokemonSearch = ()=>{
    // const [results, setResults] = useState([]);
    const [filterIn , setFilterIn] = useState('');
    const [selection, setSelection] = useState(null);
    // const [isListShow, setShowList] = useState(false);
    const [isListShow, setShowList] = useBoolean(false);
    const results = useLoadData(setShowList.on)

    

    // const showList = ()=> setShowList(true);
    // const hideList = ()=> setShowList(false)

    // useEffect ( ()=>{
    //     loadData('pokemon/').then ( ({results}) => {
    //         setResults(results);
    //         setShowList.on();
    //         console.log(results)
    //     })       
    // },[])

    const data = results.filter( (item) => item.name.toLowerCase().includes(filterIn.toLowerCase()) )
    const listShow = isListShow && data.length>0

    const select = (pokemon) => ()=> {
        setSelection(pokemon);
        // hideList()
        setShowList.off()
    }


    return (
        <div className={S.container}>
            <div className={S.search}>
                <input 
                    type='text'
                    className={S.input}
                    onChange = {({target})=> {setFilterIn(target.value.trim())}}
                    // onFocus={showList}
                    // onBlur={hideList}
                    onFocus={setShowList.on}
                    autoFocus
                />
                <div className={S.results}>

                    {listShow && (                                        
                        data.map ((item)=> (
                            <div
                                key={item.name}
                                className={S.item}
                                onClick = {select(item)}
                            >
                                {item.name}
                            </div>
                        ))                
                    )}
                </div>

            </div>
            { selection && (
                <Pokemon {...selection}/>
            )

            }

        </div>
    )



}