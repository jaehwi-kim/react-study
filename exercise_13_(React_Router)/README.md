
## Exercise 13

React Router

### React Router

* SPA (Single Page Application)
  * 한개의 페이지로 이루어진 애플리케이션
  * 기존에 다른페이지로 이동할 때마다 새로운 html을 받아오고 서버에서 리소스를 전달받아 해석 후 화면에 보임 (성능 문제)
    * 사용자와의 인터랙션이 자주 발생하는 모던 웹 애플리케이션에는 부적합
    * 서버에 새로 요청하면 상태 유지 번거롭고 불필요한 로딩 필요 - 비효율적
  * 뷰 렌더링을 사용자의 브라우저가 담당, 인터랙션이 발생시 필요한 부분만 자바스크립트로 업데이트
  * 서버에서 사용자에게 제공하는 페이지는 한 종류지만 로딩된 자바스크립트와 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면 보여줌
  * Routing - 다른 주소에 다른 화면 보여줌
  * SPA 단점
    * 앱의 규모가 커지만 자바스크립트 파일도 커짐 (실제로 방문하지 않을 페이지의 스크립트도 불러옴) - **code splitting으로 해결**
    * 브라우저에 자바스크립트를 사용하여 라우팅 관리시 자바스크립트를 실행하지 않는 일반 크롤러에서는 페이지 정보를 제대로 수집 못함 (검색 엔진)
    * 자바스크립트가 실행될 때까지 페이지가 비어 있음 (흰페이지) - **server-side rendering으로 해결**

* React Router
  * src/index.js파일에서 BrowserRouter 컴포넌트를 사용해서 감쌈
  * Route 컴포넌트를 사용하여 현재 경로에 따라 다른 컴포넌트 보여줌 <Route path="주소규칙" component={보여 줄 컴포넌트} />
  * exact라는 props를 true로 설정하여 /about경로 / 규칙 수정
  * Link 컴포넌트 - 다른 주소로 이동
    * a 태그 사용 불가 - 페이지를 전환하는 과정에서 페이지를 새로 불러옴, 애플리케이션이 들고 있던 상태들이 다 날라감, 첨부터 리렌더
    * <Link to="주소">내용</Link>
  * Route하나에 여러 개의 path를 지정 가능 - path props를 배열로 설정
  * 유동적인 값의 페이지 주소 - 파라미터(아이디, 이름), 쿼리(키워드 검색, 페이지 필요 옵션)
    * 파라미터 - match객체 (현재 컴포넌트가 어떤 경로 규칙에 보이는지 정보)안의 params값을 참조
    * 쿼리 - location객체에 들어있는 search값에서 조회, 라우트로 사용된 컴포넌트에게 props로 전달, 현재 주소에 대한 정보를 가지고 있음 
      * qs라이브러리를 사용 (쿼리 문자열을 객체로 변환)
      * 쿼리 문자열을 객체로 파싱하는 과정중 결과 값은 언제나 문자열! (parseInt함수로 숫자 변환)
  * 서브 라우트 - 라우트 내부에 또 라우트 정의
    * 라우트로 사용되고 있는 컴포넌트의 내부에 Route컴포넌트를 또 사용
    * Route컴포넌트에 component대신 render props를 넣어 보여주고 싶은 JSX도 가능 (값을 생략하면 자동으로 true)
  * history 객체 - 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props
    * 특정 버튼을 눌러 뒤로 가거나, 로그인 후 화면을 전환하거나, 다른페이지로 이탈 방지
  * withRouter 함수 - Higher-order Component, 라우트로 사용된 컴포넌트가 아니어도 match, location, history객체를 접근 가능하게 함
    * 컴포넌트를 내보내 줄 때 함수로 감싸줌, JSON.stringify의 두번째 파라미터와 세번째 파라미트럴 null, 2로 설정하면 JSON에 들여쓰기가 적용된 상태로 문자열이 만들어짐
    * 현재 자신이 보여 주고 있는 라우트 컴포넌트를 기준으로 match가 전달됨
  * Switch 컴포넌트 - 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링 시킴 (Not Found 페이지도 구현 가능)
  * NavLink - 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 / CSS클래스 적용 가능
    * 스타일 적용은 activeStyle값을, CSS 클래스를 적용할 때는 activeClassName 값을 props로 적용