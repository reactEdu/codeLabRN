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

## 참고 동영상
- 파이어베이스 가입 및 연동
  - https://youtu.be/zYojRZ9Wn50
- 파이어베이스 사용법
  - https://youtu.be/jO5EPmzUf28
