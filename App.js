import * as Location from 'expo-location';
import { StatusBar } from "expo-status-bar";

import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";

//Dimensions width 반응형으로 스크린 크기 얻기
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// console.log(SCREEN_WIDTH);

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async() => {
    // const permission = await Location.requestForegroundPermissionsAsync();
    // console.log(permission);
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false);
    }
    // 허용하지 않았을때
    // const location = await Location.getCurrentPositionAsync({accuracy:5});
    // console.log(location);
    const {
      coords : { latitude, longitude },
     } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude}, {useGoogleMaps:false}
    );
    setCity(location[0].city);
  };
  useEffect(() => {
    ask();
  }, [])
  return (
      <View style={styles.container}>
        <StatusBar style="black" />

        <View style={styles.city}>
          <Text style={styles.cityName}>{city}</Text>
        </View>

        <ScrollView
          //pagingEnabled 스코롤 스띠끼~ 효과
          pagingEnabled
          horizontal
          // indicatorStyle
          //스코롤바 색깔
          // 가로스코롤 없애기
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },

  //scorllView는 플렉스 사용 x
  weather: {

  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});