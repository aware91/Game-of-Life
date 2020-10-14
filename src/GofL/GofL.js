import React from 'react';
import './GofL.css';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

function GofLBody() {
    return (
        <div>        
            <div className="Board" style={{ width: WIDTH, height: HEIGHT,  backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}>        
            </div>      
        </div>
    )
};

export default GofLBody;