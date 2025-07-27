import { cards } from './data.js';
import './Portfolio.css'

export const Portfolio = ({cards})=> {
    // Функция , формирующая элементы списка для отрисовки:
    function blockCard(card) {
        return (
        <div className='block'>       
            <img className='image' src={card.img} key={card.id}/>
            <div className='category'>{card.category}</div>
        </div>  )             
    }
    
// All:
    // const cardList = cards.map ( card =>       
    //         <img className='image' src={card.img} key={card.id}/>                
    //     )
     
    // console.log(cards)  ;  
    // console.log(cardList)    

// All 2- с категориями(для контроля):

// const cardList = cards.map ( card =>
//     <div className='block'>       
//         <img className='image' src={card.img} key={card.id}/>
//         <div className='category'>{card.category}</div>
//     </div>               
// )

// All 3:

const cardList = cards.map ( card =>
            blockCard(card)    
)

console.log(cards)  ;  
console.log(cardList)  


// ФИЛЬТРЫ

// Фильтр "Websites"

    const websites = cards.filter( card =>
        card.category === "Websites"      
    )

        console.log(websites)

// 1 вариант:
    // const cardList = websites.map ( website =>       
    //     <img className='image' src={website.img} key={website.id}/>                
    // )

// 2 вариант:
    // const cardList = websites.map ( card =>
    //     blockCard(card)    
    // )

// Фильтр "Flayers" Business Cards

        const flayers = cards.filter( card =>
            card.category === "Flayers"      
        )
            console.log(flayers)

        // 1 вариант:
        // const cardList = flayers.map ( flayer =>       
        //     <img className='image' src={flayer.img} key={flayer.id}/>    
        // )

        //  return (        
        //         <div className='container' >
        //             {cardList}
        //         </div>       
        // )

        // // 2 вариант:
        // const cardList = flayers.map ( card =>
        //     blockCard(card)    
        // )


// Фильтр "Business Cards" 

    const businessCards = cards.filter( card =>
        card.category === "Business Cards"      
    )

    console.log(businessCards)

    // const cardList = businessCards.map (card =>       
    //     <img className='image' src={card.img} key={card.id}/>    
    // )

     // 2 вариант:
        // const cardList = businessCards.map ( card =>
        //     blockCard(card)    
        // )


    // const Start = ()=>{
    //     console.log ("Start")
    // }

    // function All (){
    //     const cardList = cards.map ( card =>       
    //         <img className='image' src={card.img} key={card.id}/>                
    //     )
    //     console.log(cardsList) 
    //     return cardList;
    // }

    return (        
        <div className='container' >                
            {cardList}
        </div>       
    )

    // return (        
    //     <div className='container' >
    //         {/* <button onClick={Start}>Start</button> */}
    //         <button onClick={All}>All</button>
    //         {/* {cardList} */}
    //     </div>       
    // )


}

// 


