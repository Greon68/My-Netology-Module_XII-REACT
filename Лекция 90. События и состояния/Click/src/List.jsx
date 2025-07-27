const items = [
    { link: 'link1', id: 'Articles' },
    { link: 'link2', id: 'Contacts' },
    { link: 'link3', id: 'Posts' }
];  

class List extends Component {
    render() {  
        return (
            <div>  
                {this.props.items.map((item, index) =>  
                    <li key={index} onClick={() => this.props.addToArray(item.id)}>{item.id}</li>
            )}  
            </div>
        );  
    }  
}  

class App extends Component {
    state = {  
        menu: items  
    };  
    addToArray = (id) => {  
        this.setState((state) => {  
            return {menu: [...state.menu, {id}]}  
        })  
    }  
    render() {  
        return (
            <div>  
                <List items={this.state.menu} addToArray={this.addToArray} />  
            </div>
        );  
    }  
}  
