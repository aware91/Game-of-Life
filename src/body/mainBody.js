import React from 'react';
import CABody from '../CA-grid/ca-body.js';
import Examples from './examples.js';
import './body.css';

function mainBody() {
    return (
        <div className='mainBody'>
            <div className='caBody'>
                <h3>Generation: </h3>
                <CABody />
                <div className='caButtons'>
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