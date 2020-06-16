## 인앱 결제
- https://youtu.be/2bH1IwAm8h0
- 소장형: 유료 광고 제거, 기간 무제한 아이템
- 소비형: 게임 내 화폐
- 구독형: 정기구독

### 구글 플레이
- 상품 IO
- 상품 설명
- 가격 정보(국가)

## 앱스토어
- 디지털 컨텐츠는 인앱 결제로만 허용함(심사 반려 사유)

### 사용패키지
- https://github.com/dooboolab/react-native-iap
- 문법 많이 바뀌었으니 직접 레퍼런스 보면서 작업하기

### 초기화

```javascript
try {
  await RNIap.initConnection();
  const products = await RNIap.getProducts(['item.id']);
  console.log('products',products);
} catch(err) {
  console.warn(err);
  Alert.alert('결제 서버 통신 실패', error);
}
```
