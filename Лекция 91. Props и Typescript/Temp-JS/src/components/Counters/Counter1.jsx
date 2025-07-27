const Counter1 = ({count, handleCount})=> {
    console.log ('counter-2');
    return (
        <div>
            <button onClick={handleCount}>Счётчик</button>
            <p>{count}</p>
        </div>
    )


}

export default Counter1