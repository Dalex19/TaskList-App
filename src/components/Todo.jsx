import React, { useState } from 'react'
import {FaRegEdit, AiOutlineDelete} from 'react-icons/all'
import FormEdit from './FormEdit';

export default function Todo({ title, description, removeTask, id, updateTask}) {
  const [modeEdit, setModeEdit] = useState(false);

  const handleChange = () => {
    setModeEdit(true);
  };

  return (
    <div className=" rounded h-24 grid grid-cols-3 grid-rows-3 overflow-hidden transition-all ease-in border-2 border-cyan-500 hover:scale-105">
      {!modeEdit ? (
        <>
          <h2 className="col-span-2 font-bold text-center">{title}</h2>
          <Btn
            setModeEdit={handleChange}
            removeTask={removeTask}
            id={id}
          />
          <p className="row-span-2 col-span-3 pl-2">{description}</p>
        </>
      ) : (
        <div className='col-span-3 h-24 flex justify-center rounded'>
          <FormEdit setModeEdit={setModeEdit} updateTask={updateTask} id={id}/>
        </div>
      )}
    </div>
  );
}

const Btn = ({removeTask, id, setModeEdit}) => {

  const deleteTask = () => {
    removeTask(id)
  }

  return (
    <div className='flex gap-1 text-xl'>
      <button onClick={setModeEdit} className="text-blue-600 transition-all ease-in hover:scale-105"> <FaRegEdit /> </button>
      <button onClick={deleteTask} className="text-red-600 transition-all ease-in hover:scale-105"> <AiOutlineDelete /> </button>
    </div>
  )
}

