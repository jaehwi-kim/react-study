import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "재휘";
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
    <>
      {name === "재휘" && <h1>{name} 안뇽!</h1>}
      {/* 예외: false값인 0는 화면에 표시! */}
    </>
  );
}

export default App;
