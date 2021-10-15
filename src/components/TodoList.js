import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [open, setOpen] = useState(false);

    const addTodo = (input) => {
        if (!input || /^\s*$/.input) {
            return
        } else { setTodos(prevtodos => {
                return [...prevtodos, input]
            })
        }
    }

    const deleteTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter((todo, index) => {
              return index !== id
            })
        })
    }

    const changeTime = () => {
        setOpen(!open);
        if (open === false) {
            document.querySelector('body').style.backgroundColor = '#000'
            document.querySelector('input').style.backgroundColor = '#333333'
            document.querySelector('form button').style.backgroundColor = '#333333'
        } else {
            document.querySelector('body').style.backgroundColor = '#fff'
            document.querySelector('input').style.backgroundColor = '#fff'
            document.querySelector('form button').style.backgroundColor = '#fff'
        }
    };

    return (
        <div className='Top'>
            <div className= {open === true ? ('Heading H2') : ('Heading H1')} >
                <div className="Head">
                    <h1 style = { open === true ? ( { color : 'black' } ) : ( { color : 'white' } ) }>TODO</h1>
                    <div onClick = {changeTime}>
                        {open === true ? (<img src = {sun} />) : (<img src = {moon} />)}
                    </div>
                </div>

                <TodoForm
                    onAdd = {addTodo}
                />

            </div>
            <div className='Todoitems' style = { open === true ? ({ backgroundColor : '#333333' }) : ({backgroundColor : '#fff'})}>
                <ul>
                    {todos.map((todo, index) => (
                        <Todo
                            key = {index}
                            id = {index}   
                            text = {todo}
                            onChecked = {deleteTodo}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
