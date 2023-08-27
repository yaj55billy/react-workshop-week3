import propTypes from "prop-types";

const TodoItem = ({ id, content, status, toggleTodo, deleteTodo }) => {
	const atChange = () => {
		toggleTodo(id);
	};
	const atClick = () => {
		deleteTodo(id);
	};
	return (
		<li>
			<label className="todoList_label" htmlFor={id}>
				<input
					className="todoList_input"
					type="checkbox"
					id={id}
					checked={status}
					onChange={atChange}
				/>
				<span>{content}</span>
			</label>
			<button type="button" className="" onClick={atClick}>
				<i className="fa fa-times" />
			</button>
		</li>
	);
};

TodoItem.propTypes = {
	id: propTypes.string.isRequired,
	content: propTypes.string.isRequired,
	status: propTypes.bool.isRequired,
	toggleTodo: propTypes.func.isRequired,
	deleteTodo: propTypes.func.isRequired,
};

export default TodoItem;
