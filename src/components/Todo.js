import React,{useState} from 'react';
import {MdDelete} from "react-icons/md"
import './Todo.css'


function Todo(props) {
    return (
        <div className="list">
            <li>
                {props.text}
            </li>

            <button onClick={() => {
                props.onChecked(props.id);
            }}>
                <MdDelete 
                    size='25'
                />
            </button>
        </div>
    )
}

export default Todo
