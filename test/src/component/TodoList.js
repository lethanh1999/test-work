import React from "react";

const TodoList = ({todoList, setTodoList}) => {

  const handleDelete = (job) => {
    const currentTodolist = [...todoList];
    let currentTodo = currentTodolist.filter(item  => item.title !== job.title);
    setTodoList(currentTodo)
  }

  const handleChangeCheckbox = (event, index) => {
    const {checked} = event.target;
    let newTodoList = [...todoList];
    let newItem = newTodoList[index];
    newItem.isChecked = checked;
    setTodoList(newTodoList);
  }

  return(
    <div className="creat-new-task bd-left-none">
      <div className='add-task'>
        <div className='add-task-title'>To Do list</div>
          <div>
            <input 
              className='add-new-task'
              placeholder='Search...'
            />
          </div>
          {
            todoList.map((item, index) => {
              return(
                <>
                  <div className="d-flex padding-top-30" key={index}>
                    <input 
                      type="checkbox"
                      className="check-box-task"
                      onChange={(event) => handleChangeCheckbox(event, index)}
                    />
                    <span className="margin-left-10">{item.title}</span>
                    <button className="button-todo ml-auto">Detail</button>
                    <button 
                      className={item.isChecked ? "button-todo button-todo-remove margin-left-10 button-active": "button-todo button-todo-remove margin-left-10"} 
                      onClick={() => handleDelete(item)}
                      disabled={!item.isChecked}
                      >
                        Remove
                    </button>
                  </div>
                </>
              )
            })
          }
      </div>
      <footer>
        <div className="d-flex footer-bulk">
          <span className="margin-left-10">Bulk Action:</span>
          <button className="ml-auto button-todo button-done">Done</button>
          <button className="margin-right-10 button-todo button-todo-remove button-todo-remove-done margin-left-10">Remove</button>
        </div>
      </footer>
    </div>
  )
}
export default TodoList;