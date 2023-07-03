import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex : 1 }}>
      <View style={{ flex: 1, backgroundColor:"tomato"}}></View>
      <View style={{ flex: 5, backgroundColor:"teal"}}></View>
      <View style={{ flex: 1, backgroundColor:"orange"}}></View>
    </View>
  );
}
//display : flex 를 외칠 필요가 없음 디렉션 기본값 column
//너비와 높이를 기반으로 하여 박스를 만들지 않아야함! 반응형으로 만들어야함
//부모에 플렉스 1 주고 자식에 플렉스 퍼센트 줘서 레이아웃 나누기