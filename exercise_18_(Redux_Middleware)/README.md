## Exercise 18

Redux Middleware

### Redux Middleware

* 리액트 애플리케이션에서 API서버를 연동시 API요청에 대한 상태도 관리해야함
  * 요청이 시작되었을 때는 로딩중, 요청이 성공시 받아온 응답에 대한 상태관리와 로딩 끝, 요청 실패시 서버에 반환한 에러의 상태 관리와 로딩 끝
* 미들웨어를 사용하여 비동기 작업 관리

## counter

* create redux module (modules/counter.js)
* create root reducer (modules/index.js)
* create store and use Provider to apply redux to react (src/index.js)
* create counter(presentational) component and container component (components/Counter.js, containers/CounterContainer.js)
* render container in App (App.js)

```
src
│   App.js (6. render the container)
│   index.js (3. create store and apply redux using createStore(rootReducer) and <Provider store={store}/>)
│
└───components
│   │   Counter.js (4. create Counter (presentational) component)
│   
└───containers
│   │   CounterContainer.js (5. create container component use connect() to communicate with module, apply funciton/value gotten to presentational component)
│   
└───modules
    │   counter.js (1. create redux module containing 액션 타입 정의, 액션 생성 함수, 초기 상태 및 리듀서 함수)
    │   index.js (2. create root reducer containing combination of all reducers - 모든 리듀서 묶어 export)

```