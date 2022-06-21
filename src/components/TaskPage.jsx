import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo'

export default function TaskPage() {
  const [tasks, setTasks] = useState([])

const removeTask = id => {
  const tasksFilters = tasks.filter((item, index) => index !== id)
  setTasks(tasksFilters)
}
const updateTask = (task, id) => {
  const updateList = tasks.map((item, index) => {
   if(index === id) {
     item = task;
   }
   return item;
  })
  setTasks(updateList)
} 

  return (
    <div className="relative bg-white rounded-md overflow-hidden min-h-[444px]  gap-x-2 p-2 w-3/4">
      <h1 className="text-6xl text-left">Task List</h1>
      <Form setTasks={setTasks} />
      <div className="rounded-lg grid md:grid-cols-2 lg:grid-cols-4 grid-rows-3 relative gap-2 p-2 h-96">
        {tasks.map((task, index) => (
          <Todo
            key={index}
            title={task.title}
            removeTask={removeTask}
            description={task.description}
            id={index}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}
