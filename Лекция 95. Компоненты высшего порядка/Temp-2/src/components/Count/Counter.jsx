
// const Counter = ({value, addOne, decOne })=> {
const Counter = (props)=> {
        
    // console.log(props);

    const {value, addOne, decOne }= props;
    return (
        < div className="counter">
            <button onClick={addOne}> ADD + </button>
            <span> {value} </span>
            <button onClick={decOne}> DEC - </button>
        </div>
    )
}

export default Counter 

// ************************************************
const withLogger = (Component) => {
    return function (props, ...args) {
      console.log(props);
      return Component.apply(this, [props, ...args]);
    };
  };
  
 