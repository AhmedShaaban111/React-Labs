import { Component } from "react";
import ComponentFour from "../ComponentFour/ComponentFour";
import { UserConsumer } from "../ContextData";

class ComponentThree extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (value) => {
                            return (
                                <h3>{value} ComponentThree</h3>
                            )
                        }
                    }
                </UserConsumer>
                <ComponentFour />

            </div>

        )
    }
}

export default ComponentThree;