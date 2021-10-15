import React,{useState} from 'react';
import {IoMdAdd} from "react-icons/io";
import './TodoForm.css'

function TodoForm(props) {
    const [input, setInput] = useState("");
    
    const handleHold = (event) => {
        const name = event.target.value;
        setInput(name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAdd(input);
        setInput("");
    }

    return (
        <div>
            <form>
                <input
                    style = { {backgroundColor : '#fff'} }
                    type = "text"
                    placeholder = "Add a todo"
                    value = {input} 
                    name = "input" 
                    onChange = {handleHold} 
                />

                <button 
                    style = { {backgroundColor : '#fff'} }
                    onClick = {handleSubmit}>
                    <IoMdAdd size='25' />
                </button>
            </form>
        </div>
    );
};

export default TodoForm
