# 개요 
혈당을 낮추는데 좋다고 알려진 7초 스쿼트를 혼자서 할 수 있게 제작된 웹 앱입니다.

## 회고
https://velog.io/@goldbear2022/7초-스쿼트-프로젝트-중간회고

# 진행상황과 업데이트 예정 기능
- 기능구현 (완료)
- 리팩토링 - 사이드 이펙트 줄이기
- Firebase를 이용한 배포

# 기술스택
React.js, Typescript, Recoil, React-Router, TailwindCSS, DaisyUI

# 레이아웃
![github 레이아웃](https://user-images.githubusercontent.com/94972549/184343417-ede1c60c-7cd1-4265-86c4-6fd940f120bc.png)

# 기능

## 파일별 역할

### src/components

#### SecondCounter.tsx
1초당 1씩 증가하는 컴포넌트.

#### SecondCounter.tsx
1초당 1씩 감소하는 컴포넌트.

### src/hooks

#### useInterval.tsx
setInterval을 react에서 작동할 수 있게 하는 custom hook 입니다.
useRef를 이용해서 누적되는 second를 저장하고
clearInterval을 매 초 마다 실행해서 setInterval이 가지는 한계를 해결했습니다.

### src/pages

#### Start.tsx
스타트 버튼이 존재하는 페이지

#### Ready.tsx
준비시간 3초를 타이머 해주는 페이지. 
3초가 완료되면 자동으로 Main.tsx로 이동합니다.

#### Main.tsx
7초 스쿼트의 횟수를 카운트 해주는 페이지. 
10회를 완료하면 휴식페이지로 이동한 후 세트 횟수를 카운트 합니다. 
3세트를 달성하면 달성페이지로 이동합니다.

#### Rest.tsx
휴식시간 타이머 해주는 페이지.
최대 60초까지 카운트 하고 중간에 멈추고 다시 스쿼트를 진행하는 페이지인 Main.tsx로 이동할 수 있습니다.

# 트러블슈팅
1. 초 시간을 더해주지 못하는 오류 (setInterval 오류)
	- [클로저Closure가 되버린 내부함수가 일으키는 오류 (feat. setInterval)](https://goldbear2022.tistory.com/m/31)

2. [setInterval 대신 useInterval을 사용하자](https://velog.io/@goldbear2022/setInterval-특징과-useInterval)

3. 페이지가 새로 마운트 되면 이전 페이지에 있던 상태가 초기화 되는 오류
	- 전역상태 라이브러리 이용. [Recoil과 React-Redux의 직관력 비교](https://velog.io/@goldbear2022/Recoil과-React-Redux의-직관력-비교)






