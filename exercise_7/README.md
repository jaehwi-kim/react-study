## Exercise 7

컴포넌트 라이프사이클 메서드

### 라이프사이클

* 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비과정에서 시작 - 페이지에서 사라질 때 끝
* 라이프사이클 메서드는 클래스형 컴포넌트에서만 사용 가능 - Hooks기능을 사용하여 비슷한 작업 처리 가능
* Will → 어떠한 작업 전에 실행 / Did → 어떠한 작업 후에 실행
* 마운트 / 업데이트 / 언마운트로 나뉨
  * 마운트 → DOM이 생성되고 웹 브라우저상에 나타나는 것
  * 업데이트 → props / state 바뀜, 부모 컴포넌트 리렌더, this.forceUpdate로 강제 렌더링시 업데이트
  * 언마운트 → 마운트의 반대과정, 컴포넌트를 DOM에서 제거
* render() - 컴포넌트 모양새를 정의
  * 안에 이벤트 설정이 아닌 곳에서 setState를 사용하면 안됨 / 부라우저의 DOM에 접근하면 안됨! (componentDidMount에서 처리)
* constructor() - 컴포넌트의 생성자 메서드, 초기 state정함
* getDrivedStateFromProps - props로 받아 온 값을 state에 동기화, 컴포넌트가 마운트/업데이트 시 호출
* componentDidMount - 컴포넌트를 만들고 첫 렌더링 마친 후 실행 (안에 비동기 작업 처리)
* shouldComponentUpdate - props / state변경시 리렌더링 시작할지 여부 지정 (true / false 반환)
  * 프로젝트 최적화시 알고리즘을 작성하여 리렌더링 방지 → 효율 증가
* getSanpshotBeforeUpdate - render에서 만들어진 결과물이 브라우저에 실제로 반영전 호출
  * 주로 업데이터 직전 값을 참고할 일이 있을 때 활용 (ex. 스크롤바 위치 유지)
* componentDidUpdate - 리렌더링 완료한 후 실행, DOM관리 처리 가능, prevProps / prevState사용 이전에 가진 데이터 접근
* componentWillUnmount - 컴포넌트를 DOM에서 제거시 실행 (타이머, 이벤트 등)
* componentDidCatch - 컴포넌트 렌더링 도중 에러시 오류 UI를 보여줌
* 에러 잡아내기
  * 에러시 에러가 발생했다고 사용자에게 인지
  * 에러가 발생하면 componentDidCatch메서드가 호출됨, this.state.error값을 true로 업데이트, render함수가 this.state.error가 true면 에러 문구 생성
* 라이프사이클 메서드 - 서드파티 라이브러리를 사용하거나 DOM을 직접 건드려야 하는 상황에서 유용