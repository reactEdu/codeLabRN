[메인으로](../README.md)

## React Native Component
### View
- Div 역할

### Text
- 모든 텍스트는 반드시 Text 컴포넌트 안에 있어야 함

### StatusBar
- 앱 상단 상태바(시계, 배터리 표시 부분)
- 종류: light-content, dark-content
- ```<StatusBar barStyle="종류"/>```

### Dimensions
- 앱의 크기를 가져올수 있음
- ```const { height, width } = Dimensions.get("window"); ```

### ScrollView
- 스크롤이 가능한 View
- 이걸로 만들지 않으면 넘어가는 부분은 짤려보임(= overflow: hidden)
- contentContainerStyle 프로퍼티로 스타일을 적용

```javascript
<ScrollView contentContainerStyle={styles.todos}>
    <ToDo />
</ScrollView>
```

### TouchableOpacity
- 클릭했을때 반투명 처리
- Event
  - onPress: 누를때
  - onPressOut: 누르고 손가락 띄울때

### TextInput
- input type="text" 역할 
- Event
  - onChangeText: 텍스트가 바뀐때
  - onBlur: 포커스 빠져나갔을때
  - onSubmitEditing: 완료(Done) 클릭시

```javascript
<TextInput style={styles.input} value={toDoValue} multiline={true} underlineColorAndroid={"transparent"}/>
```

### AsyncStorage
- 외부에서 설치하는 걸로 바뀜 
- https://www.npmjs.com/package/@react-native-community/async-storage
- 비동기 처리(async, await)
- 객체 넣을때 json 직렬화처리, 뺄때 json 파싱

```javascript
  // 넣을 때
  AsyncStorage.setItem("toDos", JSON.stringify(newToDos));

  // 꺼낼 때
  getData = async () => {
    try {
      const toDos = await AsyncStorage.getItem("toDos");
      if(toDos !== null) {
        const parseToDos = JSON.parse(toDos);
      }
    } catch (err) {
      console.log(err)
    }
  }
```

### FlatList
- ui > li 역할
- 데이터가 담긴 배열을 data 속성에 넣고 renderItem에 반복될 컴포넌트를 리턴해주면 리스트를 생성

```javascript
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
```

### Image
- 이미지
- resizeMode: contain(비율에 맞춤) stretch(크기에 맞게 늘림)
```javascript
<Image source={{uri: item.image}} style={{width: 300, height: 300}} resizeMode={ 'contain' }/>
```

## ActivityIndicator
- IOS와 Android 각각 기본 로딩화면을 출력

```javascript
import { ActivityIndicator, View} from "react-native";

export default function App() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
```

## ImageBackground
- 백그라운드 이미지 출력
```javascript
import { ImageBackground, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

```

## SafeAreaView
- 노치 형태가 있는 폰들의 뷰 영역에 대응함
- 상단 노치 영역과 하단 홈 슬라이드 영역을 지켜줌

```javascript
<View style={ styles.container }>
  <SafeAreaView>
    ...
  </SafeAreaView>
</View>
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

```javascript
```

