import React, { useState, useEffect } from 'react';
import axios from 'axios'

const TaskList = () => {

    const [allTasks, setAllTasks] = useState([]);
    const [submitToggle, setSubmitToggle] = useState(false);
    const [deleteToggle, setDeleteToggle] = useState(false)

    const [formInfo, setFormInfo] = useState({
        task: "",
        completed: false
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/task")
            .then(response => {
                console.log("response when getting all tasks-->", response)
                console.log(response.data)
                setAllTasks(response.data)
            })
            .catch(err => console.log("error", err))
    }, [submitToggle, deleteToggle]);

    const changeHandler = (e) => {
        console.log("changing the form!")
        setFormInfo({
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Trying to submit task form!")
        console.log("Form info", formInfo)
        axios.post("http://localhost:8000/api/task/create", formInfo)
            .then(response => {
                console.log(response)
                if (!response.data.err) {

                    setFormInfo({
                        task: "",
                        completed: false
                    })
                }
                setSubmitToggle(!submitToggle)
            })
    }

    // const checkCompleted = (e, idOfTask) => {
    //     console.log("checking if completed", idOfTask)
    //     axios.put(`http://localhost:8000/api/task/update/${idOfTask}`)
    //         .then(response => {
    //             console.log(response)
    //             setFormInfo({
    //                 ...formInfo,
    //                 completed: !formInfo.completed
    //             })
    //         })
    //     console.log(formInfo)
    // }

    const deleteTask = (e, idOfTask) => {
        console.log("deleting task with id", idOfTask)
        axios.delete(`http://localhost:8000/api/task/delete/${idOfTask}`)
            .then(response => {
                console.log("successful delete of", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h3>TO-DO List</h3>
            <form onSubmit={submitHandler} className='to-do-form'>
                <div className='form-group'>
                    <input onChange={changeHandler} type="text" name='task' placeholder='Add a New To-Do' value={formInfo.name} />
                    <button type='submit' className='ms-3 btn btn-primary'>Add Task</button>
                </div>
            </form>
            <div className='all-tasks'>
                <div>
                    {
                        allTasks.map((object, i) => {
                            return (
                                <div className='one-task'>
                                    <input className='checkbox' type="checkbox" name='completed' id="completed" value={formInfo.completed} />
                                    <p key={i}>{object.task}</p>
                                    <button onClick={(e) => deleteTask(e, object._id)} className="btn btn-danger ms-3">Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
};

export default TaskList;
