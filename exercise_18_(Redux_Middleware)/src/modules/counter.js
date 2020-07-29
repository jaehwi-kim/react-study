import { createAction, handleActions } from 'redux-actions';

// action type 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함 (thunk)
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
      dispatch(increase());
    }, 1000);
  };
  export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
      dispatch(decrease());
    }, 1000);
  };

// 초기 상태
const initialState = 0; // 상태는 꼭 객체일 필요가 없습니다. 숫자도 작동해요.

// reducer 함수
const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
  },
  initialState
);

export default counter;