import React, {useState} from 'react'
import {HiOutlineSave} from 'react-icons/all'

export default function FormEdit({setModeEdit, updateTask, id}) {
    const [task, setTask] = useState({
        title: "",
        description:""
    })
    const getTask = e => {
        const {name, value} = e.target
        const newTask = {
            ...task,
            [name] : value,
        }
        setTask(newTask)
    }
    const handleEdit = e => {
        e.preventDefault()
        updateTask(task, id)
        setModeEdit(false)
    }
  return (
    
      <form onSubmit={handleEdit}
      className='w-full flex flex-col gap-2 justify-center items-center relative h-full'>
        <input
          type="text"
          value={task.title}
          onChange={getTask}
          name="title"
          placeholder="set tittle"
          className='rounded shadow text-center w-3/4 outline-none focus:border focus:border-black bg-transparent'
        />
        <input
          type="text"
          value={task.description}
          onChange={getTask}
          name="description"
          placeholder="description"
          className='h-8 w-3/4 shadow text-center outline-none rounded bg-transparent focus:border focus:border-black'
        />
        <button className='text-3xl  absolute right-0 '>
          <HiOutlineSave />
        </button>
      </form>
    
  );
}
