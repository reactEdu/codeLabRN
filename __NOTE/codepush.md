## 코드 푸쉬 
- https://github.com/microsoft/react-native-code-push
- MS에서 만든 오픈소스로서 앱을 심사없이도 실시간 업데이트를 가능
- 리엑트 네이티브에서는 Javascript단의 코드와 assets(이미지, 폰트 등)의 요소들을 앱 심사없이 바로 업데이트 가능
- 네이티브 코드(AppDelegate.m, MainActivity.java등) 변경은 제외

### 프로세스
- code-push에 앱 등록
- 발급된 키를 이용하여 React-native iOS, Android에 Codepush 설정 (네이티브 설정이 필요)
- Staging으로 실시간 릴리즈
- 확인 후 이상없으면 Production 버전으로 릴리즈

### 설정
- 2가지 방법 사용 가능

```javascript
import codePush from "react-native-code-push";

// 방법1. 감싸준다.
class App extends Component {
// ...
}
App = codePush(App);

// 방법2. 데코레이터 사용
@codePush
class App extends Component {
// ...
}
```

### 업데이트 확인 주기

```javascript
import codePush from "react-native-code-push";
// ON_APP_RESUME, MANUAL
const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
class App extends Component {
// ...
}
App = codePush(codePushOptions)(App);
```

### 이미지 업데이트 가능 범위
- 아래 방법 이외의 방법으로 이미지를 사용하였으면 코드푸시가 아닌 앱배포로 업데이트 해야함

|component|Props|
|-|-|
|Imgage|source|
|MapView.Marker|image|
|ProgressViewIOS|ProgressImage, trackImage|
|TabBarIOS.Item|icon, selectedIcon|
|ToorBarAndroid|actions[].icon, logo, overflowIcon|

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

