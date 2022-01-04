import React, { useState } from 'react';
// import styles from './Todolist.Module.css';

const Todolist = (props) => {

    // represents each task as an object 
    const [task, setTask] = useState({
        nameOfTask: "",
        isComplete: false
    })

    // represents the list cointaining all the task objects
    let [listOfTasks, setListOfTasks] = useState([])

    const changehandler = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    // when we submit the form we will add the task object to our array of tasks 
    const submitTask = (e) => {
        e.preventDefault();
        console.log("Submitting task")
        setListOfTasks([...listOfTasks, task]) //update the list of tasks to have whatever it currently holds plus the current task object that just got submitted
        // to clear out the form inputs first reset the state variable for form 
        setTask({
            nameOfTask: "",
            isComplete: false
        })

    }
    // complete a task 
    const checktask = (e, idx) => {
        console.log("Clicked on index", idx)
        let [...updatedListofTasks] = listOfTasks
        console.log("updated list is ", updatedListofTasks)
        updatedListofTasks[idx].isComplete = !updatedListofTasks[idx].isComplete //change the array of tasks at the index number we selected to the opposite of what it is
        setListOfTasks(updatedListofTasks)
    }
    //delete task
    const deletetask = (e, idx) => {
        let newlist = listOfTasks.filter((task, i) => {
            return i != idx
        })
        console.log(newlist)
        //update my state variable listOfTasks
        setListOfTasks(newlist)
    }

    return (
        <>
            <div>
                <h1>To Do List</h1>
                <div className="form-group">
                    <form onSubmit={submitTask}>
                        <label htmlFor="task">To Do:</label>
                        <input onChange={changehandler} value={task.nameOfTask} type="text" name="nameOfTask" id="task" className="form-control" placeholder="Add a Task" />
                        <input type="submit" value="Add" className="btn btn-primary m-3" />
                    </form>
                </div>
            </div>
            <div className="checklist">
                <h2>All Tasks</h2>
                <hr />
                {
                    listOfTasks.map((taskObj, i) => {
                        return (
                            <div key={i}>
                                <ul>
                                    <li className="item" style={{ textDecoration: taskObj.isComplete ? "line-through" : "none" }} >{taskObj.nameOfTask} <input type="checkbox" onClick={(e) => checktask(e, i)} />
                                        <button className="btn btn-danger ml-3" onClick={(e) => deletetask(e, i)}>Delete</button></li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

        </>
    );
};

export default Todolist;