## Exercise 5

ref: DOM에 이름 달기

### ref

* HTML에서 DOM요소에 이름을 달때 → id 
  * <div id="my-element"></div>
  * CSS에서 특정 id에 스타일 적용, 자바스크립트에 해당 id를 가진 요소 작업
  * react에서는 ref를 사용
  * 리액트는 component를 재사용할때가 많음 → id는 unique해야 하는데 중복 생김 → not recommended

* ref 사용
  * 특정 DOM에 작업을 해야 할 때 → DOM을 꼭 직접적으로 건드려야 할 때
    * 특정 input에 포커스 주기
    * 스크롤 박스 조작하기
    * Canvas 요소에 그림 그리기
  * 콜백 함수를 통한 ref 설정
    * ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달
      * <input ref={(ref) => {this.input=ref}}/>
      * 콜백 함수는 ref값을 파라미터로 전달 받고 함수 내부에서 받은 ref를 컴포넌트의 멤버 변수로 설정
  * createRef를 통한 ref설정
    * 더 적은 코드로 쉽게 사용가능
    * 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아 해당 변수를 ref를 달고자 하는 요소에 ref props로 넣어줌
    * input = React.createRef(); <input ref={this.input}/>
    * ref를 설정해준 DOM에 접근하려면 this.input.current 조회 / .current를 넣어줘야함!

* Component에 ref달기
  * 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할때 ref를 달기
  * <MyComponent ref={(ref) => {this.myComponent=ref}}/>
    * MyComponent내부의 메서드 및 멤버 변수에도 접근 가능 (myComponent.handleClick, myComponent.input)
    * 화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 메서드를 실행 → 값을 읽어오는 과정에서 오류가 없음

* 컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref사용 → 먼저 ref사용하지 않고 언하는 기능 구현 확인
* 컴포넌트끼리 데이터를 교류할 때는 부모 - 자식 흐름으로 교류! (redux / Context API효 효율적으로 교류)
