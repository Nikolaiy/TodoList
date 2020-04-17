import React from 'react';
import { FaBeer  } from 'react-icons/fa'
import { Content } from './Content'

export const Header = () => {
    return (
        <div className='header'>
            <nav>
                < FaBeer />
                +
            </nav>
            <div><Content /></div>
        </div>
    )
}
