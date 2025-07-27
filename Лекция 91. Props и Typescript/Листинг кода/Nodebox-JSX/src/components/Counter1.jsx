

 const Counter1 = ({ count, handleCount }) => {

	return (
			<div>				
				<button onClick={handleCount}>Increment</button>
				<p>{count}</p>
			</div>
	)
}
export default Counter1;