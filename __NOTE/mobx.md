## Mobx
- 반응형 프로그래밍 Reactivity Programming의 일종
- 가장 간단하고 단순한 형태로 데이터의 상태 state를 observable과 observer 형태로 관리
- mobx 단독으로도 사용할 수 있고 리액트를 위한 mobx-react를 사용하면 더욱 편리

![setState와 비교](./img/setState_mobx.png)

## 설치
- npm i mobx mobx-react
- npm i @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
- decorators 경고 없애기 위한 jsonfig 생성
```json
{
  "compilerOptions": {
      "experimentalDecorators": true,
      "allowJs": true
  }
}
```

## decorator
-	@observable : 변경되면 화면을 렌더링 하는 statr 역할의 값
-	@computed : 캐싱해서 보유하는 값
