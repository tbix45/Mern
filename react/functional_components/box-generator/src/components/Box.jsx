import React, { useState } from "react";
import styles from './Box.module.css'

const Box = props => {

    let [formInfo, setFormInfo] = useState({
        color: "",
    })
    let [listofBoxes, setListofBoxes] = useState([])

    const changehandler = (e) => {
        console.log("typed color is:", e.target.value)
        setFormInfo({
            [e.target.name]: e.target.value
        })
    }
    const submitBox = (e) => {
        e.preventDefault();
        console.log("Clicked")
        setListofBoxes([...listofBoxes, formInfo])
        e.target.reset();
    }


    return (
        <>
            <h1>Create A Box</h1>
            <div className="form-group">
                <form onSubmit={submitBox}>
                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" id="color" onChange={changehandler} />
                    <input type="submit" className="btn btn-primary ml-3" value="Create Box" />
                </form>
            </div >
            <div className={styles.boxArea}>
                {
                    listofBoxes.map((box) => {
                        return (
                            < div className={styles.box} style={{ backgroundColor: box.color }
                            }></div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Box