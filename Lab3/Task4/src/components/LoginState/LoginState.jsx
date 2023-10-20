import { Component } from "react";

class LoginState extends Component {
    constructor(){
        super();
        this.state={
            subscription:"Guest",
            isloggedIn: false
        };

    }
    change(){
        this.setState({subscription : " You now have a subscription",isloggedIn: true})
        console.log(this);
    }
    render(){
        return(
            <div>
                <h2>{this.state.subscription}</h2>
                <button onClick={this.change.bind(this)}>Login</button>

            </div>

        )
    }
}

export default LoginState;