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
  * this.setState로 state값 변셩시 상태가 비동기적으로 업데이트 → this.setState를 사용할때 객체 대신 함수를 넣어 해결
    * this.setState의 두번째 파라미터로 callback함수를 등록하여 작업처리 가능 (setState끝난 후 작업처리)
* 함수형 컴포넌트의 useState
  * useState라는 함수를 사용하여 함수형 컴포넌트에도 state를 사용할 수 있게 됨
  * 배열 비구조화 할당 (destructuring assignment) - 배열 안에 들어 있는 값을 쉽게 추출
  * useState → 인자에는 상태의 초깃값, 객체가 아니어도 상관 없음
    * 호출 후 배열이 반환, 첫번째 원소는 현재 상태, 두번째 원소는 상태를 바꾸어주는 함수
    * ex. const [msg, setMsg] = useState('initial')
    * useState는 한 컴포넌트에서 여러번 사용 가능
* state사용시 주의 사항
  * state를 바꿔야 할때는 setState혹은 useState를 통해 전달받은 세터 함수를 사용!
  * 배열이나 객체를 업데이트시 사본을 만들고 값 업데이트 후, 사본의 상태를 setState/세터 함수
  * ex. const object = {a: 1, b: 2, c: 3}; const nextObj = {...object, b: 2}; // 사본을 만들어 값을 덮어 쓰기
  * spread → ...을 사용하여 사본을 생성

### Props vs. State

* props는 부모 컴포넌트가 설정
* state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트
