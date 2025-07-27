import React, { useState } from 'react';  

const ToggleComponent = () => {  

    const [isVisible, setIsVisible] = useState(false);  

    function handleClick() { setIsVisible(!isVisible);
        // console.log('x')
    };  
    
    return (  
        <div>  
            <button id='Show' onClick={handleClick}>  
                {isVisible ? 'Убрать' : 'Показать'} Картинку 
                
            </button>  
            {/* {isVisible && <p>This is a toggleable text component.</p>}   */}
            {isVisible && <div><img src= 'https://i.pinimg.com/736x/f8/c7/dc/f8c7dc9b7796ac03a222613ba49a51aa.jpg'/></div>} 
        </div>  
    );  
};  
export default ToggleComponent;  