import React, { useState } from "react";


const HookForm = props => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword }
        console.log("Welcome", newUser)
    }
    return (
        <>
            <form onSubmit={createUser}>
                <h1>Fill Out This Form</h1>
                <div className="Form_section">
                    <label htmlFor="firstname">First Name: </label>
                    <input id="firstname" type="text" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="Form_section">
                    <label htmlFor="lastname">Last Name: </label>
                    <input id="lastname" type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="Form_section">
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="Form_section">
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="Form_section">
                    <label htmlFor="confirm_password">Confirm Password: </label>
                    <input id="confirm_password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit Info" />
                <div className="Formdata">
                    <h3>Your Form Data</h3>
                    <h6>First Name: {firstname}</h6>
                    <h6>Last Name: {lastname}</h6>
                    <h6>Email: {email}</h6>
                    <h6>Password: {password}</h6>
                    <h6>Confirm Password: {confirmpassword}</h6>
                </div>
            </form>
        </>
    )
}
export default HookForm

// import React, { useState } from 'react';


// const UserForm = (props) => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { username, email, password };
//         console.log("Welcome", newUser);
//     };

//     return (
//         <form onSubmit={createUser}>
//             <div>
//                 <label>Username: </label>
//                 <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" />
//             </div>
//             <div>
//                 <label>Email Address: </label>
//                 <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email Address" />
//             </div>
//             <div>
//                 <label>Password: </label>
//                 <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
//             </div>
//             <input type="submit" value="Create User" />
//         </form>
//     );
// };

// export default UserForm;
