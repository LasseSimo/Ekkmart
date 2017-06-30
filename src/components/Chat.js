import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  View,
  ScrollView,
  ListView,
  Text,
  Dimensions,
  TextInput,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from 'react-native';
var global = require('./global');
var SideMenu = require('./sideMenu');
import Triangle from 'react-native-triangle';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
var { width, height } = Dimensions.get('window');
var fontD = width/400;
import Drawer from 'react-native-drawer';
var { width, height } = Dimensions.get('window');
var r_width =  width / 356;
var r_height = height / 647;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var countries = require('country-data').callingCountries
countriesAll = require('country-data').countries
var drawerStyles = {
    drawer: {
        shadowColor: "#00000000",
        shadowOpacity: 0.8,
        shadowRadius: 0,
    },
    main: {paddingLeft: 3},
};
module.exports = React.createClass({
  getInitialState: function() {
      return {
          data : global.data,
          text : '',
          homeCard: [0,1,3,4,3,3,3,],
          customorCard:[0,1],
          orderCard:[0,1]
      }
  },
  componentDidMount(){

  },
  closeDrawer: function(){
    this.refs.drawer.close();
  },
  openDrawer: function(){
    this.refs.drawer.open();
  },
  onProduct(){
    this.refs.drawer.close();
    if(this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name == 'product'){
    }else{
      this.props.navigator.push({'name': 'product',
        sceneConfig: {
          ...Navigator.SceneConfigs.FloatFromRight,
          gestures: {}
        }});
    }
  },
  onHome(){
    this.refs.drawer.close();
    if(this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name == 'home'){
    }else{
    this.props.navigator.push({'name': 'home',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
    }
  },
  render: function() {
      return (
          <View style={styles.container}>
              <View style = {styles.topView}>
                  <View style={{flex:1, flexDirection:'row'}}>
                      <TouchableOpacity style={styles.titleImage} onPress={()=>this.props.navigator.pop()}>
                          <Image
                            style={{width:20,height:20}}
                            source={require('./image/back.png')}
                          />
                      </TouchableOpacity>
                      <View style={{alignItems:'center', justifyContent:'center'}}>
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Chat</Text>
                      </View>
                  </View>
                  <View style={{marginRight: 15, flexDirection:'row', borderWidth:0.5,height:35, borderColor:'#ffffff', alignItems:'center'}}>
                      <TextInput
                        style={{paddingLeft:5,height:40 * fontD, fontSize:17 * fontD, color:'#ffffff', width: 150 * fontD, marginTop:5}}
                        underlineColorAndroid = "#ffffff"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        underlineColorAndroid = '#0086F8'
                        defaultValue = 'Singapore'
                      />
                      <TouchableOpacity style={styles.titleImage}>
                          <Image
                            style={{width:20,height:20}}
                            source={require('./image/search.png')}
                          />
                      </TouchableOpacity>
                  </View>
              </View>
              <ListView
                 dataSource={ds.cloneWithRows(this.state.homeCard)}
                 renderRow={(rowData) => this.onProductContent(rowData)}
                 />
          </View>
      );
  },
  onProductContent(rowData){
    return(
      <View>
        <View style={{padding:20, backgroundColor:'#ffffff',flexDirection:'row', marginTop:2,elevation:2}}
          onPress={()=>this.goProductDetailPage()}>
            <Image style={{width:60, height:60, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
            <View style={{marginLeft:15}}>
                <View style={{flexDirection:'row', alignItems:'center', width:300}}>
                    <Text style={{flex:1,fontSize:15 * fontD, fontWeight:'500', color:'#000000', marginTop:5}}>Ekkdan Confi</Text>
                    <Text style={{fontSize:15 * fontD, marginTop:5, color:'#06DA5A'}}>20:00</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', width:300}}>
                    <Text style={{flex:1,fontSize:15 * fontD, marginTop:5, color:'#686868'}}>Family Muni:OKAY</Text>
                    <View style={{alignItems:'center', justifyContent:'center', width:20, height:20, borderRadius:10, backgroundColor:'#06DA5A'}}>
                        <Text style={{color:'#ffffff'}}>2</Text>
                    </View>
                </View>
            </View>
        </View>
      </View>
    )
  },

});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row', alignItems:'center'},
  titleImage:{width:50, height:50, alignItems:'center', justifyContent:'center'},
  oderStatuse:{width:20, height:20, borderRadius: 10, borderWidth:1, borderColor: '#686868'},
  oderStatuse1:{marginTop:9.5,width:100, height:1, borderWidth:1, borderColor: '#686868'}
});
