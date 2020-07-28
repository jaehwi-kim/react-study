import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     // state의 초깃값 설정
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }
    state = {
        number: 0,
        fixedNumber: 0,
    }

    render() {
        const { number, fixedNumber } = this.state; // this.state로 state조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼 클릭때 호출
                    onClick={() => {
                        // this.setState로 state변경
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1,
                            };
                        });
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1,
                            }
                        }, 
                            () => { console.log('set state hochul');}
                        );
                    }}
                >
                    +2
                </button>
            </div>
        );
    }
}

export default Counter;
