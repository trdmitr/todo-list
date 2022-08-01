import React from 'react'
import TaskJist from './TaskJist'

const TaskItem = ({tasks, title }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {tasks.map((task, index) =>
                <TaskJist task={task} key={task.id} />
            )}
        </div>
    )
}

export default TaskItem