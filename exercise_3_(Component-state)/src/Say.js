import React, { useState } from 'react';

const Say = () => {
    const [msg, setMsg] = useState('');
    const onClickEnter = () => setMsg('hi');
    const onClickLeave = () => setMsg('bye');
    const [color, setColor] = useState('black');

    // spread는 shallow copy! deep copy를 하고싶으면 다른 방법을 찾아보자
    const object = { a: {b : 3}};
    let copyObj = {...object};
    copyObj.a.b = 0;
    console.log(object.a.b)
    
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