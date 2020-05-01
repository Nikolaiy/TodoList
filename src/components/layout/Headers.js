import React, {useState} from 'react';
import { FaListUl, FaMastodon  } from 'react-icons/fa'
import {AddTask} from '../AddTask'

export const Header = ({ darkMode, setDarkMode }) => {

    const [showShouldMain, setShowShouldMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return ( 
         <header className='header' data-testing='header'>
            <nav>
                <div className='logo' alt='todolist'>
                    <FaMastodon />
                </div>
                <div className="settings">
                    <ul>
                        <li data-testind='quick-add-task-action' className='setting__add'>
                            <button 
                                aria-label='Quick add task'
                                type='button'
                                onClick={() => {
                                    setShowQuickAddTask(true);
                                    setShowShouldMain(true);
                                }}
                                onKeyDown={() => {
                                    setShowQuickAddTask(true);
                                    setShowShouldMain(true);
                            }}>
                                +
                            </button>
                        </li>
                        <li 
                            data-testind='dark-mode-action' 
                            className='settings__darkmode'>
                            <button
                                aria-label='Darkmode on/off'
                                type='button'
                                onClick={() => setDarkMode(!darkMode)}
                                onKeyDown={() => setDarkMode(!darkMode)}>
                                    <FaListUl />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <AddTask
                showAddTaskMain = {false}
                showShouldMain = {showShouldMain}
                showQuickAddTask = {showQuickAddTask}
                setShowQuickAddTask = {setShowQuickAddTask}
                /> 
        </header>
    );
};
