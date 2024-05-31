import React from "react";

class Footer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'Jiya',
            s_name: this.props.surname,
            count: 0
        }
        this.countInc = this.countInc.bind(this);
    }
    countInc(){
        let count = this.state.count
        let name;
        if(count % 2 === 0){
            name = this.state.name
            alert(count)
        }else{
            name = this.props.name
            alert(count)
        }
        
        this.setState({
            count: ++count,
        })
        this.setState({
            name: name
        })
        alert(this.state.name)
    }

    render(){
        return (
            <React.Fragment>
                <p>Name: {this.state.name}</p>
                <p>Surname: {this.state.s_name}</p>
                <h2>Footer Page</h2>
                <p>count: {this.state.count}</p>
                <button onClick={this.countInc}>Click</button>
            </React.Fragment>
        )
    }
}

export default Footer;