import React from "react";
import styled from "styled-components";

const Todolistcontainer = styled.div`
  grid-area: 2/1/3/2;
`;

const TaskCardli = styled.li`
  background-color: rgb(251 220 230);
  border-radius: 10px;
  font-size: 2rem;
  padding-left: 2rem;
  margin: 1rem 0 0 8rem;
  min-height: 6rem;
  max-width: 70rem;
  flex-wrap: wrap;
  word-wrap: break-word;
  display: flex;
  align-items: center;
  white-space: normal; /* اجازه شکستن متن */
  overflow-wrap: break-word; /* پشتیبانی از مرورگرها */
  flex: 1; /* گسترش برای پر کردن فضای موجود */


   &.done {
    color: gray;
    text-decoration: line-through;
    opacity: 0.6;
  }
`;
const TaskName=styled.p`
  margin-left: 3rem;
  max-width: 60rem;
  width:45% ;
  word-wrap: break-word; /* شکستن کلمات بلند */
  white-space: normal; /* اجازه شکستن متن */
  overflow-wrap: break-word; /* پشتیبانی از مرورگرها */
  flex: 1; /* گسترش برای پر کردن فضای موجود */
`;

const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const CustomCheckmark = styled.span`
  height: 4rem;
  width: 4rem;
  border: 2px solid rgb(105, 80, 80);
  border-radius: 50%;
  background-color: transparent;
  display: inline-block;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 13px;
    top: 7px;
    width: 9px;
    height: 15px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }
`;


const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${CustomCheckmark} {
    background-color: rgb(105, 80, 80);
    border-color: rgb(251 220 230);
  }

  &:checked + ${CustomCheckmark}::after {
    display: block;
  }
`;

const Button=styled.button`

background-color: transparent;
border: none;
color: rgb(105, 80, 80);
font-size: 2.5rem; /* اندازه آیکون */
cursor: pointer;
margin-left: 20px;
transition: transform 0.2s ease, color 0.3s ease; /* انیمیشن هنگام کلیک یا تغییر رنگ */
padding: 10px;
display: flex;
align-items: center;
justify-content: center;

&:hover {
color: red; /* تغییر رنگ هنگام هاور */
transform: scale(1.1); /* بزرگ‌تر شدن هنگام هاور */
}
`;

const Tasklist = ({ tasks, onToggle, onDelete }) => {
  return (
          <Todolistcontainer>
      <ul>
        {tasks.map((task) => (

          <TaskCardli key={task.id}>
            <CheckboxWrapper>
            <HiddenCheckbox
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

              <CustomCheckmark/>
            </CheckboxWrapper>
            <TaskName className={task.completed ? "done" : ""}>
{task.name}
</TaskName>
            <Button onClick={() => onDelete(task.id)}>
  <i class="fas fa-trash-alt delete-btn"></i>
              </Button>

            </TaskCardli>
        ))}
      </ul>
    </Todolistcontainer>
  );
};

export default Tasklist;
