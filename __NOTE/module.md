[메인으로](../README.md)

## 자주쓰는 모듈

### lodash
- _.find( data, item => item.key === key )
	- 조건에 맞는 첫번째 데이터를 반환

```javascript
const item = _.find( data, item => item.key === this.store.value );
```
- _.reject( data, item => item.key === id ); 
	- 조건에 맞는 데이터만 제거해서 다시 반환 -> Array.filter랑 반대

```javascript
const list = _.reject(list, item => item.key === id);
const list = list.filter(item => item.key !== id);
```

- _.isArray(배열)
	- 배열 여부를 boolean으로 반환


### react-navigation
-  버젼 5 기본적인 세팅 및 소개
	- https://dev-yakuza.github.io/ko/react-native/react-navigation-v5/
- 파라미터 넘기고 받는법
	- https://reactnavigation.org/docs/params

#### StackNavigator
- Back 버튼을 구현할 필요가 없어서 많이 사용됨
- 첫번째 Screen 컴포넌트가 맨처음 렌더링 되는 컴포넌트
- 헤더에 버튼 삽입 가능(옵션에 headerRight, headerLeft)
- 헤더에도 정해진 방식으로 스타일링 가능
	- ```headerStyle:{ backgroundColor: 배경색 }, headerTintColor: 글자색, headerTitleStyle: { fontWeight: 글자스타일 }```

```javascript
// StackNavigator 목록 구현
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class AppNav extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="List" component={CocktailList}
						options={{ title: '칵테일 목록', headerRight: () => (<Button title="info" onPress={() => alert("hello")}></Button>),
						headerStyle:{ backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
					}} />
					<Stack.Screen name="Detail" component={CocktailDetail} options={{title: '상세'}} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
```

```javascript
// StackNavigator 리스트
const data = [{
	key: 'GinTonic',
	label: '진토닉',
	description: '진 + 토닉워터',
	image: 'https://t1.daumcdn.net/cfile/tistory/2318C83954F4214129',
}];

export default class CocktailList extends React.Component {
	go = key => {
		this.props.navigation.navigate( 'Detail', { key } );
	};

	renderItem = dataItem => {
		// FlatList의 data에 넣은 배열은 자동으로 item이라는 키 속에 담긴다.
		// item: {key: 'GinTonic',label: '...',description: '...',image: '...'}
		return (
			<TouchableOpacity onPress={() => this.go(dataItem.item.key)} style={this.style.button}>
				<Text style={this.style.text}>{ dataItem.item.label }</Text>
			</TouchableOpacity>
		)
	};

	render() {
		return (
			<View style={{flex:1}}>
				<FlatList
					data={ data }
					renderItem={ this.renderItem }
				/>
			</View>
		)
	}
}
```

```javascript
// StackNavigator 디테일
export default class CocktailDetail extends React.Component {
	render() {
		const key = this.props.route.params.key;
		const item = _.find( data, element => element.key === key );
		if( !item ) {
			return <Text>데이터가 없습니다.</Text>;
		}
		return(
			<View>
				<Image source={{uri: item.image}} style={{width: 300, height: 300}} resizeMode={ 'contain' }/>
				<Text>Label: {item.label}</Text>
				<Text>Description: {item.description}</Text>
			</View>
		);
	}
}
```

## UUID
- RN에 기본 내장되는 것으로 변경됨
- v1: timestamp 기반
- v3: Namespace 기반(MD5)
- v4: Random 기반
- v5: Namespace 기반(SHA-1)

```javascript
// uuid/index.js
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;
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

```javascript
```


