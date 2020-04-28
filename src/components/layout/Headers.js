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
                        <li 
                            data-testind='quick-add-task-action' 
                            classNema='setting__add'
                            onClick={() => {
                                setShowQuickAddTask(true);
                                setShowShouldMain(true);
                            }}
                            >
                            +
                        </li>
                        <li 
                            data-testind='dark-mode-action' 
                            classNema='settings__darkmode'
                            onClick={() => setDarkMode(!darkMode)}>
                            <FaListUl />
                        </li>
                    </ul>
                </div>
            </nav>

            <AddTask
                showAddTaskMain = {false}
                showShouldMain = {showShouldMain}
                showQuickAddTask = {showQuickAddTask}
                setShowQuickAddTask = {setShowQuickAddTask}/>
        </header>
    );
};
