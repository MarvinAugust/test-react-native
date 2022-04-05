import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, Alert, ActivityIndicator } from 'react-native';

export default function App() {
  const Boutton = ()=>{
    Alert.alert ("Alert !!!!!");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Marvin</Text>
        <Text style={styles.name}>August</Text>
        <Text style={styles.age}>21</Text>
        <Image
  source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
  style={{ width: 300, height: 100 }} />
  <Image source={require('./image/jquery.png')} 
	style={{ width: 100, height: 100 }} /> 
  <Pressable onPress={Boutton}>
    <Text style={styles.alerte}>Alerte</Text>
  </Pressable>
  <ActivityIndicator size="large" color="#000000" />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  subContainer: {
    backgroundColor: 'white',
    marginTop : 100    
  },
  title: {
    fontSize : 30,
  },
  name : {
    textAlign : 'center'
  },
  age : {
    fontWeight : 'bold'
  },
  alerte : {  
    marginTop : 30,
    textAlign : 'center',
    fontSize : 30,
    borderStyle : 'solid',
    borderColor : 'black',
    backgroundColor : 'green'
  }
});
