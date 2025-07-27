import { useState } from 'react'

  
const ToggleComponent = () => {  

    const [isVisible, setIsVisible] = useState(false);  

    const handleClick = () => { setIsVisible(!isVisible); };  
    return (  
        <div>  
            <button onClick={handleClick}>  
                {isVisible ? 'Hide' : 'Show'} Text  
            </button>  
            {isVisible && <p>This is a toggleable text component.</p>}  
        </div>  
    );  
};  
export default ToggleComponent;  
