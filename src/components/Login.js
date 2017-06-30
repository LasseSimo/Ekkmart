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
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
var global = require('./global');
import Triangle from 'react-native-triangle';
import Flag from 'react-native-flags';
var { width, height } = Dimensions.get('window');
var fontD = width/400;
var ImagePicker = require('react-native-image-picker');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var countries = require('country-data').callingCountries
countriesAll = require('country-data').countries
var temp = '';
module.exports = React.createClass({
  getInitialState: function() {
      return {
          data : global.data,
          text : 'Singapore',
          dataSource : countries.all,
          showContryView : false,
          countryEmoji : '🇸🇬',
          countryNumber: '+65',
          passward : '',
          setLogin: true,
          userImage : null,
          passwardtext:'',
          passFlag: true
      }
  },
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;
        source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        }
        this.setState({userImage: source.uri, changeImage: true});
      }
    });
  },
  render: function() {
      return (
          <View style={styles.container}>
              <View style={styles.topView}>
                    <TouchableOpacity style={[styles.tapView, {backgroundColor:this.state.setLogin ? '#ffffff':'#D2D8D8'}]}
                      onPress={()=>this.setState({setLogin:true,showContryView: false})}>
                        <Text style={styles.tapText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tapView,{backgroundColor:this.state.setLogin ? '#D2D8D8':'#ffffff'}]}
                      onPress={()=>this.setState({setLogin:false, showContryView:false})}>
                        <Text style={[styles.tapText,{color:'#809191'}]}>Sign Up</Text>
                    </TouchableOpacity>
              </View>
              {this.state.setLogin ?
                this.onLoginPage():
                this.onSignup()
              }
              {this.state.forgotpass ?
                <TouchableWithoutFeedback onPress={()=>this.setState({forgotpass:false})}>
                <View style={{position:'absolute',backgroundColor:'#000000af', left:0, top:0, bottom:0, right:0, alignItems:'center', justifyContent:'center'}}>
                    <View style= {{width:300 * fontD, height:200, backgroundColor:'#ffffff', borderRadius:5}}>
                        <View style={{height:50, backgroundColor:'#0086F8', alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:17 * fontD, fontWeight:'700', color:'#ffffff'}}>Forgot Password</Text>
                        </View>
                        <View style={{padding:10,borderBottomWidth:1,}}>
                            <Text style ={{fontFamily: 'Calibri', fontSize:12 * fontD, fontWeight:'700',color:'#626262'}}>MOBILE PHONE*</Text>
                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style ={{fontFamily: 'Calibri', fontSize:20 * fontD, fontWeight:'700'}}>{this.state.countryEmoji}</Text>
                                <Text style ={{fontFamily: 'Calibri', fontSize:14 * fontD, fontWeight:'700', marginLeft: 10}}>{this.state.countryNumber}</Text>
                                <TextInput
                                  style={{height: 40, borderColor: 'gray',marginTop: 2, width: 300 * fontD}}
                                  underlineColorAndroid = "#ffffff"
                                  onChangeText={(phonenum) => this.setState({phonenum})}
                                  value={this.state.phonenum}
                                  keyboardType = 'numeric'
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:'row', padding:10, alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity style={{width:170 * fontD, height:40, borderRadius:2, backgroundColor:'#4CAF50', alignItems:'center', justifyContent:'center'}}
                              onPress={()=>this.setState({forgotpass:false})}>
                              <Text style={{fontSize:16 * fontD, color:'#ffffff'}}>Get SMS Token</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:10,width:90 * fontD, height:40,borderRadius:2, backgroundColor:'#4CAF50', alignItems:'center', justifyContent:'center'}}
                              onPress={()=>this.setState({forgotpass:false})}>
                              <Text style={{fontSize:16 * fontD, color:'#ffffff'}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </TouchableWithoutFeedback>
                :null
              }
          </View>
      );
  },
  goHomePage(){
    this.props.navigator.push({'name': 'home',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromRight,
        gestures: {}
      }});
  },
  onLoginPage(){
    return(
      <View>
          {this.onCountryPhonenum()}
          {this.onPassward()}
          <View style = {[styles.mainView, {flexDirection:'row'}]}>
              <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                  <TouchableOpacity onPress={()=>this.setState({forgotpass:true})}>
                      <Text style = {{fontSize:15 * fontD, color: '#3a8fc8',textDecorationLine: 'underline'}}>Forgot Password?</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                  <TouchableOpacity style={{width:150 * fontD, borderRadius:5, height:48 * fontD, backgroundColor:'#4CAF50',elevation:2, alignItems: 'center', justifyContent:'center'}}
                    onPress={()=>this.goHomePage()}>
                      <Text style= {{fontSize:19 * fontD, color: '#ffffff'}}>Log In</Text>
                  </TouchableOpacity>
              </View>
          </View>
          {this.onFaceBook()}
          <View style = {{position : 'absolute', left:10 * fontD, top: 27 * fontD, width: 380 * fontD}}>
              <View style = {{flexDirection: 'row',  alignItems: 'center',borderWidth:0.25,}}>
                  <TextInput
                    style={{height: 35, paddingLeft: 15,  width: 350 * fontD}}
                    underlineColorAndroid = "#ffffff"
                    onChangeText={(text) => this.onChangeText(text)}
                    value={this.state.text}
                    defaultValue = 'Singapore'
                  />
                  <TouchableOpacity
                      style= {{width: 32 * fontD, height:32, alignItems: 'center', justifyContent:'center'}}
                      onPress={()=>this.setState({showContryView:!this.state.showContryView})}>
                      <Triangle
                        width={10 * fontD}
                        height={5}
                        color={'#424242'}
                        direction={'down'}
                      />
                  </TouchableOpacity>
              </View>

              {!this.state.showContryView ?
                  null:
                  <View style={{elevation : 5, backgroundColor: '#ffffff'}}>
                      <ListView
                         style={{height:450}}
                         dataSource={ds.cloneWithRows(this.state.dataSource)}
                         renderRow={(rowData) => this.onCountryView(rowData)}
                     />
                 </View>
               }
          </View>
      </View>
    )
  },
  onSignup(){
    return(
      <View>
          <View style={[styles.mainView, {padding:10}]}>
              <Text style ={{fontFamily: 'Calibri', fontSize:12 * fontD, fontWeight:'700',color:'#626262'}}>FULL NAME</Text>
              <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={{height: 40* fontD, borderColor: 'gray', width:200 * fontD, flex:1}}
                    underlineColorAndroid = "#ffffff"
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                    placeholder = "Enter Full Name"
                    keyboardType = 'default'
                  />
                <TouchableOpacity style={{width:45, height:45, alignItems:'center', borderColor:'#929292', justifyContent:'center',
                  borderWidth:1, borderRadius: 3}} onPress={()=>this.selectPhotoTapped()}>
                  {this.state.userImage == null ?
                    <Image style={{width:20 * fontD, height:20 * fontD, borderWidth:1}}
                    source={require('./image/camera.png')}/>:
                    <Image style={{width:44 * fontD, height:44 * fontD, borderWidth:1}}
                    source={{uri:this.state.userImage}} />
                  }
                </TouchableOpacity>
              </View>
          </View>
          {this.onCountryPhonenum()}
          {this.onPassward()}
          <View style={[styles.mainView, {padding:10}]}>
              <Text style ={{fontFamily: 'Calibri', fontSize:12 * fontD, fontWeight:'700',color:'#626262'}}>EMAIL</Text>
              <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={{height: 40, borderColor: 'gray', width:300 * fontD}}
                    underlineColorAndroid = "#ffffff"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder = "Enter Email"
                    keyboardType = 'default'
                  />
              </View>
          </View>
          <View style = {[styles.mainView,{height:80 * fontD}]}>
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                  <TouchableOpacity style={{width:200 * fontD, height:48, borderRadius:5, backgroundColor:'#4CAF50',elevation:2, alignItems: 'center', justifyContent:'center'}}>
                      <Text style= {{fontSize:16 * fontD, color: '#ffffff'}}>Create User and Proceed</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={[styles.mainView,{justifyContent:'center'}]}>
              <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:16, color: 'red'}}>Terms & Privacy</Text>
              </TouchableOpacity>
          </View>
          {this.onFaceBook()}
          <View style = {{position : 'absolute', left:10, top: 100, width: 380 * fontD}}>
              <View style = {{flexDirection: 'row',  alignItems: 'center',borderWidth:0.25,}}>
                  <TextInput
                    style={{height: 35, paddingLeft: 15,  width: 350 * fontD}}
                    underlineColorAndroid = "#ffffff"
                    onChangeText={(text) => this.onChangeText(text)}
                    value={this.state.text}
                    defaultValue = {'Singapore'}
                  />
                  <TouchableOpacity
                      style= {{width: 32 * fontD, height:32, alignItems: 'center', justifyContent:'center'}}
                      onPress={()=>this.setState({showContryView:!this.state.showContryView})}>
                      <Triangle
                        width={10 * fontD}
                        height={5}
                        color={'#424242'}
                        direction={'down'}
                      />
                  </TouchableOpacity>
              </View>

              {!this.state.showContryView ?
                  null:
                  <View style={{elevation : 5, backgroundColor: '#ffffff'}}>
                      <ListView
                         style={{height:450}}
                         dataSource={ds.cloneWithRows(this.state.dataSource)}
                         renderRow={(rowData) => this.onCountryView(rowData)}
                     />
                 </View>
               }
          </View>
      </View>
    )
  },
  onCountryPhonenum(){
    return(
      <View>
          <View style={styles.mainView}>
              <View style={{margin:10}}>
                  <Text style ={{fontFamily: 'Calibri', fontSize:12 * fontD, fontWeight:'700', color:'#626262'}}>COUNTRY</Text>
              </View>
          </View>
          <View style={[styles.mainView, {padding:10}]}>
              <Text style ={{fontFamily: 'Calibri', fontSize:12 * fontD, fontWeight:'700',color:'#626262'}}>MOBILE PHONE*</Text>
              <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                {
                  // this.state.countryEmoji  != '' ?
                  // <Image style ={{width:20 * fontD, height:20 * fontD}}
                  //   source={require('./image/flags/AD.png')}/>:null
                }
                  <Text style ={{fontFamily: 'Calibri', fontSize:14 * fontD, fontWeight:'700', marginLeft: 10}}>{this.state.countryEmoji}</Text>
                  <Text style ={{fontFamily: 'Calibri', fontSize:14 * fontD, fontWeight:'700', marginLeft: 10}}>{this.state.countryNumber}</Text>
                  <TextInput
                    style={{height: 40, borderColor: 'gray', marginTop: 2, width: 300 * fontD}}
                    underlineColorAndroid = "#ffffff"
                    onChangeText={(phonenum) => this.setState({phonenum})}
                    value={this.state.phonenum}
                    placeholder = 'Input phone number'
                    placeholderTextColor = '#B8B8B8'
                    keyboardType = 'numeric'
                  />
              </View>
          </View>
      </View>
    )
  },
  onPasswardText(passward){
      this.setState({passward:passward})
  },
  onPassward(){
    return(
      <View style={[styles.mainView, {padding:10}]}>
          <Text style ={{fontFamily: 'Calibri', fontSize:12 * fontD, fontWeight:'700',color:'#626262'}}>PASSWORD</Text>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                secureTextEntry = {this.state.passFlag}
                style={{height: 40, borderColor: 'gray', width:300 * fontD, flex:1}}
                underlineColorAndroid = "#ffffff"
                onChangeText={(passward) => this.onPasswardText(passward)}
                value={this.state.passward}
                placeholder = "Min 8 letters"
                keyboardType = 'default'
              />
            <TouchableOpacity style={{width:40 *fontD, height:40 * fontD, alignItems:'center',justifyContent:'center'}}
                onPress={()=>this.setState({passFlag: !this.state.passFlag})}>
                <Image style={{width:20*fontD, height:20*fontD,}} source={require('./image/eye.png')}/>
            </TouchableOpacity>
          </View>
      </View>
    )
  },
  onFaceBook(){
    return(
      <View style = {[styles.mainView, {flexDirection:'row'}]}>
            <TouchableOpacity style={{flex:1, borderWidth:0.25, backgroundColor: '#3B5998'}}>
                  <View style={{flexDirection: 'row'}}>
                        <Image
                          style={{width:70 * fontD,height:72 * fontD, backgroundColor:'#283d68'}}
                          source={require('./image/facebook.png')}
                        />
                        <View style={{alignItems:'center', justifyContent:'center', marginLeft: 25}}>
                            <Text style={styles.tapText}>FaceBook</Text>
                        </View>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, borderWidth:0.25, backgroundColor: '#B52F1F'}}>
                  <View style={{flexDirection: 'row'}}>
                        <Image
                          style={{width:70 * fontD, height:72 * fontD, backgroundColor:'#283d68'}}
                          source={require('./image/google.png')}
                        />
                        <View style={{alignItems:'center', justifyContent:'center', marginLeft: 25}}>
                            <Text style={styles.tapText}>Google</Text>
                        </View>
                  </View>
            </TouchableOpacity>
      </View>
    )
  },
  onChangeText(text){
      this.setState({text:text, showContryView:true})
      var dataTemp = [];
      var index = 0;
      for (var i = 0; i < countries.all.length; i++) {
          if(countries.all[i].name.toString().toUpperCase().indexOf(text.toUpperCase()) > -1) {
              dataTemp.push(countries.all[i])
          }
      }
      if (text == '') {
          this.setState({dataSource: countries.all,showContryView:false})
      }else{
        this.setState({dataSource: dataTemp})
      }
  },
  onCountryView(rowData){
    return(
      <TouchableOpacity
        style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:39, borderBottomWidth:0.25,}}
        onPress={()=>this.setState({text: rowData.name, showContryView: false, countryEmoji: rowData.emoji, countryNumber: rowData.countryCallingCodes[0]})}>
          <View style={{flex:1, flexDirection: 'row'}}>
              <Text style={{marginLeft:rowData.emoji == ''? 33 : 15, fontSize:12 * fontD}}>{rowData.emoji}</Text>
              <Text style={{marginLeft:15, fontSize:12 * fontD}}>{rowData.name}</Text>
          </View>
          <Text style={{marginRight:15 * fontD}}>{rowData.countryCallingCodes[0]}</Text>
      </TouchableOpacity>
    )
  }
});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#ffffff', flexDirection: 'row'},
  tapView:{flex:1,height:50, backgroundColor:'#ffffff',marginBottom:1, alignItems:'center', justifyContent:'center'},
  tapText:{fontSize: 16, fontFamily:'Calibri', textAlign:'center', fontWeight: "700", color:'#333'},
  mainView:{height: 71 * fontD, backgroundColor:'#ffffff', marginBottom:1,}

});
