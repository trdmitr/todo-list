import React from 'react'
import TaskJist from './TaskJist'

const TaskItem = ({tasks}) => {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Список задач</h1>
       {tasks.map(task =>
        <TaskJist task={task} key={task.id}/>
        )}
    </div>
  )
}

export default TaskItem