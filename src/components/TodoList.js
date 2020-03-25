import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo, removeTodo }) {
	return (
		todos.map((todo, index) => {
			return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} index={index} removeTodo={removeTodo} />
		})
	);
}