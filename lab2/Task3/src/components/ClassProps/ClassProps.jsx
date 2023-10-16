import { Component } from "react";

class ClassProps extends Component {
    render(){
    return(
        <div>
       <h2>I studies {this.props.course1} and {this.props.course2}</h2>
        {this.props.children}

        </div>

        
    )
}

}

export default ClassProps