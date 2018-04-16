import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='User-output'>
            <p className='User-output-intro'>Hi! this {props.name} I am learning {props.course} using resources from Udemy</p>
            <p>This is my first react assignment for {props.course} course</p>
        </div>
    );
}

export default userOutput;