import { useState } from 'react';
import '../App.css'

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
  
    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={e => {
              onChange({
                ...task,
                text: e.target.value
              });
            }} />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      taskContent = (
        <>
          <span style={{
            textDecoration: task.done ? 'line-through' : 'none'
          }}>
            {task.text}
          </span>
        </>
      );
    }
  
    return (
      <label>
        <span style={{ marginLeft: '10px', minWidth: '100px', display: 'inline-block', color:'green'}}>
            {task.done ? 'Great Job!' : '\u00A0'}
        </span>
        <input
          className='check-box'
          type="checkbox"
          checked={task.done}
          onChange={e => {
            onChange({
              ...task,
              done: e.target.checked
            });
          }}
        />
        {taskContent}
        <button 
          className='button-delete'
          onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </label>
    );
}
