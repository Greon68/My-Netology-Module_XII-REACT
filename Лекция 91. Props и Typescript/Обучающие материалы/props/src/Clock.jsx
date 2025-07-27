import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return(
            <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        )
    }
}

// Функция
// import React, { useState } from 'react';  

// function Clock() {  
//     const [time, setTime] = useState(new Date());  
//     return (  
//         <div>  
//             <h1>{time.toLocaleTimeString()}</h1>  
//         </div>  
//     );  
// }  

export default Clock