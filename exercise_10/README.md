## Exercise 10

일정관리 웹 애플리케이션

### 일정관리 웹 애플리케이션 (Todo)

* Sass사용 - node-sass / 조건부 스타일링 - classnames / 예쁜 아이콘 - react-icons
* TodoTemplate - 화면을 가운데로 정렬, 앱 타이틀, children으로 내부 JSX를 props로 받아와서 렌더링
* TodoInsert - 새로운 항목을 입력하고 추가할수 있는 컴포넌트, state롱 통해 잇풋의 상태관리
* TodoListItem - 각 할 일 항목에 대한 정보를 보여주는 컴포넌트, todo객체를 props로 받아와서 상태에 따라 다른 스타일 UI보여줌
* TodoList - todo배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러개의 TodoListItem컴포넌트로 변환하여 보여줌

* 컴포넌트가 VS Code에서 다른 탭으로 열려 있지 않으면 자동완성이 안됨, 작동하려면 jsconfig.json만들어줘야함
* ctrl+space → VS Code 에디터의 자동 완성 단축키
* 브라우저를 한쪽 화면에 띄워 놓고 각 스타일 코드가 실제로 어떠한 변화를 주는지 확인
* flex display
* 스타일링 → 기능 구현
* React Developer Tools - 크롬 extension

* todo배열안에 객체를 TodoList에 props로 전달, TodoList에서 값을 받아 TodoItem으로 변환하여 렌더링
* props로 받아 온 todos배열을 map을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링 (key는 id)
* todo데이터는 통째로 props로 전달 → 여러 종류의 값을 전달 할때 통째로 전달하는 편이 성능 최적화 할때 편리

* 항목추가 → TodoInsert컴포넌트에서 인풋 상태 관리, App컴포넌트에서 todo배열에 새로운 객체를 추가하는 함수 필요
  * 인풋 상태관리 - useState

* todos 배열에 새 객체 추가
  * onInsert함수, 새로운 객체를 만들 때마다 id에 1씩 더함 (useRef로 id관리)
    * id값은 렌더링 되는 정보가 아니기 때문에 useRef사용!
  * useCallback으로 컴포넌트 성능 아낌 - props로 전달해야 할 함수를 만들 때는 useCallback사용
  * onSubmit함수는 브라우저를 새로고침, e.preventDefault()로 방지, enter를 눌러도 발생 (onClick이랑 다른점)

* 원소 지우기
  * 배열의 불변성을 지키면서 배열원소를 제거해야함 - filter를 사용
  * filter - 기존의 배열은 그대로 둔 상태에서 특정 조건을 만족하는 원소들만 따로 추출하여 **새로운 배열**을 만듬
  * id를 파라미터로 받아와서 같은 id를 가진 항목을 배열에서 지움

* 수정 기능
  * onToggle이라는 함수를 만들어 해당 함수를 TodoList컴포넌트에게 props로 넣음
  * map을 사용하여 특정id의 객체의 checked값을 반전 - 불변성을 유지하며 특정 배열 원소를 업데이트
    * map을 사용하여 만든 배열에 변화가 필요한 원소만 업데이트되고 나머지는 그대로 남아 있게 됨

* 컴포넌트 리렌더링 최적화 작업은 X, 만약 항목이 많다면 항목 추가나 삭제 및 토글할 때 지연발생, 불필요한 리렌더링을 방지해야함