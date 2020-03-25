import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

export default function Todo({ todo, toggleTodo, index, removeTodo }) {

	function handleTodoClick() {
		toggleTodo(todo.id);
	}

	function handleRemoveTodo() {
		removeTodo(todo.id);
	}

	const styles = {
		fxc: { display: 'flex', alignItems: 'center' }
	}

	return (
		<div style={styles.fxc}>
			<div>{index + 1} )</div>
			<Checkbox checked={todo.complete} onChange={handleTodoClick} />
			<div style={styles.fxc}>
				<div>{todo.name}</div>
				<IconButton onClick={handleRemoveTodo}><DeleteIcon /></IconButton>
			</div>
		</div>
	);
}

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	toggleTodo: PropTypes.func.isRequired
};