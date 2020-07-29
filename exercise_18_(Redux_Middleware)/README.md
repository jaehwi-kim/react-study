## Exercise 18

Redux Middleware

### Redux Middleware

* 리액트 애플리케이션에서 API서버를 연동시 API요청에 대한 상태도 관리해야함
  * 요청이 시작되었을 때는 로딩중, 요청이 성공시 받아온 응답에 대한 상태관리와 로딩 끝, 요청 실패시 서버에 반환한 에러의 상태 관리와 로딩 끝
* 미들웨어를 사용하여 비동기 작업 관리
* 미들웨어 - 액션을 디스패치 했을 때 리듀서에서 처리하기 앞서 사전에 지정된 작업들을 실행 (액션과 리듀서 사이의 중간자)
  * 작업 - 전달 받은 액션을 콘솔에 기록, 받은 액션 정보를 기반으로 액션 취소나 다른 액션 추가로 디스패치
* 미들웨어는 함수를 반환하는 함수를 반환하는 함수
  * 파라미터로 받아오는 store는 redux store instance, action은 dispatch된 액션
  * next는 함수 형태며 store.dispatch와 비슷한 역할, 호출시 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨줌
* 미들웨어 작업 처리 - 특정 조건에 따라 액션을 무시, 정보를 가로채서 변경후 리듀서에게 전달, 특정 액선에 기반 새로운 액션 여러번 디스패치
* 리덕스에서 미들웨어를 사용할 때는 이미 완성된 미들웨어를 라이브러리로 설치해서 사용
* redux-thunk - 비동기 작업처리 미들웨어 객체가 아닌 함수형태의 액션을 디스패치
  * thunk - 특정 작업을 나중에 할 수 있도록 함수형태로 감쌈
  * redux-thunk 사용시 thunk함수를 만들어서 디스패치, 리덕스 미들웨어가 그 함수를 받아 store의 dispatch와 getState를 파라미터로 넣어 호출
  * 스토어를 만들때 ReduxThunk 적용, 
  * 웹 요청 비동기 작업 처리 - API를 모두 함수화, 컨테이너 컴포넌트를 사용하여 데이터 요청 처리
  * 데이터를 불러와서 렌더링해 줄 때는 유효성 검사!! (ex. post &&)
  * refactoring - 반복되는 로직을 따로 분리
* redux-saga - 특정 액션이 디스패치되었을 때 정해진 로직에 따라 다른 액선을 디스패치 시키는 규칙을 작성
  * 기존 요청을 취소 처리해야 할 때 (불필요한 중복요청 방지), 특정 액션이 발생했을 때 다른 액션을 발생시키거나, API요청등 리덕스와 관계없는 코드를 실행할때, 웹 소켓을 사용할 때, API요청 실패시 재요청해야 할 때
  * **과감하게 스킵 - 필요시 복습하겠습니다**

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



