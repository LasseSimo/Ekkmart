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

import Drawer from 'react-native-drawer';
var { width, height } = Dimensions.get('window');
var fontD = width/400;
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
  render: function() {
      return (
          <View style={styles.container}>
              <View style = {styles.topView}>
                  <View style={{flex:1, flexDirection:'row'}}>
                      <TouchableOpacity style={styles.titleImage} onPress={()=>this.props.navigator.pop()}>
                          <Image
                            style={{width:20 * fontD,height:20 * fontD}}
                            source={require('./image/back.png')}
                          />
                      </TouchableOpacity>
                      <View style={{alignItems:'center', justifyContent:'center'}}>
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Search</Text>
                      </View>
                  </View>
                  <View style={{marginRight: 15, flexDirection:'row', borderWidth:0.5,height:35, borderColor:'#ffffff', alignItems:'center'}}>
                      <TextInput
                        style={{paddingLeft:5,height:40, fontSize:17 * fontD, color:'#ffffff', width: 200 * fontD,marginTop:5}}
                        underlineColorAndroid = "#ffffff"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        underlineColorAndroid = '#0086F8'
                        defaultValue = 'Singapore'
                      />
                      <TouchableOpacity style={styles.titleImage}>
                          <Image
                            style={{width:20 * fontD,height:20 * fontD}}
                            source={require('./image/search.png')}
                          />
                      </TouchableOpacity>
                  </View>
              </View>
              <View style={{backgroundColor: '#ffffff', padding:10, marginTop:5, elevation:2}}>
                  <View style={{flexDirection:'row', marginTop:10, backgroundColor:'#ffffff'}}>
                      <View style={styles.mainview}>
                          <Text>
                            Order
                          </Text>
                      </View>
                      <View style={styles.mainview}>
                        <Text>
                          Product
                        </Text>
                      </View>
                      <View style={styles.mainview}>
                        <Text>
                          Customer
                        </Text>
                      </View>
                      <View style={styles.mainview}>
                        <Text>
                          Message
                        </Text>
                      </View>
                  </View>
                  <ListView
                     dataSource={ds.cloneWithRows(this.state.homeCard)}
                     renderRow={(rowData) => this.onNotificationContent(rowData)}
                     />
             </View>
          </View>
      );
  },
  onNotificationContent(rowData){
    return(
      <View style={{flexDirection:'row', backgroundColor:'#ffffff'}}>

      </View>
    )
  },
});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row', alignItems:'center', elevation:2},
  titleImage:{width:50 * fontD, height:50 * fontD, alignItems:'center', justifyContent:'center'},
  oderStatuse:{width:20 * fontD, height:20 * fontD, borderRadius: 10, borderWidth:1, borderColor: '#686868'},
  mainview:{flex:1, height:50, borderWidth:0.5, alignItems:'center', justifyContent:'center', borderBottomWidth:1}
});
