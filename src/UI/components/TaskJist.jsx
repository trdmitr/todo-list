import React from 'react'

const TaskJist = (props) => {
    console.log ('props: ', props.task.body)
    return (
        <div className="todo_container">
            <ul className="todo_list">
                <div className="todo">
                    <li className="todo_item">{props.task.body}</li>
                    <button className="complete_btn"><i className="fas fa-check" />
                    </button><button className="delete_btn">
                        <i className="fas fa-trash" />
                    </button>
                </div>
            </ul>
        </div>
    )
}
export default TaskJist 