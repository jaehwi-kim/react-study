## Exercise 4

Event System

### Event

* Event - DOM요소들과 상호 작용 (onmouseover, onclick, onchange, etc.)
  * 리액트의 Event System
    * Event이름은 camelCase - onclick → onClick
    * **함수 형태의 값을 전달** → 화살표 함수 문법으로 만들어서 저장 / 렌더링 부분 외부에서 만들어서 전달
    * DOM요소에만 이벤트를 설정할 수 있음
      * component에는 이벤트를 자체적으로 설정 불가

* onChange Event
  * e 객체는 SyntheticEvent → 웹 브라우저의 네이티브 이벤트를 감싸는 객체
  * Synthetic Event는 네이티브 이벤트와 달리 이벤트가 끝나면 초기화 됨, 정보 참조 불가
    * 비동기적으로 이벤트 객체를 참조하려면 e.persist()함수를 호출

* state에 input값 담기
  * 이벤트 핸들링 함수 내부에서 this.setState메서드를 호출하여 state를 업데이트

* 임의 메서드
  * 이벤트를 처리할 때 렌더링 동시에 함수를 만들어서 전달
  * 성능은 차이 없지만 가독성은 높음!
  * 임의 메서드가 HTML 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져버림
    * this를 컴포넌트 자신으로 제대로 가리키기 위해서 메서드를 this와 바인딩 필요 (안하면 this가 undefined를 가르키게됨)
  * binding은 constructor에서 하는것이 정석, but 화살표 함수로 메서드를 정의할 수 있음

* 여러개의 input
  * event객체(ex. e.target.name)을 사용
  * 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용

* 함수형 컴포넌트로 구현
  * 클래스형 컴포넌트로 할 수 있는 대부분의 작업은 함수형 컴포넌트로 구현 가능