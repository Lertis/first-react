import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";

export default function Todo({ todo, toggleTodo }) {

	function handleTodoClick() {
		toggleTodo(todo.id);
	}

	return (
		<div>
			<Checkbox checked={todo.complete} onChange={handleTodoClick} />
			{todo.name}
		</div>
	);
}