import React,{useState} from "react";
import styled from "styled-components";
import TaskInput from './task-input';
import TaskList from "./task-list";


const Appcontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  `;

  
  
  const Firstdiv = () => {

  //لیست وظایف
  const [tasks,setTasks]=useState([]);

  //تابع برای اضافه کردن وظایف جدید
  const addTask=(taskname)=>{
    const newtask={
      id:Date.now(),
      name:taskname,
      completed:false
    };
  setTasks([...tasks,newtask]);
  };

  const toggleTask=(id)=>{
    setTasks((prevTasks)=>
    prevTasks.map((task)=>
      task.id===id?{...task,completed:!task.completed}:task));
  };

  const onDeleteTask=(id)=>{
    setTasks((prevTasks)=>prevTasks.filter((task)=>!task.id===id))
        };

  return (
    <Appcontainer>
      <TaskInput   onAddTask={addTask}/>
      <TaskList    tasks={tasks}  onToggle={toggleTask}  onDelete={onDeleteTask}/>
    </Appcontainer>
  );
};

export default Firstdiv;
