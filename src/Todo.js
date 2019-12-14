import React from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './useToggleState';
import EditTodoForm from './EditTodoForm';

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
	const [ isEditing, toggle ] = useToggleState();
	return (
		<div>
			<ListItem>
        {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEdit={toggle}/> : 
        <>
				<Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
				<ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
				<ListItemSecondaryAction>
					<IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
						<DeleteIcon />
					</IconButton>
					<IconButton aria-label="Edit" onClick={toggle}>
						<EditIcon />
					</IconButton>
				</ListItemSecondaryAction>
        </>
        }
			</ListItem>
		</div>
	);
}

export default Todo;
