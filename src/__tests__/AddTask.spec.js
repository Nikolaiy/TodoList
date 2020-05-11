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

        // it('renders <AddTask /> for quick add task and then click cancel', () => {
        //     const showQuickAddTask = true;
        //     const setShowQuickAddTask = jest.fn(() => !showQuickAddTask );

        //     const { queryByTestId } = render(<AddTask 
        //         setShowQuickAddTask={setShowQuickAddTask}
        //         showQuickAddTask={true} />);

        //     fireEvent.click(queryByTestId('show-main-action'));
        //     expect(queryByTestId('add-task-main').toBeTruthy());

        //     fireEvent.click(queryByTestId('add-task-quick-cancel'));
        //     expect(setShowQuickAddTask).toHaveBeenCalled();
        // });

        it('render <AddTask /> and adds a task to the inbox and clears state', () => {
            useSelectedProjectValue.mockImplementation(() => {
                selectedProject: 'TODAY'
            });

            const {queryByTestId } = render (
                <AddTask showQuickAddTask = {false} />
            );
            fireEvent.click(queryByTestId('show-main-action'));
            expect(queryByTestId('add-task-content')).toBeTruthy();

            fireEvent.change(queryByTestId('add-task-content'), {
                target: { value: 'I am a new task and I am amazing!'}
            });
            expect(queryByTestId('add-task-content').value).toBe(
                'I am a new task and I am amazing!'
            );

            fireEvent.click(queryByTestId('add-task'));
            expect(queryByTestId('add-task-main')).toBeTruthy();
        });
        
        
    });
});
