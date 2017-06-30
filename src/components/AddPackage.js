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
const TITLE = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('TITLE')
  .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
  .withTextInputStyle({color:'#686868',fontWeight: '200', fontSize:17 * fontD})
  .build();
const test = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('PRODUCT')
  .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
  .withTextInputStyle({color:'#686868',fontWeight: '200', fontSize:17 * fontD})
  .build();
const PRODUCT = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('PRODUCT')
    .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
    .withTextInputStyle({color:'#686868',fontWeight: '200', fontSize:17 * fontD})
    .build();
const SKU = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('SKU')
    .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
    .withTextInputStyle({color:'#686868',fontWeight: '200', fontSize:17 * fontD})
    .build();
const BARCODD = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('BARCODD')
    .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
    .withTextInputStyle({color:'#686868',fontWeight: '200', fontSize:17 * fontD})
    .build();

const PACKAGE = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('PACKAGE TYPE')
    .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
    .withTextInputStyle({color:'#686868',fontWeight: '200', fontSize:17 * fontD})
    .build();

const QUANITITI = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('QUANITITI TYPE')
    .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
    .withTextInputStyle({color:'#686868',fontWeight: '200', fontSize:17 * fontD})
    .build();
const PAID = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('PAID')
    .withFloatingLabelFont({fontSize: 15 * fontD,fontFamily: 'Roboto-Regular', color:'#000000',})
    .withTextInputStyle({color:'#686868',fontWeight: '200', fontSize:17 * fontD})
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

              <View style={styles.mainView}>
                  <TITLE
                    tintColor = {this.state.title  == ''? "#da5454" : "#ababab"}
                    highlightColor = '#009688'
                    ref={title => { this._title = title; }}

                    onChangeText={(title) => this.setState({title})}
                    keyboardType = {'default'}
                    maxLength = {50}
                    returnKeyType = {'next'}
                    value={this.state.title}
                  />
                <PRODUCT
                    tintColor = {this.state.title  == ''? "#da5454" : "#ababab"}
                    highlightColor = '#009688'
                    ref={product => { this._product = product; }}

                    onChangeText={(product) => this.setState({product})}
                    keyboardType = {'default'}
                    maxLength = {50}
                    returnKeyType = {'next'}
                    value={this.state.product}
                  />
              </View>
              <View style={styles.mainView}>
                  <SKU
                    tintColor = {this.state.title  == ''? "#da5454" : "#ababab"}
                    highlightColor = '#009688'
                    ref={sku => { this._sku = sku; }}

                    onChangeText={(sku) => this.setState({sku})}
                    keyboardType = {'default'}
                    maxLength = {50}
                    returnKeyType = {'next'}
                    value={this.state.sku}
                  />
                <BARCODD
                    tintColor = {this.state.title  == ''? "#da5454" : "#ababab"}
                    highlightColor = '#009688'
                    ref={barcode => { this.barcode = barcode; }}

                    onChangeText={(barcode) => this.setState({barcode})}
                    keyboardType = {'default'}
                    maxLength = {50}
                    returnKeyType = {'next'}
                    value={this.state.barcode}
                  />
                <PACKAGE
                    tintColor = {this.state.title  == ''? "#da5454" : "#ababab"}
                    highlightColor = '#009688'
                    ref={packagety => { this._packagety = packagety; }}

                    onChangeText={(packagety) => this.setState({packagety})}
                    keyboardType = {'default'}
                    maxLength = {50}
                    returnKeyType = {'next'}
                    value={this.state.package}
                  />
                <QUANITITI
                    tintColor = {this.state.title  == ''? "#da5454" : "#ababab"}
                    highlightColor = '#009688'
                    ref={quantiti => { this._quantiti = quantiti; }}

                    onChangeText={(quantiti) => this.setState({quantiti})}
                    keyboardType = {'default'}
                    maxLength = {50}
                    returnKeyType = {'next'}
                    value={this.state.quantiti}
                  />
                <PAID
                    tintColor = {this.state.title  == ''? "#da5454" : "#ababab"}
                    highlightColor = '#009688'
                    ref={paid => { this._paid = paid; }}

                    onChangeText={(paid) => this.setState({paid})}
                    keyboardType = {'default'}
                    maxLength = {50}
                    returnKeyType = {'next'}
                    value={this.state.paid}
                  />
              </View>
              {this.state.menushow ?
              <TouchableWithoutFeedback onPress={()=>this.setState({menushow:false})}>
              <View style = {styles.prompt}>
                  <View style= {{width:300 * fontD, height:190, backgroundColor:'#ffffff', borderRadius:5, padding:20}}>
                      <TouchableOpacity style={{height:50, justifyContent:'center'}}>
                          <Text style={{fontSize:15 * fontD, fontWeight:'500'}}>Create Package</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{height:50, justifyContent:'center'}}>
                          <Text style={{fontSize:15 * fontD, fontWeight:'500'}}>Create Bundle</Text>
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
  topView:{height:50, backgroundColor: '#0086F8', flexDirection: 'row',elevation:2, marginBottom:5},
  titleImage:{width:50 * fontD, height:50 * fontD, alignItems:'center', justifyContent:'center'},
  oderStatuse:{width:20, height:20, borderRadius: 10, borderWidth:1, borderColor: '#686868'},
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
