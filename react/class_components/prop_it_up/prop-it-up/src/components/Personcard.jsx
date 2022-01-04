import React, { Component } from "react";

class Personcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {

        let myjob = () => {
            console.log(this.props.profession)
            alert(this.props.profession)
            // document.getElementById("job").innerHTML = this.props.profession
            // { this.props.firstName } { this.props.lastName }
        }
        let addyear = () => {
            console.log("added one year")
            this.setState({ age: this.state.age + 1 })
        }
        return (
            <>
                <div>
                    <h1>Name: {this.props.lastName}, {this.props.firstName} </h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    {this.props.children}
                    {/* <p id="job"></p> */}
                    <button onClick={myjob} id="job">Show {this.props.firstName}'s profession</button>
                    <button onClick={addyear} id="bday">{this.props.firstName} {this.props.lastName}'s birthday button</button>

                    <p>*Other user info will be added later*</p>
                </div>
            </>
        )
    }
}

export default Personcard;