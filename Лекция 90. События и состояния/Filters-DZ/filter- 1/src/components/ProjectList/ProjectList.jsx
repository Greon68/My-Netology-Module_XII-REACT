
const ProjectList = ({projects})=>{
    
    console.log ('ProjectList -',projects)

    return (   
                
        <div className='container' >     
                { projects.map ( (card) =>                
                    <div className='block' key={card.id}>  
                        <img className='image' src={card.img} key={card.id}/>
                        <div className='category'>{card.category}</div>
                    </div>                   
                  )
                }         
        </div>       
    )
}

export default ProjectList

