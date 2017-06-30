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
                            style={{width:20 * fontD,height:20 * fontD}}
                            source={require('./image/back.png')}
                          />
                      </TouchableOpacity>
                      <View style={{alignItems:'center', justifyContent:'center'}}>
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Product Detail</Text>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.titleImage} >
                      <Image
                        style={{width:20 * fontD,height:20 * fontD}}
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
              <ScrollView>
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

                      </Swiper>
                  </View>
                  <View style={styles.mainView}>
                      <View style={styles.detailView}>
                        <Text style={styles.deteilName}>Brand</Text>
                        <Text style = {styles.deteilProduct}>PHLIPS</Text>
                      </View>
                      <View style={styles.detailView}>
                        <Text style={styles.deteilName}>Product Name</Text>
                        <Text style = {styles.deteilProduct}>???</Text>
                      </View>
                      <View style={styles.detailView}>
                        <Text style={styles.deteilName}>SKU</Text>
                        <Text style = {styles.deteilProduct}>???</Text>
                      </View>
                      <View style={styles.detailView}>
                        <Text style={styles.deteilName}>barcode</Text>
                        <Text style = {styles.deteilProduct}>???</Text>
                      </View>
                      <View style={styles.detailView}>
                        <Text style={styles.deteilName}>wight - wightunit</Text>
                        <Text style = {styles.deteilProduct}>???</Text>
                      </View>
                      <View style={styles.detailView}>
                        <Text style={styles.deteilName}>PackageType</Text>
                        <Text style = {styles.deteilProduct}>???</Text>
                      </View>
                      <View style={styles.detailView}>
                        <Text style={styles.deteilName}>Unit Paid</Text>
                        <Text style = {styles.deteilProduct}>???</Text>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.mainView}>
                      <View style={styles.detailView}>
                            <Text style = {styles.deteilProduct}>PACKAGE</Text>
                      </View>
                      <View style={{backgroundColor:'#ffffff',flexDirection:'row', marginTop:10,}}>
                          <Image style={{width:60 * fontD, height:60 * fontD, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
                          <View style={{marginLeft:15}}>
                              <Text style={{fontSize:17 * fontD, fontWeight:'500', marginTop:5}}>Package Name</Text>
                              <Text style={{fontSize:15 * fontD, marginTop:5, color:'#686868'}}>Quanity</Text>
                          </View>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.mainView}>
                      <View style={styles.detailView}>
                            <Text style = {styles.deteilProduct}>Product Bundle</Text>
                      </View>
                      <View style={{backgroundColor:'#ffffff',flexDirection:'row', marginTop:10,}}>
                          <Image style={{width:60 * fontD, height:60 * fontD, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
                          <View style={{marginLeft:15}}>
                              <Text style={{fontSize:17 * fontD, fontWeight:'500', marginTop:5}}>Product Bundle Name</Text>
                              <Text style={{fontSize:15 * fontD, marginTop:5, color:'#686868'}}>???</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
              </ScrollView>

              {this.state.menushow ?
              <TouchableWithoutFeedback onPress={()=>this.setState({menushow:false})}>
              <View style = {styles.prompt}>
                  <View style= {{width:300 * fontD, height:190 * fontD, backgroundColor:'#ffffff', borderRadius:5, padding:20}}>
                      <TouchableOpacity style={{height:50 * fontD, justifyContent:'center'}} onPress={()=>this.goAddPackagePage()}>
                          <Text style={{fontSize:15 * fontD, fontWeight:'500'}}>Create Package</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{height:50 * fontD, justifyContent:'center'}} onPress={()=>this.goAddBundlePage()}>
                          <Text style={{fontSize:15 * fontD, fontWeight:'500'}}>Create Bundle</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              </TouchableWithoutFeedback>:null}
          </View>
      );
  },
  goAddPackagePage(){
    this.setState({menushow:false})
    this.props.navigator.push({'name': 'addPackage',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
  },
  goAddBundlePage(){
    this.setState({menushow:false})
    this.props.navigator.push({'name': 'addBundle',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
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
  slide:{height:50},
  prompt: {position:'absolute', top:0, left:0, right:0, bottom:0,backgroundColor:'#000000af',alignItems:'center', justifyContent:'center', elevation:2},
  deteilName: {fontSize:13 * fontD, color:'#404040'},
  deteilProduct: {fontWeight:'500', fontSize:15 * fontD, color:'#404040', marginTop:2},
  detailView:{ marginTop:5, paddingBottom:5, borderBottomWidth:0.5,},
  mainView:{backgroundColor:'#ffffff', marginBottom:5, elevation:2,paddingLeft:20,paddingBottom:15, paddingRight:15}
});
