
const list = [
    {
      name:"Oleg",
      test:'xxx',
      age: 35
    },
    {      
        name:"Goga",
        test:true,
        age: 15},
    {
        name:"Yana",
        test:false,
        age: 33  
    },
];

const BooleanList =()=> {
    return (
        <div>
            {list.map ( el => (
                <div>{el.name} - {el.test} : {el.age}</div>
            ))}
        </div>
    )
}

export default BooleanList