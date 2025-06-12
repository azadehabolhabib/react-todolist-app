import React ,{useState} from "react";
import styled from "styled-components";

const Form =styled.form`
  grid-area: 1/1/2/2;
  height: 10rem;
  display: flex;
  background-color: rgb(175, 115, 134);
  border-radius: 10px;
  font-size: 2.5rem;
  padding-left: 3rem;
  margin: 11rem 0 8rem 8rem;
`;

const Button =styled.button`
  justify-self: center;
  font-size: 4rem;
`;

const Input=styled.input`
  padding-left: 5rem;
  width: 55rem;

`;


const TaskInput =({onAddTask})=>{

  const [inputValue,setInputValue]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();//جلوگیری از بار گذاری مجدد
    if (inputValue.trim) {
      onAddTask(inputValue);//ارسال متن به والد
      setInputValue(""); // پاک کردن ورودی
    }
  };


    return(
              <Form  onSubmit={handleSubmit}>
        <Button type="submit">+</Button>
        <Input
          type="text"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          placeholder="import a new task ..."
        />
      </Form>


    );
}
export default TaskInput;