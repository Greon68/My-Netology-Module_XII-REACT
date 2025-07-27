const Toolbar = ({filters, selected , onSelectFilter}) => {
      
    const onBattonClick = (e) => {
      const selectButton = e.target.innerHTML;
      console.log ('e - ',e);
      console.log ('e.target - ',e.target);
      console.log ('e.target.innerHTML - ',e.target.innerHTML);    
      console.log('selectButton - ',selectButton)
      // Передаём обработчику аргумент
      onSelectFilter(selectButton);     
    }

    return (  
        <ul className="filter-button">

            {filters.map( (filter) =>
              <li key={filter}> 
                  <button 
                    onClick= {onBattonClick}>
                        {filter}
                  </button> 
              </li>
              )
            }

        </ul>
    )


}

export default Toolbar

