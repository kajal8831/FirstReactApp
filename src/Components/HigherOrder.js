import React from "react";

//Higher order compoenents takes your existing component as parameter and returns an new component
const UpdatedComponent = OriginalComponent => {
    class NewComp extends React.Component{
        render(){
            // return(
            //     //New component is passing props to original comp
            //     <OriginalComponent name='The user'/>
            // )
            return <OriginalComponent higherorderprops='The user'/>;
        }
    }
    return NewComp;
}

export default UpdatedComponent;