import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//view가 컨테이너 / span p h1 쓸수 없음 모두 text

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <StatusBar style="black" />
      {/* 시계 배터리 와이파이 ios 안드로이드 상태바 화면에 표시되지 않음*/}
    </View>
  );
}

// StyleSheet.create 자동 완성 기능을 제공함
const styles = StyleSheet.create({
  //클라스 네임처럼 쓰면됨
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color: 'black',
  }
});

//컴포턴트 : 화면에 렌더링 / api : 자바스크립트 코드