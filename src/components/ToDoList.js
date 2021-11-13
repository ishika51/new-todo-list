import React, { useState } from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function ToDoList() {
    const [todos, setTodos] = useState([])
    // console.log(JSON.parse(localStorage.todos))
    // console.log(todos)

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
        // localStorage.setItem("todos", JSON.stringify(todos));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
        // localStorage.setItem("todos", JSON.stringify(todos));
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);

        // localStorage.setItem("todos", JSON.stringify(todos));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ToDoForm onSubmit={addTodo} />
            <ToDo
                // todos={JSON.parse(localStorage.todos)}
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default ToDoList
