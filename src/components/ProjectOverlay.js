import React from 'react';
import {useProjectsValue} from '../context';

export const ProjectOverlay = ({
    setProject,
    showProjectOverlay,
    setShowProjectOverlay,
}) => {
    const { projects } = useProjectsValue();

    return (
        projects &&
        showProjectOverlay && (
            <div className='project-overlay' data-testid='project-overlay'>
                <ul className='project-overlay__list'>
                    {projects.map(project => (
                        <li key={project.projectId}>
                            <div
                                aria-label='Select the task project'
                                onClick={() => {
                                    setProject(project.projectId);
                                    setShowProjectOverlay(false);
                                }}
                                onKeyDown={() => {
                                    setProject(project.projectId);
                                    setShowProjectOverlay(false);
                                }}
                                data-testid='project-overlay-action'
                                role='button'
                                tabIndex={0}>
                                    {project.name}
                            </div>    
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}