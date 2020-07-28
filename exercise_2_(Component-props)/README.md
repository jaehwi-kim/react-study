## Exercise 2

Component - Props

### 클래스형/함수형 컴포넌트

* 클래스형 컴포넌트
  * state기능 및 라이프사이클 기능, 임의 메서드 정의 사용 가능
  * render함수 꼭 필요!
* 함수형 컴포넌트
  * 선언하기 편함
  * 메모리 자원도 비교적 덜 사용
  * state와 라이프사이클 API사용 불가능 → Hooks기능으로 해결
* ES6
  * 화살표 함수
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
