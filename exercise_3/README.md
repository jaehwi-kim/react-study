## Exercise 3

Component - state

### State

* state - 컴포넌트 내부에서 바뀔 수 있는 값
  * props는 컴포넌트가 사용되는 과정에서 부모가 설정, 컴포넌트는 읽기전용으로만 사용
  * props를 바꾸려면 부모 컴포넌트에서 바꿔 주어야함
* 클래스형 컴포넌트의 state
  * 컴포넌트에서 state를 설정시 constructor메서드를 작성하여 설정
    * super(props)를 호출하여 현재 클래스형 컴포넌트가 상속 받고 있는 리액트의 Component클래스가 지닌 생성자 함수를 호출
  * 현재 state를 조회할 때는 this.state를 조회
  * this.setState - state값을 바꿈
  * state객체 안에 여러 값이 있을 수 있음
    * () => {}
    * 기존 function이랑 사용 용도가 다름!
    * **일반 함수는 자신이 종속된 객체를 this로 가르키며, 화살표 함수는 자신이 종속된 인스턴스를 가르킴**
    * 화살표 함수가 더 간결

### Props

* Props - properties, 컴포넌스 속성을 설정
  * props의 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정
* defaultProps - 값을 따로 지정하지 않았을때 보여주는 기본 값
* children - 컴포넌트 태그 사이의 내용을 보여줌
* ES6 비구조화 할당(destructuring assignment) 문법 (ex. const {name, children} = props)
* propTypes - props의 타입을 지정
  * isRequired - propTypes를 지정하지 않았을때 경고 메시지, 필수 props로 지정
* 클래스형 컴포넌트에서 props사용 - render함수에서 this.props를 조회
  * defaultProps와 propTypes는 class내부에서 지정 가능!
* defaultProps와 propTypes는 컴포넌트의 필수 사항은 아님, but 협업이나 큰 규모의 프로젝트 진행시 개발능률 up!
