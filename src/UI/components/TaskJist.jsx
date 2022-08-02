import React, { useState } from 'react'

const TaskJist = (props) => {
    console.log ('props: ', props.task.isCheck)
    const [isCheck, setCheck] = useState(false)
    return (
        <div className="todo_container">
            <ul className="todo_list">
                <div className="todo">
                    <li className={isCheck? "completedItem" : "todo_item"}>{props.task.body}</li>
                    <button className="complete_btn" onClick={() => setCheck(true)}><i className="fas fa-check" />
                    </button>
                    <button className="delete_btn">
                        <i className="fas fa-trash" />
                    </button>
                </div>
            </ul>
        </div>
    )
}
export default TaskJist 