import React from 'react';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = ({
    setTaskDate,
    showTaskDate,
    setShowTaskDate
}) => {
    return (
        showTaskDate && 
        ( <div className='task-date' data-testid='task-date-overlay'>
                <ul className='task-date__list'>
                    <li>
                        <div 
                            aria-label='Select today as the task date'
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(moment()
                                    .format('DD-MM-YYYY'));
                            }}
                            onKeyDown={() => {
                                setShowTaskDate(false);
                                setTaskDate(moment()
                                    .format('DD-MM-YYYY'));
                            }}
                            data-testid='task-date-today'
                            role='button'
                            tabIndex={0}>
                                <span>
                                    <FaSpaceShuttle />
                                </span>
                                <span>Today</span>
                        </div>
                    </li>
                    <li>
                        <div 
                            aria-label='Select tomorrow as the task date'
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(moment()
                                    .add(1, 'day')
                                    .format('DD-MM-YYYY'));
                            }}
                            onKeyDown={() => {
                                setShowTaskDate(false);
                                setTaskDate(moment()
                                    .add(1, 'day')
                                    .format('DD-MM-YYYY'));
                            }}
                            data-testid='task-date-tomorrow'
                            role='button'
                            tabIndex={0}>
                                <span>
                                    <FaSun />
                                </span>
                                <span>Tomorrow</span>
                        </div>
                    </li>
                    <li>
                        <div 
                            aria-label='Select next week as the task date'
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(moment()
                                    .add(7, 'day')
                                    .format('DD-MM-YYYY'));
                            }}
                            onKeyDown={() => {
                                setShowTaskDate(false);
                                setTaskDate(moment()
                                    .add(7, 'day')
                                    .format('DD-MM-YYYY'));
                            }}
                            data-testid='task-date-next-week'
                            role='button'
                            tabIndex={0}
                        >
                                <span>
                                    <FaRegPaperPlane />
                                </span>
                                <span>Next week</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    )
};