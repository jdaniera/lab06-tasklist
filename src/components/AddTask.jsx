"use client"
import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
    <div className='add-task'>
      <input
        className='input-field'
        placeholder="Add task"
        value={text}
        alt="Add task"
        onChange={e => setText(e.target.value)}
      />

      <button 
        className='button-add'
        onClick={() => {
        setText('');
        onAddTask(text);
      }}>+ Add Task</button>
    </div>
    </>
  )
}
