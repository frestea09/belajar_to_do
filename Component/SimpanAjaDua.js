import {StatusBar} from 'expo-status-bar';
import React from 'react';
import Header from './Component/Header'
import TodoItem from './Component/TodoItem'
import MapView from 'react-native-maps';
import {StyleSheet,Text,View, FlatList,VirtualizedList, ScrollView,TouchableOpacity} from 'react-native';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      'state': null, 
      'author':'ilman teguh prasetya',
      'description':'latihan android ilman teguh prasetya',
      'listMahasiswa':[
        {
          'key':'10112299',
          'name':'ilman teguh prasetya',
          'nilai':'A'
        },
        {
          'key':'10112293',
          'name':'lies hartiani',
          'nilai':'B'
        },
        {
          'key':'10112291',
          'name':'deni jaeni',
          'nilai':'A'
        }
      ]
    }
    this.renderRow = this.renderRow.bind(this);
    this.findCoordinates = this.findCoordinates.bind(this);
  }
  renderRow({item}){
    return(
      <View>
        <Text>Title</Text>
      </View>
    )
  }
  findCoordinates(){
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <Header/>
          <FlatList
            data={this.state.listMahasiswa}
            renderItem={
              ({item}) => (
                <TodoItem dataItem={item}/>
              )
            }
            keyExtractor={(item,index)=>{ return item.key}}
          />
          <TouchableOpacity onPress={this.findCoordinates}>
              <Text style={styles.welcome}>Find My Coords?</Text>
              <Text>Location: {this.state.location}</Text>
          </TouchableOpacity>
          <MapView
            style={{ flex: 1, width: window.width }} //window pake Dimensions
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421 
            }} >
          <MapView.Marker
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            title="Lokasi"
            description="Hello" />
          </MapView>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App
