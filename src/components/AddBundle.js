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

import {
  MKTextField,
  MKColor,
  mdl,
} from 'react-native-material-kit';
var { width, height } = Dimensions.get('window');
var fontD = width/400;
var global = require('./global');
var SideMenu = require('./sideMenu');
import Triangle from 'react-native-triangle';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const SKU = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('SKU')
    .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
    .withTextInputStyle({flex: 1, color:'#686868',fontWeight: '200', fontSize:17 * fontD})
    .build();
const BARCODD = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('BARCODD')
    .withFloatingLabelFont({
      fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',
    })
    .withTextInputStyle({flex: 1, color:'#686868',fontWeight: '200', fontSize:17 * fontD})
    .build();

const PACKAGE = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('PACKAGE TYPE')
    .withFloatingLabelFont({
      fontSize: 15 * fontD,fontFamily: 'Roboto-Regular',fontWeight: '200', color:'#000000',
    })
    .withTextInputStyle({flex: 1, color:'#686868', fontSize:17 * fontD})
    .build();

const QUANITITI = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('QUANITITI TYPE')
    .withStyle({fontSize: 10 * fontD, fontFamily: 'Roboto-Regular', color:'#686868'})
    .withFloatingLabelFont({
      fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',
    })
    .withTextInputStyle({flex: 1, color:'#686868', fontWeight: '200',fontSize:17 * fontD})
    .build();
const PAID = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('PAID')
    .withFloatingLabelFont({
      fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',
    })
    .withTextInputStyle({flex: 1, color:'#686868',fontWeight: '200', fontSize:17 * fontD})
    .build();
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
                          <Text style={{fontSize:17 * fontD, fontWeight:'700', color: '#ffffff'}}>Add Package</Text>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.titleImage}>
                      <Image
                        style={{width:20 * fontD,height:20 * fontD}}
                        source={require('./image/check.png')}
                      />
                  </TouchableOpacity>
              </View>
              <ScrollView>
                  <View style={styles.mainView}>
                      <SKU
                        tintColor = {this.state.title  == ''? "#da5454" : "#686868"}
                        highlightColor = '#009688'
                        ref={sku => { this._sku = sku; }}
                        style={styles.mainInputView}
                        onChangeText={(sku) => this.setState({sku})}
                        keyboardType = {'default'}
                        maxLength = {50}
                        returnKeyType = {'next'}
                        value={this.state.sku}
                      />
                    <BARCODD
                        tintColor = {this.state.title  == ''? "#da5454" : "#686868"}
                        highlightColor = '#009688'
                        ref={barcode => { this.barcode = barcode; }}
                        style={styles.mainInputView}
                        onChangeText={(barcode) => this.setState({barcode})}
                        keyboardType = {'default'}
                        maxLength = {50}
                        returnKeyType = {'next'}
                        value={this.state.barcode}
                      />
                    <PACKAGE
                        tintColor = {this.state.title  == ''? "#da5454" : "#686868"}
                        highlightColor = '#009688'
                        ref={packagety => { this._packagety = packagety; }}
                        style={styles.mainInputView}
                        onChangeText={(packagety) => this.setState({packagety})}
                        keyboardType = {'default'}
                        maxLength = {50}
                        returnKeyType = {'next'}
                        value={this.state.package}
                      />
                    <QUANITITI
                        tintColor = {this.state.title  == ''? "#da5454" : "#686868"}
                        highlightColor = '#009688'
                        ref={quantiti => { this._quantiti = quantiti; }}
                        style={styles.mainInputView}
                        onChangeText={(quantiti) => this.setState({quantiti})}
                        keyboardType = {'default'}
                        maxLength = {50}
                        returnKeyType = {'next'}
                        value={this.state.quantiti}
                      />
                    <PAID
                        tintColor = {this.state.title  == ''? "#da5454" : "#686868"}
                        highlightColor = '#009688'
                        ref={paid => { this._paid = paid; }}
                        style={styles.mainInputView}
                        onChangeText={(paid) => this.setState({paid})}
                        keyboardType = {'default'}
                        maxLength = {50}
                        returnKeyType = {'next'}
                        value={this.state.paid}
                      />
                  </View>
                  <View style={styles.mainView}>
                    <View style={{padding:15, alignItems:'center', justifyContent:'center', padding:5, height:60, borderBottomWidth:1}}>
                        <TouchableOpacity style={{backgroundColor:'#0086F8', alignItems:'center',
                            justifyContent:'center', height:35, width:300 * fontD, borderRadius: 5, elevation:2}}>
                            <Text style={{fontSize:17 * fontD, color: '#ffffff'}}>
                                Add Prodcut To Bundle
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingLeft:15}}>
                        <View style={{padding:20, backgroundColor:'#ffffff',flexDirection:'row', borderBottomWidth:1}}
                          onPress={()=>this.goCustomDetailPage()}>
                            <Image style={{width:60 * fontD, height:60 * fontD, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
                            <View style={{marginLeft:15}}>
                                <Text style={{fontSize:15 * fontD, fontWeight:'500', marginTop:5}}>Product Name</Text>
                                <Text style={{fontSize:13 * fontD, marginTop:5, color:'#686868'}}>Product Paid</Text>
                            </View>
                        </View>
                        <View style={{padding:20, backgroundColor:'#ffffff',flexDirection:'row', borderBottomWidth:1}}
                          onPress={()=>this.goCustomDetailPage()}>
                            <Image style={{width:60 * fontD, height:60 * fontD, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
                            <View style={{marginLeft:15}}>
                                <Text style={{fontSize:15 * fontD, fontWeight:'500', marginTop:5}}>Product Name</Text>
                                <Text style={{fontSize:13 * fontD, marginTop:5, color:'#686868'}}>Product Paid</Text>
                            </View>
                        </View>
                  </View>
                  </View>
              </ScrollView>
          </View>
      );
  },
});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row',elevation:2, marginBottom:5},
  titleImage:{width:50 * fontD, height:50 * fontD, alignItems:'center', justifyContent:'center'},
  oderStatuse:{width:20 * fontD, height:20 * fontD, borderRadius: 10, borderWidth:1, borderColor: '#686868'},
  oderStatuse1:{marginTop:9.5,width:100 * fontD, height:1, borderWidth:1, borderColor: '#686868'},
  custom:{flex:1, alignItems:'center', justifyContent:'center'},
  wrapper: {elevation:2, marginBottom:5},
  slide:{height:50},
  prompt: {position:'absolute', top:0, left:0, right:0, bottom:0,backgroundColor:'#686868af',alignItems:'center', justifyContent:'center', elevation:2},
  deteilName: {fontSize:13 * fontD, color:'#404040'},
  deteilProduct: {fontWeight:'500', fontSize:15 * fontD, color:'#404040', marginTop:2},
  detailView:{ marginTop:5, paddingBottom:5, borderBottomWidth:0.5,},
  mainView:{backgroundColor:'#ffffff', marginBottom:5, elevation:2,paddingLeft:20,paddingBottom:15, paddingRight:15},
  mainInputView:{},

});
