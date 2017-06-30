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

});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#C8C8C8',},
  topView:{height:50, backgroundColor: '#ffffff', flexDirection: 'row'},
  tapView:{flex:1,height:50, backgroundColor:'#ffffff',marginBottom:1, alignItems:'center', justifyContent:'center'},
  tapText:{fontSize: 16, fontFamily:'Calibri', textAlign:'center', fontWeight: "700", color:'#333'},
  mainView:{height: 71 * fontD, backgroundColor:'#ffffff', marginBottom:1,}

});
