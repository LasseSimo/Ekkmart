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
        <Drawer
          ref="drawer"
          type="overlay"
          content={
            <SideMenu
              closeDrawer={this.closeDrawer}
              onProduct={this.onProduct}
              onHome={this.onHome}
              onSetting={this.onSetting}
              onNotifications = {this.onNotifications}
              onPlaceList = {this.onPlaceList}
              onRedeem = {this.onRedeem}
            />}
          tapToClose={false}
          openDrawerOffset={0.3}
          panCloseMask={0.5}
          closedDrawerOffset={-3}
          captureGestures={true}
          negotiatePan={true}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          >
          <View style={styles.container}>
              <View style = {styles.topView}>
                  <View style={{flex:1, flexDirection:'row'}}>
                      <TouchableOpacity style={styles.titleImage} onPress={()=>this.openDrawer()}>
                          <Image
                            style={{width:20,height:20}}
                            source={require('./image/menu.png')}
                          />
                      </TouchableOpacity>
                      <View style={{alignItems:'center', justifyContent:'center'}}>
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Home</Text>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.titleImage} onPress={()=>this.goSearchPage()}>
                      <Image
                        style={{width:20,height:20}}
                        source={require('./image/search.png')}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.titleImage} onPress={()=>this.goChatPage()}>
                      <Image
                        style={{width:20,height:20}}
                        source={require('./image/chat.png')}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.titleImage} onPress={()=>this.goNotificationPage()}>
                      <Image
                        style={{width:20,height:20}}
                        source={require('./image/notification.png')}
                      />
                  </TouchableOpacity>
              </View>
              <ScrollableTabView
                renderTabBar={() => <DefaultTabBar
                  style = {{elevation:2}}
                  textStyle = {{fontSize: 14 * fontD, fontFamily:'Roboto-Medium', color:this.state.type == 0 ?'#ffffff':'#ffffffc0'}}
                  underlineStyle  = {{backgroundColor: '#ffffff'}}
                  backgroundColor = '#45ADF6'
                  />}>
                    <View tabLabel='HOME'>
                        <ListView
                           dataSource={ds.cloneWithRows(this.state.homeCard)}
                           renderRow={(rowData) => this.onHomeContent(rowData)}
                       />
                    </View>
                    <View tabLabel='CUSTOMOR'>
                        <ListView
                           dataSource={ds.cloneWithRows(this.state.customorCard)}
                           renderRow={(rowData) => this.onCustomerContent(rowData)}
                       />
                    </View>
                    <View tabLabel='ODRER'>
                        <ListView
                           dataSource={ds.cloneWithRows(this.state.orderCard)}
                           renderRow={(rowData) => this.onOrderContent(rowData)}
                       />
                    </View>
              </ScrollableTabView>
          </View>
          </Drawer>
      );
  },
  onHomeContent(rowData){
    return(
      <View style={{flex:1, backgroundColor:'#ffffff', marginTop:10,elevation:2}}>
          <Text style={{color: '#000000', fontSize: 14 * fontD, marginLeft:10}}>4 Core Movies that Stretch and Strengthen</Text>
          <Text style={{color: '#929292', fontSize: 11 * fontD, marginTop:2, marginLeft:10}}>2 hours ago</Text>
          <Text style={{color: '#21252B', fontSize: 12 * fontD, marginTop:5, marginLeft:10, marginRight:10}}>4 Core Movies that Stretch and Strengthen 4 Core Movies that Stretch and Strengthen</Text>
          <Image
            style={{flex:1,height:150, backgroundColor:'#283d68', marginTop:5}}
            source={require('./image/a2.jpg')}
          />
      </View>
    )
  },
  onCustomerContent(rowData){
    return(
      <View>
      <TouchableOpacity style={{padding:20, backgroundColor:'#ffffff',flexDirection:'row', marginTop:10,elevation:2}}
        onPress={()=>this.goCustomDetailPage()}>
          <Image style={{width:60, height:60, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
          <View style={{marginLeft:15}}>
              <Text style={{fontSize:15 * fontD, fontWeight:'500', marginTop:5}}>Company Name</Text>
              <Text style={{fontSize:13 * fontD, marginTop:5, color:'#686868'}}>Company Informatin</Text>
          </View>
      </TouchableOpacity>
      </View>
    )
  },
  onOrderContent(rowData){
    return(
      <TouchableOpacity style={{marginTop:10, elevation:2, backgroundColor:'#ffffff', padding:15}} onPress={()=>this.goOrderPage()}>
          <View style={{height:25,  borderBottomWidth:0.5, }}>
              <Text>Date</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:10}}>
              <Text style={{ fontWeight:'700', flex:1, fontSize:15 * fontD,}}>Customer name</Text>
              <Text style={{ color: 'red'}}>Paid</Text>
          </View>
          <Text style={{fontWeight:'700', flex:1, fontSize:15 * fontD,marginTop:15}}>Order Name</Text>
          <View style= {{marginTop:20, flexDirection:'row', justifyContent:'center',}}>
              <View style={{alignItems:'center', width:40}}>
                <View style={styles.oderStatuse}></View>
                <Text>Ploud</Text>
              </View>
              <View style={styles.oderStatuse1}></View>
              <View style={{alignItems:'center',marginLeft:-10, marginRight:-10}}>
                <View style={styles.oderStatuse}></View>
                <Text>Delivered</Text>
              </View>
              <View style={styles.oderStatuse1}></View>
              <View style={{alignItems:'center', width:40}}>
                <View style={styles.oderStatuse}></View>
                <Text>Paid</Text>
              </View>
          </View>
      </TouchableOpacity>
    )
  },
  goCustomDetailPage(){
    this.props.navigator.push({'name': 'customDetail',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
  },
  goOrderPage(){
    this.props.navigator.push({'name': 'orderDetail',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
  },
  goChatPage(){
    this.props.navigator.push({'name': 'chat',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
  },
  goSearchPage(){
    this.props.navigator.push({'name': 'search',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
  },
  goNotificationPage(){
    this.props.navigator.push({'name': 'notification',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
  },
});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row'},
  titleImage:{width:50, height:50, alignItems:'center', justifyContent:'center'},
  oderStatuse:{width:20, height:20, borderRadius: 10, borderWidth:1, borderColor: '#686868'},
  oderStatuse1:{marginTop:9.5,width:100, height:1, borderWidth:1, borderColor: '#686868'}
});
