import { useState } from 'react';
import { ICounter } from '../models';

export interface CounterProps {
 render: ({count, handleCount}: ICounter) => JSX.Element
}

export const Counter = ({ render }: CounterProps) => {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount((prev) => prev + 1);

  return render({count, handleCount});
};

export default Counter;
