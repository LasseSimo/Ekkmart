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
          menushow: false,
          prompt: false
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
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Order Detail</Text>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.titleImage} >
                      <Image
                        style={{width:20 * fontD,height:20 * fontD}}
                        source={require('./image/edit.png')}
                      />
                  </TouchableOpacity>
              </View>
              <ScrollView>
                <View style={{marginTop:10, backgroundColor:'#ffffff', elevation:2, borderBottomWidth:1,borderColor:'#C8C8C8', padding:15}}>
                    <View style={{marginTop:10, alignItems:'center'}}>
                        <Text style={{fontWeight:'700',fontSize:15 * fontD,color:'#000000'}}>customer name</Text>
                        <Text style={{fontSize:20 * fontD,  color: '#00FFFE', marginTop:5}}>$50</Text>
                    </View>
                    <Text style={{fontWeight:'700', flex:1, fontSize:15 * fontD,marginTop:15}}>Order Name</Text>
                    <View style= {{marginTop:20, flexDirection:'row', justifyContent:'center',}}>
                        <View style={{alignItems:'center', width:40 * fontD}}>
                            <View style={[styles.oderStatuse, {backgroundColor: '#0086F8'}]}></View>
                            <Text>Ploud</Text>
                        </View>
                        <View style={[styles.oderStatuse1, {borderColor:'#0086F8'}]}></View>
                        <View style={{alignItems:'center',marginLeft:-10, marginRight:-10}}>
                            <View style={[styles.oderStatuse, {backgroundColor: '#0086F8'}]}></View>
                            <Text>Delivered</Text>
                        </View>
                        <View style={[styles.oderStatuse1, {borderColor:'#0086F8'}]}></View>
                        <View style={{alignItems:'center', width:40 * fontD}}>
                            <View style={[styles.oderStatuse, {backgroundColor: '#0086F8'}]}></View>
                            <Text>Paid</Text>
                        </View>
                    </View>
                </View>

                <View style={{height:30, marginLeft:10, marginRight:10, borderBottomWidth:1,borderColor:'#C8C8C8', justifyContent:'center'}}>
                    <Text style={{fontSize:15 * fontD}}>Order Tracking</Text>
                </View>
                <View style={styles.main}>
                    <Text style={styles.trackingDatename}>Order Date : <Text style={styles.trackingDate}>23/3</Text></Text>
                    <Text style={styles.trackingDatename}>Deliverly Date: <Text style={styles.trackingDate}>25/3</Text></Text>
                    <Text style={styles.trackingDatename}>Payment Date: <Text style={styles.trackingDate}>29/3</Text></Text>
                </View>
                <View style={{height:30, marginLeft:10, marginRight:10, borderBottomWidth:1,borderColor:'#C8C8C8', justifyContent:'center'}}>
                    <Text style={{fontSize:15 * fontD}}>Order items</Text>
                </View>
                <View style={styles.main}>
                    <View style={{borderBottomWidth:1, backgroundColor:'#ffffff', padding:10, borderBottomWidth:1, borderColor:'#C8C8C8', justifyContent:'center'}}>
                        <View style={{flexDirection:'row'}}><Text style={[styles.trackingDatename, {flex:1}]}>product name</Text><Text style={styles.trackingDate}>Total Paid</Text></View>
                        <Text style={styles.trackingDatename}>Quanity</Text>
                    </View>
                    <View style={{borderBottomWidth:1, backgroundColor:'#ffffff', padding:10, borderBottomWidth:1, borderColor:'#C8C8C8', justifyContent:'center'}}>
                        <View style={{flexDirection:'row'}}><Text style={[styles.trackingDatename, {flex:1}]}>product name</Text><Text style={styles.trackingDate}>Total Paid</Text></View>
                        <Text style={styles.trackingDatename}>Quanity</Text>
                    </View>
                </View>
                <TouchableOpacity style={{alignItems:'center', justifyContent:'center', backgroundColor:'#0086F8', marginTop:5,height:40}}
                  onPress={()=>this.setState({prompt: true})}>
                    <Text>Get Signature</Text>
                </TouchableOpacity>
                <View style={{height:30, marginLeft:10, marginRight:10, borderBottomWidth:1,borderColor:'#C8C8C8', justifyContent:'center'}}>
                    <Text style={{fontSize:15 * fontD}}>Add Attachment</Text>
                </View>
                <View style={[styles.main, {height:150}]}>

                </View>
              </ScrollView>
              {this.state.prompt ?
                <TouchableWithoutFeedback onPress={()=>this.setState({prompt: false})}>
                  <View style={styles.prompt}>
                      <View style= {{width:300 * fontD, height:190, backgroundColor:'#ffffff', borderRadius:5}}>
                          <View style={{flexDirection:'row',height:50, }}>
                              <TouchableOpacity style={{elevation:2,flex:1,borderTopLeftRadius:5, alignItems:'center', justifyContent:'center', backgroundColor:'#0086F8',}}>
                                  <Text>Cancel</Text>
                              </TouchableOpacity>
                              <View style={{width:1, height:42, marginTop:3, backgroundColor:'#ffffff'}}></View>
                              <TouchableOpacity style={{elevation:2,flex:1,borderTopRightRadius:5, backgroundColor:'#0086F8', alignItems:'center', justifyContent:'center',}}>
                                  <Text>Done</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                </TouchableWithoutFeedback>
                  :null}
          </View>
      );
  },
});

var styles = StyleSheet.create({
  container: {flex:1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row', elevation:2},
  titleImage:{width: 50 * fontD, height: 50 * fontD, alignItems: 'center', justifyContent: 'center'},
  oderStatuse:{width: 20 * fontD, height: 20 * fontD, borderRadius: 10,},
  oderStatuse1:{marginTop: 9.5, width: 100 * fontD, height:1, borderWidth:1, borderColor: '#686868'},
  custom:{flex:1, alignItems: 'center', justifyContent: 'center'},
  wrapper: {height:50,},
  slide:{height:50},
  prompt: {position:'absolute', top:0, left:0, right:0, bottom:0,backgroundColor:'#000000af',alignItems:'center', justifyContent:'center'},
  trackingDatename:{fontSize:15 * fontD, marginTop:5},
  trackingDate:{fontSize:15 * fontD, color:'#0086F8'},
  main:{ backgroundColor:'#ffffff', padding:10, borderBottomWidth:1, borderColor:'#C8C8C8', justifyContent:'center', elevation:2},
});
