import React from 'react';
import GofLBody from '../GofL/GofL.js';
import Examples from './examples.js';
import './body.css';

function mainBody() {
    return (
        <div className='mainBody'>
            <div className='goflBody'>
                <h3>Generation: </h3>
                <GofLBody />
            </div>
            <Examples />
        </div>
    )
}

export default mainBody;