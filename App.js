import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Hello world</Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.container}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});
export default App