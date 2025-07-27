// import products from "./data";
import "./StoreMod.css"


 const StoreMod = ({products})=>{
 
    const productList = products.map ( (product)=>
            <div className='block'> 
                <div className="name" >{product.name}</div>  
                <div className="color" >{product.color}</div>   
                <img className='image' src={product.img}  key={product.id}/>
                <div className="price" >${product.price}</div> 
                <button className="button" >ADD TO CAR</button>                
            </div>   

    )



    return (      
        <div className='container' >                
            {productList}
        </div>   
    )
}


export default StoreMod


