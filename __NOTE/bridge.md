## 네이티브 연동
- 모듈
  - 비화면 표시 요소에 대한 네이티브 통신
- UI 모듈
  - 네이티브 화면 요소를 직접 출력

```javascript
npm i -g react-native-create-library
```

## Android 연동
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

### 모듈 등록
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

```java
// MainApplication.java
protected List<ReactPackage> getPackage
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

