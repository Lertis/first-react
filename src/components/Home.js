import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import TodoList from './TodoList';

import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function Home() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (storedTodos) setTodos(storedTodos)
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
	}, [todos])

	function toggleTodo(id) {
		const newTodos = [...todos];
		const todo = newTodos.find(todo => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(newTodos);
	}

	function handleAddTodo() {
		setTodos(prevTodos => {
			return [...prevTodos, { id: uuidv4(), name: inputValue, complete: false }]
		})
		setInputValue('');
	}

	function handleClearTodo() {
		setTodos([]);
	}

	return (
		<>
			<div>
				<div className="flex-row">
				<TextField className="fr-m" id="standard-basic" label="Add something to do..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
					<Button className="fr-m" variant="contained" color="primary" onClick={handleAddTodo}>Add Todo</Button>
					<Button className="fr-m" variant="contained" color="primary" onClick={handleClearTodo}>Clear Todo</Button>
				</div>
				<TodoList todos={todos} toggleTodo={toggleTodo} />
				<div>{todos.filter(todo => !todo.complete).length} left to do</div>
			</div>
		</>
	);
};
