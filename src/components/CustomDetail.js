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
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
var global = require('./global');
var SideMenu = require('./sideMenu');
import Triangle from 'react-native-triangle';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var { width, height } = Dimensions.get('window');
var fontD = width/400;
module.exports = React.createClass({
  getInitialState: function() {
      return {
          data : global.data,
          text : '',
          menushow: false
      }
  },
  render: function() {
      return (
          <View style={styles.container}>
              <View style = {styles.topView}>
                  <View style={{flex:1, flexDirection:'row'}}>
                      <TouchableOpacity style={styles.titleImage} onPress={()=>this.props.navigator.pop()}>
                          <Image
                            style={{width:20 * fontD, height:20 * fontD}}
                            source={require('./image/back.png')}
                          />
                      </TouchableOpacity>
                      <View style={{alignItems:'center', justifyContent:'center'}}>
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Custom Detail</Text>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.titleImage} >
                      <Image
                        style={{width:20 * fontD, height:20 * fontD}}
                        source={require('./image/edit.png')}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.titleImage} onPress={()=>this.setState({menushow:true})}>
                      <Image
                        style={{width:20 * fontD,height:20 * fontD}}
                        source={require('./image/add.png')}
                      />
                  </TouchableOpacity>
              </View>
              <View style={styles.wrapper} >
                  <Swiper
                    height = {150}
                    showsButtons={false}>
                      <Image
                        style={{flex:1,height:150, backgroundColor:'#283d68', marginTop:5}}
                        source={require('./image/a1.jpg')}
                      />
                      <Image
                        style={{flex:1,height:150, backgroundColor:'#283d68', marginTop:5}}
                        source={require('./image/a2.jpg')}
                      />
                      <Image
                        style={{flex:1,height:150, backgroundColor:'#283d68', marginTop:5}}
                        source={require('./image/a1.jpg')}
                      />
                  </Swiper>
              </View>
              <View style={{backgroundColor:'#F2F8FE', marginBottom:5, elevation:2}}>
                  <Text style={{marginLeft:20, fontSize:17 * fontD, fontWeight:'500', color:'#404040', marginTop:15, marginBottom:15}}>Dipu</Text>
                  <View style={{flexDirection:'row', marginTop: 15, marginBottom:15}}>
                      <TouchableOpacity style={styles.custom}>
                          <Image
                            style={{width:30 * fontD,height:30 * fontD}}
                            source={require('./image/call.png')}
                          />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.custom}>
                          <Image
                            style={{width:30 * fontD,height:30 * fontD}}
                            source={require('./image/chatCustom.png')}
                          />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.custom}>
                          <Image
                            style={{width:30 * fontD,height:30 * fontD}}
                            source={require('./image/location.png')}
                          />
                      </TouchableOpacity>
                  </View>
              </View>
              <ScrollableTabView
                renderTabBar={() => <DefaultTabBar
                  style = {{elevation:2, marginBottom:5}}
                  activeTextColor = '#2663BA'
                  inactiveTextColor = '#787878'
                  textStyle = {{fontSize: 16 * fontD, fontFamily:'Roboto-Medium'}}
                  underlineStyle  = {{backgroundColor: '#2663BA'}}
                  backgroundColor = '#ffffff'
                  />}>
                    <View tabLabel='ODER'>

                    </View>
                    <View tabLabel='CONTENT'>

                    </View>
                    <View tabLabel='BRANCH'>

                    </View>
              </ScrollableTabView>
              {this.state.menushow ?
              <TouchableWithoutFeedback onPress={()=>this.setState({menushow:false})}>
              <View style = {styles.prompt}>
                  <View style= {{width:300 * fontD, height:190, backgroundColor:'#ffffff', borderRadius:5, padding:20}}>
                      <TouchableOpacity style={{height:50, justifyContent:'center'}}>
                          <Text style={{fontSize:15 * fontD, fontWeight:'500'}}>Create Oder</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{height:50, justifyContent:'center'}}>
                          <Text style={{fontSize:15 * fontD, fontWeight:'500'}}>Create Content</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{height:50, justifyContent:'center'}}>
                          <Text style={{fontSize:15 * fontD, fontWeight:'500'}}>Create Branch</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              </TouchableWithoutFeedback>:null}
          </View>
      );
  },
});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row',elevation:2},
  titleImage:{width:50 * fontD, height:50 * fontD, alignItems:'center', justifyContent:'center'},
  oderStatuse:{width:20 * fontD, height:20 * fontD, borderRadius: 10, borderWidth:1, borderColor: '#686868'},
  oderStatuse1:{marginTop:9.5,width:100 * fontD, height:1, borderWidth:1, borderColor: '#686868'},
  custom:{flex:1, alignItems:'center', justifyContent:'center'},
  wrapper: {elevation:2, marginBottom:5},
  slide:{height:50 * fontD},
  prompt: {position:'absolute', top:0, left:0, right:0, bottom:0,backgroundColor:'#000000af',alignItems:'center', justifyContent:'center', elevation:2}
});
