import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './useInputState';

function EditTodoForm({ editTodo, id, task, toggleEdit }) {
	const [ value, handleChange, reset ] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
				toggleEdit();
			}}
		>
			<TextField margin="normal" value={value} onChange={handleChange} fullWidth />
		</form>
	);
}

export default EditTodoForm;
