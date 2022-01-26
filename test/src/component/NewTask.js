import React from 'react';
import './new-task.css';
import { PRIORITY } from '../common/Constant';

const NewTask = ({title, description, dueDate, priority, todoList, setTitle, setDescription, setDueDate, setPriority, setTodoList}) => {
  var today = new Date();
  var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

  const handleAddNewTask = () => {
    const currentTodolist = [...todoList];
    if(title && description && dueDate && priority) {
      const newTask = { 
        title,
        description,
        dueDate,
        priority,
        isChecked: false
      }
      currentTodolist.push(newTask);
      setTitle('');
      setDescription('');
      setDueDate(date);
      setPriority(PRIORITY.normal);
      setTodoList(currentTodolist);
    }
  }

  return(
    <div className='creat-new-task'>
      <div className='add-task'>
        <div className='add-task-title'>New Task</div>
        <div>
          <input 
            className='add-new-task'
            placeholder='Add new task...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name='title'
          />
        </div>
        <div className='padding-top-30'>
          <div className='font-weight-500'>Description</div>
          <textarea 
            className='description-content'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            >
            
          </textarea>
        </div>
        <div className='padding-top-30 d-flex'>
          <div>
            <div className='font-weight-500'>Due Date</div>
            <div>
              <input 
                  className='input-date'
                  type="date" 
                  id="birthday" 
                  name="birthday"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  />
            </div>
          </div>
          <div className='ml-auto'>
            <div className='font-weight-500'>Priority</div>
            <div>
              <select
                className='input-date'
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value={PRIORITY.normal}>Normal</option>
                <option value={PRIORITY.low}>Low</option>
                <option value={PRIORITY.hight}>Hight</option>
              </select>
            </div>
          </div>
          
        </div>
        <div className='padding-top-50'>
          <button className='button-add' onClick={handleAddNewTask}>Add</button>
        </div>
      </div>
    </div>
  )
}
export default NewTask;