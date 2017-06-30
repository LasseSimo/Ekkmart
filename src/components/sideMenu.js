import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  Navigator,
  Platform,
} from 'react-native';
var ImagePicker = require('react-native-image-picker');
var { width, height } = Dimensions.get('window');
var fontD = width/400;
var global = require('./global.js');
var STORAGE_PROFLE_IMG = '@AsyncStorageExample:ProfileIMG';
var SideMenu = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  componentWillReceiveProps() {
  },
  render() {
    return (
      <View style={styles.container}>

          <View style={{height:120, padding:20, backgroundColor:'#ffffff'}}>
              <Image style={{width:60 * fontD, height:60 * fontD, borderRadius:30, borderWidth:1, borderColor: '#0D4471'}} source={require('./image/user.png')}/>
              <Text style={{fontSize:15* fontD, fontWeight:'500', marginTop:10}}>Wasyl Makarenko</Text>
          </View>
          {this.onMain('HOME',this.props.onHome)}
          {this.onMain('PRODUCT', this.props.onProduct)}
          {this.onMain('ORDER TEMPLET')}
          {this.onMain('SUPPLIES')}
          {this.onMain('EMPLEOYEE')}
          {this.onMain('SETTING')}
          <Image style={{width: 300 * fontD, height: 1 * fontD, marginLeft:-15 }} source={require('./image/lineType.png')}/>
      </View>
    );
  },
  onMain(data, props){
    return(
      <View>
        <Image style={{width: 300 * fontD, height: 1 * fontD, marginLeft:-15}} source={require('./image/lineType.png')}/>
        <TouchableOpacity onPress={props}>
            <View style={{flexDirection: 'row',alignItems:'center', height: 49}}>
                <Text style = {{marginLeft:15, fontSize:15* fontD, color : '#ffffff', flex:1}}>{data}</Text>
                <TouchableOpacity style={{marginRight:20}}>
                    <Image style={{width: 8* fontD, height: 15}} source={require('./image/ico-forward.png')}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </View>
    )
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0089ff',
  },
  header: {
    alignSelf: 'center',
    marginTop: 15,
    height: 27,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  back: {
    width: 15,
    height: 22
  }
});
module.exports = SideMenu;
