import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from 'prop-types';

export default function Todo({ todo, toggleTodo, index }) {

	function handleTodoClick() {
		toggleTodo(todo.id);
	}

	return (
		<div>
			{index + 1} )
			<Checkbox checked={todo.complete} onChange={handleTodoClick} />
			{todo.name}
		</div>
	);
}

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	toggleTodo: PropTypes.func.isRequired
};