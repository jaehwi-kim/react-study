import React, { Component, useState } from 'react';

// //클래스형 이벤트
// class EventPractice extends Component {
//     state = {
//         username: '',
//         message: '',
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username: '',
//             message: '',
//         });
//     }

//     handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>event 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 ></input>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="amu"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 ></input>
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

const EventPractice = () => {
    const [form, setForm] = useState({
        userName: '',
        msg: '',
    });
    const { userName, msg } = form;
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form을 복사 (shallow copy)
            [e.target.name]: e.target.value // 원하는 값 엎어 씌우기
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(userName + ': ' + msg);
        setForm({
            userName: '',
            msg: '',
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    // const [userName, setUserName] = useState('');
    // const [msg, setMsg] = useState('');
    // const onChangeUsername = e => setUserName(e.target.value);
    // const onChangeMsg = e => setMsg(e.target.value);
    // const onClick = () => {
    //     alert(userName + ': ' + msg);
    //     setUserName('');
    //     setMsg('');
    // };

    // const onKeyPress = e => {
    //     if (e.key === 'Enter') {
    //         onClick();
    //     }
    // };

    return (
        <div>
            <h1>event 연습</h1>
            <input
                type="text"
                name="userName"
                placeholder="사용자명"
                value={userName}
                onChange={onChange}
            ></input>
            <input
                type="text"
                name="msg"
                placeholder="amu"
                value={msg}
                onChange={onChange}
                onKeyPress={onKeyPress}
            ></input>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;