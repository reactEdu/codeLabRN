## REACT NATIVE FIREBASE
- npm install --save @react-native-firebase/app
- cd ios & pod install
- open codeLabRN.xcworkspace
  - 현재 프로젝트 xcode가 바로 열림
  - Bundle Identifier 확인 가능
![FB01_번들아이디](./img/FB01_번들아이디.png)

- 파이어베이스 로그인 후 iOS 앱에 Firebase 추가
  - Bundle Identifier 입력
![FB02_앱등록](./img/FB02_앱등록.png)

- 구성파일 다운로드 & ios 프로젝트 루트폴더에 추가
![FB03_Xcode에파일추가](./img/FB03_Xcode에파일추가.png)

- Podfile열고 target 'codeLabRN' do의 end끝나기 전에 아래 문구 추가
  - ```pod 'Firebase/Analytics'``
  - pod update 실행

- AppDelegate.m 파일 수정
![파일수정1](./img/FB04_AppDelegate.m파일수정1.png)
![파일수정2](./img/FB04_AppDelegate.m파일수정2.png)

- 앱 실행해서 설치 확인
  - import firebase from '@react-native-firebase/app';
  - Xcode에서 ▶ 눌러서 시뮬레이터로 실행해보기
![앱실행후설치확인](./img/FB05_앱실행후설치확인.png)

- 익명 로그인
  - https://rnfirebase.io/auth/usage
![FB06_익명로그인](./img/FB06_익명로그인.png)

```javascript
import auth from '@react-native-firebase/auth';

class RnFirebase extends Component {
  componentDidMount() {
    auth().signInAnonymously()
    .then( authInfo => {
      console.log('authInfo', authInfo);
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
      
      console.error(error);
    });
  }
}
```

- 익명 로그인
  - https://rnfirebase.io/auth/usage
  - firebase console -> Authentication -> 이메일/비밀번호
  
```javascript
import auth from '@react-native-firebase/auth';

class RnFirebase extends Component {
  componentDidMount() {
    // 이메일로 가입시키고 로그인
    auth()
    .createUserWithEmailAndPassword('<test1></test1>@gmail.com', 'SuperSecretPassword!')
    .then( authInfo => {
      console.log('authInfo', authInfo);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
  }
}  
```

## 참고 동영상
- 파이어베이스 가입 및 연동
  - https://youtu.be/zYojRZ9Wn50
- 파이어베이스 사용법
  - https://youtu.be/jO5EPmzUf28
