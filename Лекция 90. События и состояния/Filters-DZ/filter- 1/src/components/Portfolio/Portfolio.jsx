
import { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList.jsx';
import Toolbar from '../Toolbar/Toolbar.jsx';

const list = [{
    id: 1 ,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards"
  },
   {
    id: 2,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  },
   {
    id: 3,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, 
  {
    id: 4,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites"
  },
   {
    id: 5,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards"
  }, 
  {
    id: 6,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites"
  },
   {
    id: 7,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  },
   {
    id: 8,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, 
  {
    id: 9,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites"
  },
   {
    id: 10,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers"
  },
   {
    id: 11,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites"
  },
   {
    id: 12,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards"
  },
   {
    id: 13,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites"
  },
   {
    id: 14,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  },
   {
    id: 15,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  },
   {
    id: 16,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
  },
   {
    id: 17,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers"
  }];

const filters = ["All", "Websites", "Flayers", "Business Cards"];

const cardObject =[
  {
    id: 16,
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
  },
  {
  id: 17,
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}] 

const Portfolio = () => {
    // Функция состояния для фильтров:
    const [filterState, setFilter]= useState(list);

    console.log ('Текущее значение фильтра -', filterState)
    
    const onSelectFilter = (filter) => {
      console.log ('onSelectFilter - ',filter)
  
      if (filter === 'All') {
        // setFilter(list)
        setFilter( (prev) => {
          console.log ('prev-',prev );
          console.log ('filterState-', filterState)
          return list
        })
      } 
      // else {
      //   setFilter ( 
      //     list.filter( card => 
      //       card.category === `${filter}`     
      //     )
      //   )
      // }

      else {
        setFilter ( (prev) => {

          console.log ('prev-',prev );
          console.log ('filterState -', filterState)

          const newList = list.filter( card => 
            card.category === `${filter}`     
          );
          console.log ('newList-', newList);
          return newList 
        })
      }    
    }
    // console.log ('filterState after -', filterState)
 
    return (   
        <>
        <Toolbar
            filters={filters}
            selected="All" 
            onSelectFilter={onSelectFilter}/>

         < ProjectList projects = {filterState}/>

        </>
    )
}


export default Portfolio