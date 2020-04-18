import React from 'react';
import { FaListUl, FaMastodon  } from 'react-icons/fa'

export const Header = () => {
    return (
         <header className='header' data-testing='header'>
            <nav>
                <div className='logo' alt='todolist'>
                    <FaMastodon />
                </div>
                <div className="settings">
                    <ul>
                        <li data-testind='quick-add-task-action' classNema='setting__add'>+</li>
                        <li data-testind='dark-mode-action' classNema='settings__dark-mode'><FaListUl /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
