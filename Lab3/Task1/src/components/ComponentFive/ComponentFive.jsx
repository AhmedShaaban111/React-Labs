import { Component } from "react";
import { UserConsumer } from "../ContextData";

class ComponentFive extends Component{
    render(){
        return(
            <div>
            <UserConsumer>
                {
                    (value) => {
                        return (
                            <h5>{value} ComponentFive</h5>
                        )
                    }
                }
            </UserConsumer>
            </div>
            
        )
    }
}

export default ComponentFive;