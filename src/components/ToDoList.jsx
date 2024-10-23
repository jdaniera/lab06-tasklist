import { useReducer } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import '../App.css'

export default function ToDoList() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
        <div className='add-box'> 
            <AddTask
                onAddTask={handleAddTask}
            />
        </div>
        <div>
              <h3>Task Remaining: {tasks.length}</h3> 
        </div>
        <div>
            <TaskList
                className="todolist"
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Redesign Draft BCITMA Website Landing Page', done: true },
  { id: 1, text: 'Sandbox Azure Speech API for Project 2', done: false },
  { id: 2, text: 'Marketing Meta Ads assignment', done: false }
];
