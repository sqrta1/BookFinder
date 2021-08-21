import React from 'react';

import './LoadMoreBtn.css';

export function LoadMoreBtn(props) {
    return(
        <div className='loadBtn'>
            <button name='button' className='myButton' style={{display: props.display}} onClick={props.onClick}>Load more!</button>
        </div>
    )
}