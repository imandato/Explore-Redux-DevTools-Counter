import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, clearTodos } from './features/todoSlice'

const Todo = () => {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [ input, setInput ] = useState('')



    const renderItems = items.map((item,index)=><li key={index} onClick={() =>dispatch(removeTodo(index))}>{item}</li>)

    const clearItems = () => {dispatch(clearTodos())}

    const submitTodo = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <ul>{renderItems}</ul>
            <form onSubmit={(e)=> submitTodo(e)}>
                <input type="text" onChange={(e)=>setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={clearItems}>Clear</button>
        </div>
    )
}

export default Todo
