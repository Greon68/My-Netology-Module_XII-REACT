import { ICounter } from '../models'

export const Counter1 = ({ count, handleCount }: ICounter) => {

	return (
			<div>
				<p>{count}</p>
				<button onClick={handleCount}>Increment</button>
			</div>
	)
}
