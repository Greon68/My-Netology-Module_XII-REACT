console.log('hello')

const list = [{
    id: 1 ,  
    category: "Business Cards"
  },
   {
    id: 2,   
    category: "Websites"
  },
   {
    id: 3,   
    category: "Websites"
  }, 
  {
    id: 4,    
    category: "Websites"
  },
   {
    id: 5,  
    category: "Business Cards"
  }, 
  {
    id: 6,   
    category: "Websites"
  },
   {
    id: 7,    
    category: "Websites"
  },
   {
    id: 8,    
    category: "Business Cards"
  }, 
  {
    id: 9,  
    category: "Websites"
  },
   {
    id: 10,
    category: "Flayers"
  },
   {
    id: 11,   
    category: "Websites"
  },
   {
    id: 12,
    category: "Business Cards"
  },
   {
    id: 13,
    category: "Websites"
  },
   {
    id: 14, 
    category: "Websites"
  },
   {
    id: 15,  
    category: "Business Cards"
  },
   {
    id: 16,   
    category: "Websites"
  },
   {
    id: 17,   
    category: "Flayers"
  }];

  

  const Filter =(filter) => {
    const filterList= null;

    if (filter === 'All') {
        filterList= list; 
    } else {
        filterList = list.filter ( card => 
            card.category === `${filter}`
        );
    }   
    console.log (filterList)
  }

Filter('Websites');
Filter('Business Cards');
Filter('Flayers');
Filter('All');



const onSelectFilter = (filter) => {
    console.log( 'onSelectFilter-',filter);

  //   const filterList = list.filter( card =>
  //     card.category === `${filter}`      
  // );
  const filterList = list.filter( card => 
    card.category === `${filter}`     
     );
     setFilter(filterList)  
  }