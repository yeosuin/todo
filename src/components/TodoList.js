import React from 'react';

const TodoList = ({todo, setTodo, setEditTodo}) => {

    const handleEdit = ({id}) => {
        const findTodo = todo.find((atodo) => atodo.id === id);
        setEditTodo(findTodo);
    }

    const handleComplete = (atodo) => {
        setTodo(
            todo.map((item) => {
                if(item.id === atodo.id) {
                    return {...item, completed: !item.completed };
                }
                return item;
            })

        )
    }

    const handleDelete = ({id}) => {
        setTodo(todo.filter((atodo) => atodo.id !== id));
    };

  return (
    <div>
        {todo.map((atodo) => (
            <li className='list-item' key={atodo.id}>
                <input 
                    type="text" 
                    value={atodo.title} 
                    className={`list ${atodo.completed ? "complete" : ""}`} 
                    onChange={(event) => event.preventDefault()} 
                    />
                    <div>
                        <button className='button-complete task-button' 
                            onClick={() =>handleComplete(atodo)} >
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='button-edit task-button'
                            onClick={() => handleEdit(atodo)}>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button 
                            className='button-delete task-button' 
                            onClick={()=> handleDelete(atodo)}
                        >
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
            </li>
        ))}
    </div>);
};

export default TodoList;