// import { useEffect, useState } from "react";
// import { loadData } from "../../api/loadData";
// import S from "./PokemonSearch.module.css"
// import { Pokemon } from "../Pokemon/Pokemon";

// import { useBoolean } from "../../hooks/useBoolean";

// НАЧАЛО . ПОКАЗАЛИ СПИСОК ПОКЕМОНОВ

// export const PokemonSearch = () => {
//     const [results, setResults] = useState([]);// список покемонов
//     const [filter, setFilter] = useState(''); // поле ввода input



//     const data = results.filter((item) =>
//         item.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     // const data = results.filter((item) =>
//     //     item.name.toLowerCase().includes(filter)
//     // );

//     useEffect ( () => {
//         loadData("/pokemon").then (({results}) => {
//             setResults(results);
//             console.log(results)
//             })
//     },[])

//     return(
//         <div className={S.container}>
//             {/* поле ввода поиска */}
//             <div className={S.search}>
//                 <input 
//                     type="text"
//                     className={S.input}
//                     value = {filter}
//                     onChange = {({target}) => {
//                         console.log (filter);
//                         setFilter (target.value.trim());
                        
//                     }}       
//                  />          
//              {/* список Пакемонов */}
//                 <div className={S.results}>
//                     {/* {results.map((item) => (
//                         <div  key={item.name} className={S.item}>
//                             {item.name}
//                         </div>
//                     ))} */}
//                     {data.map((item) => (
//                         <div  key={item.name} className={S.item}>
//                             {item.name}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )

// }

// **************************************************
// 2.  Отрисовали покемона по выбору из списка

// export const PokemonSearch = () => {
//     const [results, setResults] = useState([]);// список покемонов
//     const [filter, setFilter] = useState(''); // поле ввода input
//     const [selection, setSelection]= useState(null) //выбранный покемон
//     const [isListShown, setShowList] = useState (false) // показать/ скрыть список покемонов

//     const showList = ()=> setShowList(true);
//     const hideList = ()=> setShowList(false);


//     const data = results.filter((item) =>
//         item.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     // const data = results.filter((item) =>
//     //     item.name.toLowerCase().includes(filter)
//     // );

//     useEffect ( () => {
//         loadData("/pokemon").then (({results}) => {
//             setResults(results);
//             showList();
//             console.log(results)
//             })
//     },[]);

//     const select = (pokemon) => () => {
//         setSelection(pokemon);
//         hideList() //когда покемон выбран, список покемонов скрываем
//       };

//     const showResults = (isListShown)  && (data.length>0)

//     return(
//         <div className={S.container}>
//             {/* поле ввода поиска */}
//             <div className={S.search}>
//                 <input 
//                     type="text"
//                     className={S.input}
//                     value = {filter}
//                     onChange = {({target}) => {setFilter (target.value.trim())}}
//                     onFocus= {showList}  
//                     // onBlur= {hideList} 
//                     autoFocus
//                  />          
//              {/* список Пакемонов */}
//                 {/* <div className={S.results}>  
//                     {data.map((item) => (
//                         <div 
//                           key={item.name}
//                           className={S.item}
//                         //   onClick= {()=> setSelection(item)} 
//                             onClick= {select(item)}                         
//                           >
//                             {item.name}
//                         </div>
//                     ))}
//                 </div> */}
                
//                 {/* Задействуем isListShown */}
//                 { showResults && (
//                     <div className={S.results}>  
//                         {data.map((item) => (
//                             <div 
//                                 key={item.name}
//                                 className={S.item}
//                         //       onClick= {()=> setSelection(item)} 
//                                  onClick= {select(item)}                         
//                             >
//                                 {item.name}
//                             </div>
//                         ))}
//                     </div>
//                 )}

//             </div>

//             {/* отрисовываем пакемона . Передаём props в компонент */}
//             { selection && (
//                 <div className={S.selection}>
//                     <Pokemon { ... selection}/>
//                 </div>
//             )}

//         </div>   // div className={S.container}
//     ) ;        // return

// }

// *******************************************************
// 3. ПОЛЬЗОВАТЕЛЬСКИЙ ХУК useBoolean 

// export const PokemonSearch = () => {
//     const [results, setResults] = useState([]);// список покемонов
//     const [filter, setFilter] = useState(''); // поле ввода input
//     const [selection, setSelection]= useState(null) //выбранный покемон
//     // const [isListShown, setShowList] = useState (false) // показать/ скрыть список покемонов
//     const [isListShown, setShowList] = useBoolean (false)

//     // const showList = ()=> setShowList(true);
//     // const hideList = ()=> setShowList(false);


//     const data = results.filter((item) =>
//         item.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     useEffect ( () => {
//         loadData("/pokemon").then (({results}) => {
//             setResults(results);
//             // showList();
//             setShowList.on();
//             console.log(results)
//             })
//     },[]);
   
//     const select = (pokemon) => () => {
//         setSelection(pokemon);
//         // hideList() //когда покемон выбран, список покемонов скрываем
//         setShowList.off();
//       };

//     const showResults = (isListShown)  && (data.length>0)

//     return(
//         <div className={S.container}>
//             {/* поле ввода поиска */}
//             <div className={S.search}>
//                 <input 
//                     type="text"
//                     className={S.input}
//                     value = {filter}
//                     onChange = {({target}) => {setFilter (target.value.trim())}}
//                     // onFocus= {showList}  
//                     onFocus= {setShowList.on}  
//                     autoFocus
//                  />          
                      
//                 {/* Задействуем isListShown */}
//                 { showResults && (
//                     <div className={S.results}>  
//                         {data.map((item) => (
//                             <div 
//                                 key={item.name}
//                                 className={S.item}
//                         //       onClick= {()=> setSelection(item)} 
//                                  onClick= {select(item)}                         
//                             >
//                                 {item.name}
//                             </div>
//                         ))}
//                     </div>
//                 )}

//             </div>

//             {/* отрисовываем пакемона . Передаём props в компонент */}
//             { selection && (
//                 <div className={S.selection}>
//                     <Pokemon { ... selection}/>
//                 </div>
//             )}

//         </div>   // div className={S.container}
//     ) ;        // return

// }

// *******************************************
// 4. ПОЛЬЗОВАТЕЛЬСКИЙ ХУК usePokemonSearch

import { useEffect, useState } from "react";
import { loadData } from "../../api/loadData";
import S from "./PokemonSearch.module.css"
import { Pokemon } from "../Pokemon/Pokemon";
import { useBoolean } from "../../hooks/useBoolean";

import { usePokemonSearch } from "./usePokemonSearch";

export const PokemonSearch = () => {
    const [filter, setFilter] = useState(''); // поле ввода input
    const [selection, setSelection]= useState(null) //выбранный покемон  
    const [isListShown, setShowList] = useBoolean (false)

    // const [results, setResults] = useState([]);// список покемонов
    // const results = usePokemonSearch({
    //         onLoad: setShowList.on,
    //       });

          const results = usePokemonSearch(
            setShowList.on
          );     

    const data = results.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    // useEffect ( () => {
    //     loadData("/pokemon").then (({results}) => {
    //         setResults(results);
    //         // showList();
    //         setShowList.on();
    //         console.log(results)
    //         })
    // },[]);
   
    const select = (pokemon) => () => {
        setSelection(pokemon);
        setShowList.off();
      };

    const showResults = (isListShown)  && (data.length>0)

    return(
        <div className={S.container}>
            {/* поле ввода поиска */}
            <div className={S.search}>
                <input 
                    type="text"
                    className={S.input}
                    value = {filter}
                    onChange = {({target}) => {setFilter (target.value.trim())}}                    
                    onFocus= {setShowList.on}  
                    autoFocus
                 />          
                      
                {/* Задействуем isListShown */}
                { showResults && (
                    <div className={S.results}>  
                        {data.map((item) => (
                            <div 
                                key={item.name}
                                className={S.item}                       
                                onClick= {select(item)}                         
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            { selection && (
                <div className={S.selection}>
                    <Pokemon { ... selection}/>
                </div>
            )}

        </div>   
    ) ;        

}