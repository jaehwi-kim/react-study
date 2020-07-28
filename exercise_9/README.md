## Exercise 9

컴포넌트 스타일링

### 컴포넌트 스타일링

* 일반 CSS - 가장 기본적인 방식
  * **CSS 클래스를 중복되지 않게 작성**
    * 이름을 지을 때 특별한 규칙을 사용
      * BEM Naming - 해당 클래스가 어디에서 어떤용도 (ex. .card_title-primary)
    * CSS Selector - CSS클래스가 특정 클래스 내부에 있는 경우 스타일을 적용할 수 있음
      * 최상위 html요소는 컴포넌트 이름, 그 내부는 소문자나 태그 사용
* Sass - CSS pre-processor중 하나로 CSS문법을 사용하여 CSS코드 쉽게 작성
  * syntactically awesome style sheets
  * CSS 전처리기, 복합한 과정을 쉽게, 스타일 코드의 재활용성 높임, 가독성 높여서 유지 보수
  * .sass확장자는 {}와 ;를 사용하지 않음
  * Sass변수 및 믹스인은 다른 파일로 따로 분리하여 작성후 부름
  * sass-loader설정 커스터마이징 - 깊은 구조에서는 import를 할때 많이 거슬러 올라가야함
  * node_module에서 라이브러리 불러오기 - '../../../node_modules/library/styles' → '~library/styles'
    * 자동으로 디렉터리를 탐지하여 스타일을 불러옴
* CSS Module - CSS 클래스가 다른 CSS클래스의 이름과 절대 충돌하지 않도록 고유한 이름을 자동으로 생성
  * CSS를 불러와서 [파일 이름]_[클래스 이름]_[해시값]형태로 자동으로 만들어서 이름이 중첩되는 현상을 방지
  * 클래스 이름을 지을 때 그 고유성에 대해 고민 X
  * 웹 페이지 전역으로 사용되는 클래스 - :global을 앞에 입력
  * JSX엘리먼트에 className={styles.[클래스 이름]}형태로 전달
* ES6 Template Literal - 문자열 안에 자바스크립트 레퍼런스를 넣을 수 있음
  * const msg = `제 이름은 ${name}입니다`;
* classnames - CSS클래스를 조건부로 설정
  * 여러 가지 종류의 파라미터를 조합해 CSS클래스를 설정 (props값에 따라 다른 스타일)
  * CSS Module과 함께 사용하면 CSS Module사용이 훨씬 쉬워짐
* styled-components - 스타일을 자바스크립트 파일에 내장, 스타일을 작성함과 동시에 적용된 컴포넌트 만들게 해줌
  * .css또는 .scss확장자를 가진 스타일 파일을 따로 만들지 않아도 됨
  * prop값으로 전달해 주는 값을 쉽게 스타일에 적용 가능
  * `사용하여 만든 문자열에 스타일 정보를 넣음 - Tagged 템플릿 리터럴
    * 템플릿 안에 자바스크립트 객체나 함수를 전달할 때 온전히 추출 가능
    * styled-components로 만든 컴포넌트의 props를 스타일 쪽에서 쉽게 조회 가능
  * 반응형 디자인 - media쿼리를 사용 / 유틸함수를 따라 간단히 사용