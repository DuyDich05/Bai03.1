import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.square}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square:{
    backgroundColor:'#000',
    height: 200,
    width: 200,
    justifyContent:'center',
    alignItems: 'center'
  },
  text:{
    color:'#FFF',
    fontSize: 18
  }
});
