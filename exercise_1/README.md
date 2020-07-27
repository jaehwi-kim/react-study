
## Exercise 1

create-react-app ~ JSX

### React

* MVC (Model-View-Controller) / MVVM (Model-View-View-Model) Architecture
  * Model - 데이터 관리 영역
  * View - 사용자에게 보이는 부분
  * Controller - 사용자에게 작업을 받아 모델 데이터 조회/수정, View에 반영
* React는 오직 View에만 신경쓰는 **라이브러리**
  * Component Based - 재사용 가능한 API로 생김새와 작동 방식을 정의
* render() {...} → 초기 렌더링 함수, Component가 어떻게 생겼는지 정의
  * rendering → HTML Markup(<div>) → DOM → UI
* 업테이트 과정 → reconciliation, 뷰가 변형되는 것이 아니라 새로운 요소로 바꿈
  데이터 업데이트 → 새로운 데이터로 render함수 다시 호출 → 컴포넌트 정보 비교후 차이를 최소한의 연산으로 DOM트리 업데이트
* Virtual DOM
  * DOM - Document Object Model 객체를 문서 구조로 표현(HTML or XML)
    * 동적 UI에 취약, 큰 애플리케이션에 변화를 주면 느려짐
    * DOM에 변화 → CSS연산 → 레이아웃 구성 → 페이지 리페인트 (시간 허비)
    * Virtual DOM으로 DOM처리 횟수를 최소화, 효율성 높이기
  * Virtual DOM - 실제 DOM을 추상화한 자바스크립트 객체를 구성하여 사용
    * 데이터 업테이트 → 전체 UI Virtual DOM에 리렌더 → Virtual DOM내용과 현제 내용 비교 → 바뀐 부분만 DOM에 적용
* 라우팅 → react-router / ajax → axios나 fetch / 상태관리 → redux나 MobX

### JSX

* JSX - 자바스크립트의 확장문법, 번들링중 바벨로 자바스크립트 코드로 변환
* 보기 쉽고 익숙함, 더 높은 활용도
* **부모요소하나!**
  * Virtual DOM에서 컴포넌트 변화를 감지할때 효율적으로 배교
  * Fragment컴포넌트로 div대체 가능
* JSX안에 JS표현식 → {...}로 감싸기
* JSX내 JS if문 사용불가, ? 사용하여 조건부 연산
* flasy한 **값**인 0은 화면에 나타남
* 인라인 스타일링
  * -문자를 없애고 camelCase표기법으로 작성
* JSX에서는 class가 아닌 className으로 설정 (Do-able, but warning)
* Self-closing Tag - 태그 사이에 별도의 내용이 들어가지 않을때 사용
* 주석 → {/*...*/}사용

