import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ProjectOverlay } from '../components/ProjectOverlay';
import { useProjectsValue } from '../context';

beforeEach(cleanup);

jest.mock('../context', () => ({
    useProjectsValue: jest.fn(() => ({
        projects: [
            {
            name: "Music",
            projectId: "1",
            userId: "yAL3TZxvbdfda" ,
        },
    ],
    })),
}));

describe('<ProjectOverlay>', () => {

    // afterEach(() => {
    //     jest.clearAllMock();
    // });

    describe('Success', () => {
        it('renders the project overlay and calls setShowProjectOverlay using onClick', () => {
            const showProjectOverlay = true;
            const setProject = jest.fn();
            const setShowProjectOverlay = jest.fn(() => !showProjectOverlay);

            const { queryByTestId } = render (
                    <ProjectOverlay 
                        showProjectOverlay 
                        setProject={ setProject } 
                        setShowProjectOverlay={setShowProjectOverlay}
                    />
                );
                
            expect(queryByTestId('project-overlay')).toBeTruthy();
            fireEvent.click(queryByTestId('project-overlay-action'));
            expect(setProject).toHaveBeenCalled();
        });

        it('renders the project overlay and calls setShowProjectOverlay using onKeyDown', () => {
            const showProjectOverlay = true;
            const setProject = jest.fn();
            const setShowProjectOverlay = jest.fn(() => !showProjectOverlay);

            const { queryByTestId } = render (
                    <ProjectOverlay 
                        showProjectOverlay 
                        setProject={ setProject } 
                        setShowProjectOverlay={setShowProjectOverlay}
                    />
                );
                
            expect(queryByTestId('project-overlay')).toBeTruthy();
            fireEvent.keyDown(queryByTestId('project-overlay-action'));
            expect(setProject).toHaveBeenCalled();
        });
    });

    describe('Failure', () => {
        it("does not render the project overlay with any projects", () => {
            useProjectsValue.mockImplementation(() => ({
                projects: [],
            }));

            const { queryByTestId } = render(<ProjectOverlay showProjectOverlay />);
            expect(queryByTestId('project-overlay')).toBeTruthy();
            expect(queryByTestId('project-overlay-action')).toBeFalsy();
        });
    });
});
