## Exercise 17

React App using redux

### React App using redux

* 리액트에 리덕스를 사용하면 상태 업데이트에 관한 로직을 모듈로 따로 분리하여 별개로 관리, 코드 유지 보수
* 여러 컴포넌트에서 동일한 상태를 공휴해야 할 때 유용, 실제 업데이트가 필요한 컴포넌트만 리렌더링하여 최적화
* 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리
  * 프레젠테이셔널 컴포넌트 - 상태관리가 이루어 지지 않고 그저 props를 받아와 화면에 UI를 보여줌
  * 컨테이너 컴포넌트 - 리덕스와 연동되어 리덕스로부터 상태를 받아오고 액션을 디스패치도 함
  * 코드의 재사용성 높이고 관심사의 분리
* 리덕스 관련 코드
  * 액션 타입, 액션 생성 함수, 리듀서 코드
  * 일반적인 구조 - actions, constants, reducers의 3개의 디렉터리를 기능별 생성
  * Ducks 구조 - 액션 타입, 액션 생성 함수, 리듀서 코드 기능별로 파일 하나에 다 몰아서 작성
1. 액션 타입 정의 - 제일 처음 작업
  * 대문자로 정의 하고 문자열 내용은 '모듈 이름/액션 이름'
2. 액션 생성 함수 - 정의 후 다음
  * export키워드를 붙여 함수를 다른 파일에서 불러옴
3. 초기 상태 및 리듀서 함수 만들기
  * 초기 상태에서 값을 설정, 리듀서 함수에는 현재 상태를 참조하여 새로운 객체를 생성해서 만환, export하여 내보내 줌
  * export는 여러개를 내보낼 수 있지만 export default는 한 개만 내보낼 수 있음
  * 리듀서가 많으면 - 나중에 createStore함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야함
    * combineReducers유틸 함수 사용
4. 스토어를 생성
  * index.js에서 스토어 생성
  * Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용 - 스토어를 사용할 수 있도록 Provider컴포넌트로 감싸줌, store를 props로 전달
5. 컨테이너 생성
  * 컴포넌트를 리덕스와 연동하려면 connect함수 사용, connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
  * mapStateToProps - 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨줌, state(현재 스토어가 지니고 있는 상태)를 파라미터로 받음
  * mapDispatchToProps - 액션 생성 함수를 컴포넌트의 props로 넣어줌, store의 내장함수 dispatch를 파라미터로 받음
  * 두 함수에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달
  * connect함수를 사용시 일반적으로 mapStateToProps와 mapDispatchToProps를 미리 선언해 놓고 사용
* bindActionCreators - 유틸 함수로 각 액션 생성 함수를 묶음
  * connect의 두번째 파라미터에 아예 객체 행태로 넣우주면 connect함수가 내부적으로 bindActionCreators작업을 함