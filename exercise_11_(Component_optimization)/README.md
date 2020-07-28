## Exercise 11

컴포넌트 성능 최적화

### 컴포넌트 성능 최적화

* 많은 데이터 렌더링
  * useState()의 기본값에 함수를 넣음 - createTodos()라고 작성하면 리렌더링될 때마다, createTodos처럼 파라미터를 함수형태로 넣어주면 컴포넌트가 처음 렌더링 될 때만 함수 실행

* 크롬 개발자 도구로 성능 모니터링
  * 크롬 개발자 도구의 Performance탭, 녹화버튼, Timings안 각 시간대에 컴포넌트 어떤 작업처리

* 느려지는 원인 분석
  * 리렌더링 발생
    * 자신이 전달받은 props가 변경될 때
    * 자신의 state가 바뀔 때
    * 부모 컴포넌트가 리렌더링될 때
    * forceUpdate함수가 실행될 때

* React.memo로 컴포넌트 성능 최적화
  * 리렌더링을 방지 - shouldComponentUpdate를 사용 / 함수형 컴포넌트에서는 React.memo함수 사용
  * props가 바뀌지 않았으면 리렌더링 하지 않게 설정, 최적화

* onToggle, onRemove함수가 바뀌지 않게 하기
  * todos배열이 업데이트 되면 onRemove와 onToggle함수도 바뀜
    * 배열상태를 업데이트 하는 과정에서 최신 상태의 todos를 참조하여 todos배열이 바뀔때 마다 함수가 새로 만들어짐
    * 방지 - useState의 함수형 업데이트 기능 / useReducer
      * useReducer - 두번째 파라미터에 초기상태, 두번째에 undefined넣고 세 번째에 초기상태 함수넣기 - 컴포넌트가 맨 처음 렌더링 될때만 함수 호출
      * useReducer는 기존 코드를 많이 고쳐야 하지만 상태를 업데이트 하는 로직을 모아서 컴포넌트 바깥에 둘 수 있음

* 개발 서버로 보이는 리액트 애플리케이션은 실제 프로덕션에서 구동될 때보다 처리 속도가 느림!
  * 프로덕젼 모드 (npm start)에서는 에러 시스템 및 Timing이 비활성화, 속도가 훨씬 더 빠름
  * yarn build, yarn global add server, serve -s build 로 프로덕션 모드 구동

* 불변성의 중요성 (기존의 값을 수정하지 않으면서 새로운 값을 만들어 낸다)
  * 기존 데이터를 수정할때 직접 수정이 아닌 새로운 배열을 만든다음 새로운 객체를 만들어 필요한 부분을 교체
  * 불변성이 지켜지지 않으면 React.memo에서 서로 비교하여 최적화 불가 (객체 내부의 값이 새로워져도 바뀐 것을 감지 못함)
  * spread연산자 - shallow copy, 가장 바깥쪽에 있는 값만 복사됨
  * immer라이브러리를 사용하여 복잡한 객체 구조의 업데이트!

* 리스트에 관련된 컴포넌트를 최적화 할때는 리스트 내부에서 사용하는 컴포넌트도 최적화, 리스트로 사용되는 컴포넌트 자체도 최적화

* react-virtualized로 렌더링 최적화
  * 실제 화면에 보이는것을 위주로 렌더링
  * 리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 렌더링 하지 않고 크기만 차지
    * 스크롤 되면 해당 스크롤 위치에서 보여 주어야 할 컴포넌트를 렌더링 - 자원 아낌
  * 시작전 각 항목의 실제 크기를 px단위로 알아내야함
    * inpsect로 확인, 두번째 항목부터 테두리가 포함되어 두번째 항목확인
  * rowRenderer - List컴포넌트에서 각 TodoItem을 렌더링할 때 사용, List컴포넌트의 props으로 설정
    * 해당 리스트의 전체 크기와 각 항목의 높이, 각 항목을 렌더링할때 사용해야 할 함수, 그리고 배열을 props로 넣기

* 리스트와 관련된 컴포넌트를 만들때 보여 줄 항목이 100개 이상이고 업데이트가 자주 발생한다면 최적화!