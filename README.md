<h1 align="middle"> 7초 스쿼트 카운터 </h1>
<p align="middle">7초 스쿼트를 혼자서 할 수 있게 제작된 반응형 애플리케이션 입니다</p>
<p align="middle"><img src="https://img.shields.io/badge/version-1.0.0-yellow"></p>
<img alt="레이아웃" src="https://user-images.githubusercontent.com/94972549/186824829-a31b6c50-fc04-4306-bd09-37b7b3466984.png" )


# 7️⃣ 소개

혈당을 낮추는데 좋다고 알려진 [7초 스쿼트](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791165342432)를 혼자서도 진행할 수 있도록 도와주는 카운트/타이머 앱 입니다.

## ✔ 기능

- 1회에 7초동안 스쿼트를 합니다. 그리고 스쿼트를 하고 일어나는 시간까지 총 10초가 걸립니다.
- 10회가 1세트이고 1세트가 끝나면 60초간의 휴식시간이 주어집니다. 중간에 휴식을 멈추고 스쿼트를 다시 시작할 수 있습니다.
- 언제든지 스쿼트를 시작할 때는 기본적으로 3초의 준비시간이 주어집니다.
- 3세트가 달성기준이며 중간에 포기할 수 없습니다.

# 🛠 패치노트

#### 08.26 - 1.0.0v 배포 완료

# 📌기술스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/recoiljs-000000?style=for-the-badge&logo=recoiljs&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/daisyui-dd34d8?style=for-the-badge&logo=daisyUI&logoColor=white">

<!--React.js, Typescript, Recoil, React-Router, TailwindCSS, DaisyUI-->

# 📃 디렉터리 구조와 파일별 기능

```
├── 7-squat
|  └── README.md
├── firebase.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
|  ├── image //이미지 가이드
|  └── index.html
├── README.md
├── src
|  ├── App.css
|  ├── App.tsx
|  ├── components // 자주 사용하는 컴포넌트
|  ├── hooks // 커스텀 Hooks
|  |  └── useInterval.tsx
|  |
|  ├── index.css
|  ├── index.tsx
|  ├── pages //페이지 컴포넌트
|  └── react-app-env.d.ts
├── tailwind.config.js
└── tsconfig.json
```

# 💥트러블슈팅

1. 초 시간을 더해주지 못하는 오류 (setInterval 오류)

   - [클로저Closure가 되버린 내부함수가 일으키는 오류 (feat. setInterval)](https://goldbear2022.tistory.com/m/31)

2. [setInterval 대신 useInterval을 사용하자](https://velog.io/@goldbear2022/setInterval-특징과-useInterval)

3. 페이지가 새로 마운트 되면 이전 페이지에 있던 상태가 초기화 되는 오류
   - 전역상태 라이브러리 이용. [Recoil과 React-Redux의 직관력 비교](https://velog.io/@goldbear2022/Recoil과-React-Redux의-직관력-비교)
