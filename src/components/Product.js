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
                            style={{width:20 * fontD,height:20 * fontD}}
                            source={require('./image/menu.png')}
                          />
                      </TouchableOpacity>
                      <View style={{alignItems:'center', justifyContent:'center'}}>
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Product</Text>
                      </View>
                  </View>
                  <View style={{marginRight: 15, flexDirection:'row', borderWidth:0.5,height:35, borderColor:'#ffffff', alignItems:'center'}}>
                      <TextInput
                        style={{paddingLeft:5,height:40, fontSize:17 * fontD, color:'#ffffff', width: 150,marginTop:5}}
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
              <ScrollableTabView
                renderTabBar={() => <DefaultTabBar
                  style = {{elevation:2}}

                  textStyle = {{fontSize: 16 * fontD, fontFamily:'Roboto-Medium', color:this.state.type == 0 ?'#ffffff':'#ffffffc0'}}
                  underlineStyle  = {{backgroundColor: '#ffffff'}}
                  backgroundColor = '#45ADF6'
                  />}>
                    <View tabLabel='Product'>
                        <ListView
                           dataSource={ds.cloneWithRows(this.state.homeCard)}
                           renderRow={(rowData) => this.onProductContent(rowData)}
                       />
                    </View>
                    <View tabLabel='Product Bundle'>

                    </View>
              </ScrollableTabView>
          </View>
          </Drawer>
      );
  },
  onProductContent(rowData){
    return(
      <View>
        <TouchableOpacity style={{padding:20, backgroundColor:'#ffffff',flexDirection:'row', marginTop:10,elevation:2}}
          onPress={()=>this.goProductDetailPage()}>
            <Image style={{width:60 * fontD, height:60 * fontD, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
            <View style={{marginLeft:15}}>
                <Text style={{fontSize:15 * fontD, fontWeight:'500', marginTop:5}}>Brand Name - Product titile</Text>
                <Text style={{fontSize:13 * fontD, marginTop:5, color:'#686868'}}>Wight - WightUnit</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
  },
  goProductDetailPage(){
    this.props.navigator.push({'name': 'productDetail',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
  },

});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row', alignItems:'center'},
  titleImage:{width:50 * fontD, height:50 * fontD, alignItems:'center', justifyContent:'center'},
  oderStatuse:{width:20 * fontD, height:20 * fontD, borderRadius: 10, borderWidth:1, borderColor: '#686868'},
  oderStatuse1:{marginTop:9.5,width:100 * fontD, height:1, borderWidth:1, borderColor: '#686868'}
});
