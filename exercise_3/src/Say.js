import React, { useState } from 'react';

const Say = () => {
    const [msg, setMsg] = useState('');
    const onClickEnter = () => setMsg('hi');
    const onClickLeave = () => setMsg('bye');
    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>enter</button>
            <button onClick={onClickLeave}>exit</button>
            <h1 style={{color}}>{msg}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>red</button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>green</button>
            <button style={{color: 'yellow'}} onClick={() => setColor('yellow')}>yellow</button>
        </div>
    )
}

export default Say;