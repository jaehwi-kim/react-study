import React, { Fragment } from 'react';
import './App.css'

function App() {
  // undefined값일때 보이는 문구!
  // const name = undefined;
  // return <div>{name || 'react'}</div>;
  const name = "재휘";
  // remove dash and make it camelCase
  // font-size => fontSize
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: '48px',
  //   fontWeight: 'bold',
  //   padding: 16, // px if without unit
  // }
  return (
    // 하나의 부모 요소가 없음으로 에러
    // <h1>안뇽 리액트!</h1>
    // <h2>작동 해라</h2>
        
    // 부모 요소 안에 있어 가능!
    // <div>
    //   <h1>안뇽 리액트!</h1>
    //   <h2>작동 해라</h2>
    // </div>
        
    // div대신 Fragment사용
    // <Fragment>
    //   <h1>안뇽 리액트!</h1>
    //   <h2>작동 해라</h2>
    // </Fragment>
        
    // JSX안에 JS표현 {...}
    // <>
    //   <h1>{name} 안뇽 리액트!</h1>
    //   <h2>작동 해라</h2>
    // </>
    
    // if 대신 조건부 연산자
    // <>
    //   {name === "재휘" ? (
    //     <h1>{name} 안뇽!</h1>
    //   ) : (
    //     <h2>작동 해라</h2>
    //   )}
    // </>
    
    // &&연산자를 사용하여 조건부 렌더
    // <>
    //   {name === "재휘" && <h1>{name} 안뇽!</h1>}
    //   {/* 예외: false값인 0는 화면에 표시! */}
    // </>

    // in-line styling
    // <div style={{
    //   backgroundColor: 'black',
    //   color: 'aqua',
    //   fontSize: '48px',
    //   fontWeight: 'bold',
    //   padding: 16, // px if without unit
    // }}>{name}</div>

    // using css class
    <div className="react">{name}</div>
  );
}

export default App;
