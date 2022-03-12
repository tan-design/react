import React from 'react';

function TodoTable(props) {
  return (
    <div>
      <table>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <th>Date</th>
              <td>{todo.date}</td>
              <th>Description</th>
              <td> {todo.description}</td>
              <td>
                <button onClick={() => props.deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TodoTable;
