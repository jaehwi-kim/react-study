## Exercise 20

Server Side Rendering

### Server Side Rendering

* 서버 사이드 렌더링 - UI를 서버에서 렌더링함
  * 기존 리액트 프로젝트는 클라이언트 사이드 렌더링을 함, 자바스크립트를 실행해야 만든 화면이 사용자에게 보임
  * 서버 사이드 렌더링시 사용자가 웹 방문시 서버쪽에서 초기 렌더링을 대신 해주고 HTML을 전달 받을때 렌더링된 결과물이 보임
* 장점
  * 검색 엔진이 만든 웹 애플리케이션의 페이지를 원활하게 수집 가능 (크롤러 봇이 실행 가능)
  * 초기 렌더링 성능 개선 - 원래 JS가 로딩되고 실행 까지 대기해야 하지만 서버 사이드 렌더링 구현시 로딩 완료전 HTML상에서 사용자가 볼 콘텐츠가 있음
* 단점
  * 원래 브라우저가 해야 할 일을 서버가 대신 처리 - 서버 리소스가 사용됨 (수많은 사용자가 접속시 서버 과부화 - 캐싱, 로드 밸런싱 필요)
  * 프로젝트의 구조가 좀 더 복잡해지며 데이터 미리 불러오기, 코드 스플리팅과의 호환 등 고려해햐 할 사항 많음
* 코드 스플리팅과 충돌
  * 호환 없으면:
    * 서버 사이드 렌더링 결과물 → 자바스크립트 파일 로딩 → JS가 실행되며 불러오지 않은 컴포넌트를 null로 렌더링 → 코드 스플리팅된 컴포넌트들이 사라짐 → 코드 스플리팅된 컴포넌트들이 로딩후 제대로 나타남
    * 라우트 경로마다 코드 스클리팅된 파일 중에서 필요한 모든 파일을 부라우저에서 렌더링 하기 전에 미리 불러와야함 (Loadable Components사용)

* Server Side Rendering 프로젝트 준비
  1. 웹팩 설정을 커스터마이징 해주어야 함 - git add . / git commit -m "commit before eject" / npm run eject
    * 웹팩에서 프로젝트를 불러올 때 가장 먼저 entry를 불러옴, 리액트는 index.js를 entry파일로 사용
  2. 서버를 위한 entry파일을 따로 생성 src/index.server.js 생성
    * 서버에서 리액트 컴포넌트를 렌더링시 ReactDOMServer의 renderToString함수를 사용, JSX를 넣어서 호출하면 렌더링 결과를 문자열로 반환
  3. 작성한 entry 파일을 웹팩으로 불러와서 빌드하기 위해 서버 전용 환경 설정을 만들어야 함
    * config경로의 paths.js파일의 module.exports부분에 2줄 ssrIndexJs(불러올 파일의 경로)와 ssrBuild정보(웹팩으로 처리한 뒤 결과물 저장 경로) 추가 (config/paths.js)
    * 웹팩 환경 설정 파일 작성 (config.webpack.config.server.js)
  4. 로더 설정 - 파일을 불러올 때 확장자에 맞게 필요한 처리(트랜스파일링, 코드결합, 경로 참조)를 해줌
    * CSS / Sass - 별도로 설정하여 처리하지만 따로 결과물에 포함되지 않도록 구현 (config.webpack.config.server.js - css/sass)
    * node_modules내부의 라이브러리를 불러올 수 있게 설정 (config.webpack.config.server.js - resolve)
    * 서버에서는 굳이 결과물 파일안에 리액트 라이브러리가 들어 있지 않아도 됨 (node_modules통해 바로 불러옴)
      * 서버에 번들링시 node_modules에서 불러오는 것을 제외하고 번들링 (webpack-node-externals, config.webpack.config.server.js - externals)
  5. 환경 변수 주입 - 프로젝트 내에서 process.env.NODE_ENV값을 참조하여 현재 개발 환경인지 아닌지 확인 (config.webpack.config.server.js - plugins, env, publicUrl, getClientEnvironment, webpack)
  6. 빌드 스크립트 작성 - 서버에서 사용할 빌드 파일을 만드는 build.server.js스크립트 작성 (scripts/build.server.js)
    * node script/build.server.js - 빌드 잘되는지 확인, node dist/server.js - 작성한 결과물 잘 작동하는지 확인
  7. package.json에서 스크립트를 생성하여 편하게 명령어 입력 (package.json - scripts)
  8. 서버 코드 작성 (express, koa, hapi등 connect라이브러리 사용하여 구현, index.server.js)
    * StaticRouter - 서버 사이드 렌더링 용도의 라우터, props로 넣어 주는 location값에 따라 라우팅 해줌
      * req.url값 - 요청에 대한 정보
      * context - 나중에 렌더링한 컴포넌트에 따라 HTTP상태 코드를 설정
    * express사용하여 JS, CSS 정적파일들에 접근 (index.server.js)
      * JS와 CSS파일을 불러오도록 HTML코드를 삽입 (build/asset-manifest.json파일을 참고하여 불러옴)
  9. 데이터 로딩 (API 요청) - 서버의 경우 문자열 형태로 렌더링함, state나 리덕스 스토어의 상태가 바뀐다고 해서 자동으로 리렌더 안됨
    * renderToString 함수를 한번 더 호출, componentDidMount같은 라이프사이클 API 사용 불가 (Ducks 패턴 사용)
    * module생성 - thunk함수를 만들어 관련 액션을 사용하여 상태관리
    * 이미 있는 정보를 재요청 하지 않게 처리하는 작업이 중요!
    * 서버 사이드 렌더링시 useEffect나 componentDidMount에서 설정한 작업이 호출되지 않음, 렌더링전 API를 요청후 스토어에 데이터를 담아야함
      * 이러한 작업을 constructor메서드나 render 함수 자체에서 처리해야함 (PreloadContext)
      * PreloadContext - 서버 사이드 렌더링을 하는 과정에서 처리해야 할 작업들을 실행, 만약 기다려야 하는 프로미스가 있으면 프로미스 수집
        * 모든 프로미스를 수집한뒤 다 끝낼 때까지 기다렸다가 다시 렌더링하면 데이터가 채워짐
        * Preloader 컴포넌트는 resolve라는 함수를 props로 받아오며 컴포넌트가 렌더링될 때 서버 환경에서만 resolve함수를 호출
    * 서버가 실행될 때 스토어를 한 번만 만드는 것이 아니라 요청이 들어올 때마다 새로운 스토어를 만듬