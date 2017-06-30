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
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Notification</Text>
                      </View>
                  </View>
              </View>
              <ListView
                 dataSource={ds.cloneWithRows(this.state.homeCard)}
                 renderRow={(rowData) => this.onNotificationContent(rowData)}
                 />
          </View>
      );
  },
  onNotificationContent(rowData){
    return(
      <View>
        <View style={{padding:10, backgroundColor:'#ffffff',marginTop:2,flexDirection:'row',elevation:2}}
          onPress={()=>this.goProductDetailPage()}>
            <Image style={{width:60 * fontD, height:60 * fontD, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
            <View style={{marginLeft:15,width:300}}>
                <Text style={{flex:1,fontSize:15 * fontD, fontWeight:'500', color:'#000000', marginTop:5}}>congratulate alexia569 for logging in daily this week</Text>
                <Text style={{fontSize:15 * fontD, color:'#686868'}}>3 weeks ago</Text>
            </View>
        </View>
      </View>
    )
  },
});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row', alignItems:'center'},
  titleImage:{width:50 * fontD, height:50 * fontD, alignItems:'center', justifyContent:'center'},
  oderStatuse:{width:20 * fontD, height:20 * fontD, borderRadius: 10, borderWidth:1, borderColor: '#686868'},
  oderStatuse1:{marginTop:9.5,width:100 * fontD, height:1, borderWidth:1, borderColor: '#686868'}
});
