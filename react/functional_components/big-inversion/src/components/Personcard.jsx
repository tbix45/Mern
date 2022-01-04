import React, { useState } from "react";


const Personcard = props => {
    const [state, setState] = useState({
        age: props.age
    });

    let showJob = () => {
        console.log(props.profession)
        alert(props.firstName + " is a " + props.profession)
    }
    let addyear = () => {
        console.log("added one year to " + props.firstName + "'s age")
        setState({
            age: state.age + 1
        });
    }

    return (

        <>
            <div>
                <h1>Name: {props.lastName}, {props.firstName}</h1>
                <p>Age: {state.age}</p>
                <p>Hair Color: {props.hairColor}</p>
                <button onClick={showJob}>Show {props.firstName}'s Profession</button>
                <button onClick={addyear}>Celebrate {props.firstName}'s' Birthday!</button>
            </div>
        </>
    );
}

export default Personcard