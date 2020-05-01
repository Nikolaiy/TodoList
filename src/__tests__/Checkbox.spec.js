import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';

beforeEach(cleanup); // clean the DOM!

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    update: jest.fn(),
                })),
            })),
        })),
    },
}));

describe('<Checkbox />', () => {
    describe('Success', () => {
        it('render the task checkbox', () => {
            const { queryByTestId, debug } = render (
                <Checkbox id='1' taskDesc='Finish this tutorial series!' />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
        }); 

        it('render the task checkbox and accept a onClick', () => {
            const { queryByTestId, debug } = render (
                <Checkbox id='1' taskDesc='Finish this tutorial series!' />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.click(queryByTestId('checkbox-action'));
        });

        it('render the task checkbox and accept a onKeyDown', () => {
            const { queryByTestId, debug } = render (
                <Checkbox id='1' taskDesc='Finish this tutorial series!' />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.keyDown(queryByTestId('checkbox-action'));
        });
    });    
});