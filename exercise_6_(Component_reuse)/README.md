## Exercise 6

컴포넌트 반복

### 컴포넌트 반복

* arr.map(callback, [thisArg])
  * 반복되는 컴포넌트를 렌더링
  * CSS에서 특정 id에 스타일 적용, 자바스크립트에 해당 id를 가진 요소 작업
  * react에서는 ref를 사용
  * 리액트는 component를 재사용할때가 많음 → id는 unique해야 하는데 중복 생김 → not recommended

* 데이터 배열을 컴포넌트 배열로 변환
  * map함수에서 JSX를 작성
  * key - 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 확인
    * props설정하듯이 설정, index값을 사용
    * index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링 못함 (고유한 값이 없을때 사용)

* push() → 기존 배열 자체를 변경 / concat() → 새로운 배열을 만들어줌
* 리액트 업데이트 → 기존 상태를 그대로 두면서 새로운 값을 상태로 설정 (불변성 유지로 최적화)
* 불변성을 유지하면서 업데이트 해줘야함! (filter사용)
* key값은 언제나 유일해야 함! / 중복시 렌더링 과정에서 오류발생
* 상태안의 배열을 변형할때는 concat / filter등 배열 내장함수를 사용하여 새로운 배열을 만든 후 새로운상태에 설정