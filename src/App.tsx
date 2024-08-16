import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import './App.css';
import {todotype} from './apptypes'
import TodoItem from './TodoItem';

function App() {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todotype[]>([])
  console.log(todoList);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
      if(event.target.name==='task'){
        setTask(event.target.value)
      }else{
        setWorkDay(Number(event.target.value))
      }
      // console.log(task, workDay)
  }
  const addNyTask =():void=>{
    const nyTask={taskName:task,workDay:workDay}
    setTodoList([...todoList,nyTask]);
    setTask('');
    setWorkDay(0);

  }
  const deleteTask=(nameToDelete:string):void=>{
    setTodoList(
      todoList.filter((task=>{
        return task.taskName!==nameToDelete;
      }))
    )
  }
  return (
    <div className="App">
     <div className="maincard">
      <input  className="maincardinput" type="text" placeholder='Taks name...' value={task} name='task' onChange={handleChange}/>
      <input  className="maincardinput" type="number" placeholder='How many days will the task be completed' value={workDay} name='workDay' onChange={handleChange}/>
      <button className="maincardbutton" onClick={addNyTask}>Add Ny Task</button>
     </div>
     <div className="todocart">
      {todoList.map((task:todotype,index:number)=>{
        return <TodoItem key={index} task={task} deleteTask={deleteTask}/>
      })}
     </div>
    </div>
  );
}

export default App;
