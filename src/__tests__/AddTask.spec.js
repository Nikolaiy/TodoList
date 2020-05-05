import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { firebase } from '../firebase';
import { AddTask } from '../components/AddTask';
import { useSelectedProjectValue } from '../context';

beforeEach(cleanup);

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(() => ({ selectedProject: 1 })),
    useProjectsValue: jest.fn(() => ({ projects: [] })),
}));

jest.mock('../firebase', () => ({
    firebase: {
        feristore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve('Never mock firebase'))
            })),
        })),
    },
}));

describe('<AddTask />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Success', () => {
        it('renders the <AddTask />', () => {
            const { queryByTestId } = render(<AddTask />);
            expect( queryByTestId('add-task-comp')).toBeTruthy();
        }); 

        it('render the <AddTask /> quick overlay', () => {
            const setShowQuickAddTask = jest.fn();

            const { queryByTestId } = render(
                <AddTask 
                    showAddTaskMain
                    showShouldMain={false}
                    showQuickAddTask
                    setShowQuickAddTask = { setShowQuickAddTask } 
                />
            );

            expect(queryByTestId('quick-add-task')).toBeTruthy();
        });

        it('render the <AddTask /> main showable when clicked', () => {
            const { queryByTestId } = render(<AddTask showAddTaskMain/>);

            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();
        })

        it('render the <AddTask /> project overlay when clicked', () => {
            const { queryByTestId } = render(<AddTask showAddTaskMain/>);

            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();

            fireEvent.click(queryByTestId('add-project-overlay'));
            expect(queryByTestId('project-overlay')).toBeTruthy();
        })

        it('render the <AddTask /> task date overlay when clicked', () => {
            const { queryByTestId } = render(<AddTask showAddTaskMain/>);

            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();

            fireEvent.click(queryByTestId('add-task-date-overlay'));
            expect(queryByTestId('task-date-overlay')).toBeTruthy();
        })

        it('hides the <AddTask /> main when cancel is clicked', () => {
            const { queryByTestId } = render(<AddTask showAddTaskMain/>);

            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-main')).toBeTruthy();

            fireEvent.click(queryByTestId('add-task-main-cancel'));
            expect(queryByTestId('add-task-main')).toBeFalsy();
        })

       
        
    });
});
