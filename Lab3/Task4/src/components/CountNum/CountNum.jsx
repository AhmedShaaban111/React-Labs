import "/media/ahmedshaaban/01D9BDB66ADBAF60/iti/react/lab/src/components/style.css"
import { Component } from "react";

class CountNum extends Component {
    constructor(){
        super();
        this.state={
            Count: 1,
        };

    }
    increamentbutton(){
        this.setState({Count: this.state.Count +1})
    }
    decreamentbutton(){
        if(this.state.Count >1) this.setState({Count: this.state.Count -1})
    }
    render(){
        return(
            <div>
                <button className="button" onClick={this.decreamentbutton.bind(this)}>-</button>
                <span className="text">{this.state.Count}</span>
                <button className="button" onClick={this.increamentbutton.bind(this)}>+</button>
            </div>
        )
    }
}

export default CountNum