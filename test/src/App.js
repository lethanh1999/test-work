import React, {useState} from "react";
import NewTask from "./component/NewTask";
import TodoList from "./component/TodoList";
import { PRIORITY } from "./common/Constant";

function App() {
  var today = new Date();
  var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(date);
  const [priority, setPriority] = useState(PRIORITY.normal);
  const [todoList, setTodoList] = useState([]);

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
