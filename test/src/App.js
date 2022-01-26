import React, {useState} from "react";
import NewTask from "./component/NewTask";
import TodoList from "./component/TodoList";
import StorageUtils, { STORAGE_KEYS } from "./common/Storage";
import { PRIORITY } from "./common/Constant";

function App() {

  // const todoList = StorageUtils.getItem(STORAGE_KEYS.todoList, []);
  var today = new Date();
  var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(date);
  const [priority, setPriority] = useState(PRIORITY.normal);
  const [todoList, setTodoList] = useState([]);

  const handleAddNewTask = () => {
    // console.log('dfddsfsdfsdfsdfs')

    const currentTodolist = [...todoList];
    console.log('currentTodolist',currentTodolist);
    // console.log('title',title);
    // console.log('description',description);
    // console.log('dueDate',dueDate);
    // console.log('priority',priority);
    
    if(title && description && dueDate && priority) {
      const newTask = { 
        title,
        description,
        dueDate,
        priority

      }
      
      currentTodolist.push(newTask);
      StorageUtils.setItem(STORAGE_KEYS.todoList, currentTodolist);
      setTitle('');
      setDescription('');
      setDueDate(date);
      setPriority(PRIORITY.normal);
    }
  }

  // const setTodoList = () => {
    
  // }

  // const handleChangeTitle = (title) => {
  //   setTitle(title);
  // }

  // const handleChangeDescription = (description) => {
  //   setDescription(description);
  // }

  // const handleChangeDuaDate = (duaDate) => {
  //   setTitle(duaDate);
  // }

  // const handleChangePriority = (priority) => {
  //   setPriority(priority);
  // }

  return (
    <div className="d-flex">
      <NewTask 
        title={title} 
        description={description} 
        dueDate={dueDate} 
        priority={priority}
        todoList={todoList}
        setTitle={setTitle}
        setDescription={setDescription}
        setDueDate={setDueDate}
        setPriority={setPriority}
        setTodoList={setTodoList}
      />
      <TodoList 
        title={title} 
        description={description} 
        dueDate={dueDate} 
        priority={priority}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}


export default App;
