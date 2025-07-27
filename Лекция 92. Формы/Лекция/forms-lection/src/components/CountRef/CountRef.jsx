import { useRef } from 'react';

export default function CounterRef() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        console.log('Вы кликнули ' + ref.current + ' раз!');
    }

    return <button onClick={handleClick}>Click me!</button>;
}