import React from 'react'
import {BsSave} from 'react-icons/all'

export default function  Form({setTasks}) {
  const addTask = (e) => {
    e.preventDefault()
    const task = {
      title: e.target.title.value,
      description: e.target.description.value
    }
    setTasks(prevTask => [...prevTask, task])
  };
  
  return (
    <div className=" overflow-hidden">
      <form
        onSubmit={addTask}
        className="w-full h-36 md:h-40 lg:h-52 opacity-90  flex flex-col justify-center gap-3 items-center"
      >
        <input
          type="text"
          name="title"
          autoComplete='off'
          className="inline-flex md:w-3/4 lg:w-2/4 rounded-sm text-center shadow shadow-black bg-transparent outline-none"
          placeholder="Tittle"
        />
        <textarea
          type="text"
          name="description"
          className="inline-flex resize-none md:w-3/4 lg:w-2/4 text-center shadow shadow-black rounded-sm outline-none bg-transparent"
          placeholder="Description"
        />
        <button className="text-3xl transition-all ease-in-out text-blue-700 hover:scale-110">
          <BsSave />
        </button>
      </form>
    </div>
  );
}
