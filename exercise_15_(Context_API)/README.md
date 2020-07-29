## Exercise 15

Context API

### Context API

* 전역적으로 사용할 데이터가 있을 때 유용
  * 로그인 정보, 애플리케이션 환경 설정, 테마
* React는 컴포넌트 간에 데이터를 props로 전달, 컴포넌트 여기저기서 필요한 데이터가 있을 때는 주로 최상위 컴포넌트 App의 state에 넣어서 관리
  * 복잡하게 여러번 거쳐서 전달해야함 → 유지 보수성이 낮아짐
* Context - contexts디렉터리에 createContext함수를 사용
* Consumer - 이제 props로 받아오는것이 아니라 ColorContext안에 있는 Consumer컴포넌트 사용
  * Consumer사이에 중괄호에 함수 → Render Props, 컴포넌트의 children이 있어야 할 자리에 일반 JSX혹은 문자열이 아닌 함수
* Provider - Consumer의 value를 변경
  * createContext함수를 사용시 파라미터로 Context의 기본값을 넣어주는법은 Provider를 사용하지 않을때만 사용
  * Provider를 사용할때 value를 명시 안하면 오류발생
* Context의 value에 함수를 전달 가능
* Provider의 value에서 상태는 state로, 업테이트 함수는 action으로 묶음 - 객체를 따로 분리해주면 값을 사용할 때 편함
* createContext의 기본값은 실제 Provider의 value에 넣는 객체의 형태와 일치
* Consumer대신 Hook또는 static contextType으로 사용 가능
* Hook은 함수형 컴포넌트에서만 사용 가능!
* static contextType을 사용하면 this.context를 조회시 현재 Context의 value를 가르침
  * 클래스 메서드에서도 Context에 넣어둔 함수를 호출할 수 있지만, 한 클래스에서 하나의 Context밖에 사용못함

* 기존 컴포넌트간에 상태 교류는 부모 → 자식 흐름으로 props를 통해 전달 하였지만 Context API로 상태 교류 가능
* 리덕스는 향상된 성능과 미들웨어 기능, 강력한 개발자 도구, 코드의 높은 유지 보수성 제공하여 ConText API로 모든 상황에 대해 대체 불가능