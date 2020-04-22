import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks'; 
import { collatedTasks } from '../constants';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';


export const Tasks = () => {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);

    let projectName = '';
    
    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
}

    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
}


    useEffect(() => {
        document.title = `${projectName}: TodoList`;
    });

    console.log('tasks', tasks)

    return (
        <div className='tasks' data-testid='tasks'>
            <h2 data-tetid='project-name'>{projectName}</h2>

            <ul className='tasks__list'>
                {tasks.map(task => ( 
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
    ))}
            </ul>
        </div>
    )
}