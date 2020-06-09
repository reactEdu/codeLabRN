## setState
- 상태값중 일부 값만 변경 가능

```javascript
class App extends React.Component {
  state = {
    name: "david",
    score: 90
  }

  updateScore = () => {
    this.setState({ score: 95 });
  }
}
```

## setState 문제점
- 상태값이 참조값일때 참조값 내부의 일부 값만 변경 불가
- 불변성 유지때문에 값을 덮어쓰기 때문 

```javascript
class App extends React.Component {
  state = {
    name: "david",
    subject: {
      name: "math",
      score: 90,
    }
  }

  updateScore = () => { // subject.name 값은 유실됨
    this.setState({ subject:{ score: 95 } });
  }
}
```

## setState 문제점 해결
- 기존값 복사한뒤에 변경된 값 추가해서 덮어쓰기

```javascript
class App extends React.Component {
  state = {
    name: "david",
    subject: {
      name: "math",
      score: 90,
    }
  }
  
  updateScore = () => { 
    this.setState({ 
      subject:{ 
        ...this.state.subject, // 기존 subject 복사
        score: 95 // 변경할 score값만 덮어쓰기
      } 
    });
  }
}
```

- state 통채로 복사해서 변경

```javascript
class App extends React.Component {
  state = {
    name: "david",
    subject: {
      name: "math",
      score: 90,
    }
  }

  // 전개 연산자
  updateScoreBySpread = () => { 
    const newState = { ...this.state };
    newState.subject.score = 95; 
    this.setState(newState);
  }
  
  // Object.assign
  updateScoreByAssign = () => { 
    const score = Object.assign({}, this.state.subject, {
        score: 95
    });
    this.setState(score);
  }
}
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

