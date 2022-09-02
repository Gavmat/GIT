import React from 'react';
import './board.css'
import Square from './square';

const Board = () => {
    return (
        <div className='board'>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );
}

export default Board;
