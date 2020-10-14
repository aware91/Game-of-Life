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
                <div className='goflButtons'>
                    <button>Play</button>
                    <button>Stop</button>
                    <button>Clear</button>
                </div>
            </div>
            <Examples />
        </div>
    )
}

export default mainBody;