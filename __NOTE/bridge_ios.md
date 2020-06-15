## IOS에 일반 모듈 연동

```swift
#import <React/RCTBridgeModule.h>

@interface CalendarManager : NSObject <RCTBridgeModule>
@end
```

### 브릿지 모듈 추가

- RCT_EXPORT_MODULE()를 호출하면 브릿지를 통해 리액트 네이티브와 통신 가능한 클래스가 됨

```swift
#import "CalendarManager.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

@end
```

### 메소드 추가
- addEvent 라는 이름의 메서드를 추가할 것이고 매개변수는 name, location

```swift
#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_MODULE(addEvent:(NSString *)name location:(NSString *)location) 
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
```

### native.js: 리액트에서 모듈 연결
- NativeModule 객체를 통해서 CalendarManager 연결

```javascript
import { NativeModule } from 'react-native';
const CalendarManager = NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday party', 'my home');
```



## IOS에 UI 모듈 연동

```swift
// RNTMapManager.m
#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}
@end
```

### MapView.js: React 컴포넌트와 연결
- export default(es6)는 연결이 안되는 이슈가 있어서 module.exports(commonJS) 사용

```javascript
import { requireNativeComponent } from 'react-native';
module.exports = requireNativeComponent('RNTMap', null);
```

### 화면에 배치
- 스타일링 지정하는것도 동일하게 동작함

```javascript
import MapView from './MapView';

export default function App(props) {
  return <MapView />
}
```
