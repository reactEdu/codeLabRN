## 네이티브 연동
- 일반 모듈
  - 비화면 표시 요소에 대한 네이티브 통신
- UI 모듈
  - 네이티브 화면 요소를 직접 출력

```javascript
npm i -g react-native-create-library
```

## Android에 일반 모듈 연동
- ReactContextBaseJavaModule를 상속받아 작업해야함
- @ReactMethod : RN과 통신할 메서드에 붙임

```java
public class ToastModule extends ReactContextBaseJavaModule {
  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }
  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}
```

### 일반 모듈 등록
- ReactPackage를 구현한 클래스 생성
- NativeModule 타입을 구현한 List를 생성해서 modules 추가

```java
public class CustomToastPackage implements ReactPackage {
  @Overrid
  public List<NativeModule> createNativeModule(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new ToastModule(reactContext));
    return modules;
  }
}
```

- 만든 모듈 패키지를 MainApplication.java에 등록

```java
// MainApplication.java
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(), new CustomToastPackage()
  );
}
```

### native.js: 리액트에서 모듈 연결
- NativeModule 객체를 통해서 ToastModule을 연결
- export default(es6)는 연결이 안되는 이슈가 있어서 module.exports(commonJS) 사용

```javascript
import { NativeModule } from 'react-native';
module.exports = NativeModules.ToastModule;
```

### React Native에서의 호출

```javascript
import ToastModule from 'native';
ToastModule.show('Awesome');
```



##  Android에 UI 모듈 연동
- ReactImageManager라는 클래스가 이미 존재하는 상황이라고 가정

```java
public class ReactImageManager extends SimpleViewManager<ReactImageView> {
  public static final String React_CLASS = "RCTImageView";
  
  @Override
  public String getname() {
    return React_CLASS;
  }
}
```

### UI 모듈 ViewManager에 등록
- 일반 모듈이 createNativeModule()을 통해 등록했다면 UI 모듈은 createViewManagers()로 등록
```java
@Override
protected List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
  return Arrays.<ReactPackage>asList(
    new ReactImageManager()
  );
}
```

### ImageView.js: React 컴포넌트와 연결
- requireNativeComponent() 함수를 통해서 UI모듈 컴포넌트 생성
- export default(es6)는 연결이 안되는 이슈가 있어서 module.exports(commonJS) 사용

```javascript
import { requireNativeComponent } from 'react-native';
module.exports = requireNativeComponent("RCTImageView");
```

### 화면에 배치
- 스타일링 지정하는것도 동일하게 동작함

```javascript
import ImageView from './ImageView';

export default function App(props) {
  return <ImageView />
}
```