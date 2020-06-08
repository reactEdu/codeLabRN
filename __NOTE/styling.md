[메인으로](../README.md)

## React Native에서 CSS 

### StyleSheet 컴포넌트
- 오브젝트 형태로 스타일을 주기 위함

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
### RN에만 존재하는 CSS
- marginVertical:  margin: x 0;