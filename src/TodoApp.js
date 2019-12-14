import React, { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

function TodoApp() {
	const initialTodos = [
		{ id: 1, task: 'Learn React JS', completed: false },
		{ id: 2, task: 'Start Lambda School', completed: true },
		{ id: 3, task: 'Fill out job applications', completed: false }
	];
	const [ todos, setTodos ] = useState(initialTodos);

	const addTodo = (newTodoText) => {
		setTodos([ ...todos, { id: uuid(), task: newTodoText, completed: false } ]);
	};

	const removeTodo = (todoId) => {
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = (todoId) => {
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newTask) => {
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, task: newTask } : todo));
		setTodos(updatedTodos);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa'
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">Todos With Hooks</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;

/* TodoApp
---//Todo Form
---//TodoList
----//TodoItem

//id, task, completed
*/
