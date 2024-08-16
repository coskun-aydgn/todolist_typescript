import React from 'react'
import { todotype } from './apptypes'

type PropsType={
    task:todotype
    deleteTask(nameToDelete:string):void
}

function TodoItem({task, deleteTask}:PropsType) {
  return (
    <div className="card">
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={()=>deleteTask(task.taskName)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
