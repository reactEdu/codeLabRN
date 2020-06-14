[메인으로](../README.md)

## React Native에서 CSS 
- CSS와 유사한 형태의 표현식 사용(CSS Engine 아님)
- 전처리기(Sass) 사용 불가

### StyleSheet 컴포넌트
- 오브젝트 형태로 스타일을 주기 위함
- 퍼포먼스를 위해 통해 사용할 것을 권장

```javascript
export default function App() {
  return <View style={styles.container}><Text>Hello world</Text></View>
}
// 이 변수이름이 style 프로퍼티의 값의 접근자로 쓰임
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
})
```

- 배열로 여러개 스타일링 적용 가능(여러번 사용하면 메모리 이슈있음)
- 연산자로 조건식 스타일링 적용 가능

```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, this.props.isActive && styles.activeTitle]}>Array Styling</Text>
    </View>
  )
}
```

### Platform 컴포넌트
- css안에서 플랫폼을 구별해서 적용하게 해줌

```javascript
const styles = StyleSheet.create({
  card: {
    // 개별 플랫폼 box-shadow 처리  
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5, // 그림자 퍼짐
        shadowOffset: {
          height: -1,
          width: 0,
        }
      },
      android: {
        elevation: 3 // 안된다는 사람 있어서 안드로이드 폰에서 확인해보기
      }
    })
  }
});
```

### 매모리 최적화 #1
- 반복해서 사용하는 스타일링은 default로 빼놓고 사용

```javascript
const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  selectedList: {
    backgroundColor: 'red',
  },
})

export default styles;
```

### 매모리 최적화 #2 : Flatten
- 두개의 스타일링을 하나로 합쳐놓고 사용 : 배열보다 권장됨

```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.list, styles.selectedList]}>A</Text>
      <Text style={StyleSheet.flatten([styles.list, styles.selectedList])}>B</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  selectedList: {
    backgroundColor: 'red',
  },
})
// { flex: 1, alignItems: 'center' backgroundColor: 'red',}
```

### RN에만 존재하는 CSS
- marginVertical:  margin: x 0;