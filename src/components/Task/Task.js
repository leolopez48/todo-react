import React from 'react'
import { useSelector } from "react-redux";
import './Task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Task = ({ colSpan }) => {

    const state = useSelector(state => state)

    return (
        <>
            {(state.taskReducer.tasks.length > 0) ?
                state.taskReducer.tasks.map((task, index) =>
                    <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2" key={index}>
                        <div className="row task m-1 shadow" >
                            <div className="col-1 col-md-1 offset-md-1 pt-2">
                                <input type="checkbox" checked={task.completed} onChange={() => task.completed} />
                            </div>
                            <div className="col-7 col-md-6 pt-2">
                                <p className="form-check-label">{task.activity}</p>

                            </div>
                            <div className="col-3 col-md-3 text-right">
                                <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} className="text-red" /></button>
                            </div>
                        </div>
                    </div>
                    // <tr key={index} >
                    //     <td>
                    //     </td>
                    //     <td><p className="form-check-label">{task.activity}</p></td>
                    //     <td><button className="btn btn-danger">Eliminar</button></td>
                    // </tr>
                ) : (
                    <div className='text-center'>No hay tareas por completar.</div>
                )
            }
        </>
    )
}

export default Task
