const { Children } = require("react");

function FunctionalProps({fname,lname,age,address,children}){
    
    return(
        <div>
        <h2>Hello this is {fname} {lname}, my age is {age} and address is {address}</h2>

            {children}
        </div>

    )
}

export default FunctionalProps;