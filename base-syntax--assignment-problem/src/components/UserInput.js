import React from 'react';


const userInput = (props) => {
    const style ={
        padding: '12px 20px',
        borderRadius: '5px 5px 5px 5px',
        border: '2px solid black',
        alignItems: 'center',
        margin: '15px',
        textAlign: 'center',
        fontSize: '50px'
    };

    return (       
        <div>
            <input type='text'  onChange={props.change} value={props.name} style={style} />
        </div>
    );
}

export default userInput;