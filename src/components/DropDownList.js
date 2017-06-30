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
} from 'react-native';
var global = require('./global');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
data = ['a', 'b','a','a','a','a','a','a','a','a','a','a',];
var countries = require('country-data').callingCountries
countriesAll = require('country-data').countries
module.exports = React.createClass({
  getInitialState: function() {
      return {
          text:'',
          dataSource:countries.all,
          showContryView: false
      }
  },
  componentDidMount(){
  },
  render: function() {
      return (
          <View style={styles.container}>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 15}}
                underlineColorAndroid="#ffffff"
                onChangeText={(text) => this.onChangeText(text)}
                value={this.state.text}
              />
              {!this.state.showContryView ?
                null:
                <ListView
                  style={{height:450}}
                   dataSource={ds.cloneWithRows(this.state.dataSource)}
                   renderRow={(rowData) => this.onCountryView(rowData)}
               />
             }
          </View>
      );
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
          this.setState({dataSource: countries.all,})
      }else{
        this.setState({dataSource: dataTemp})
      }
  },
  onCountryView(rowData){
    return(
      <TouchableOpacity
        style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:39, borderBottomWidth:0.25}}
        onPress={()=>this.setState({text: rowData.name, showContryView: false})}>
          <View style={{flex:1, flexDirection: 'row'}}>
              <Text style={{marginLeft:rowData.emoji == ''? 33 : 15, fontSize:12}}>{rowData.emoji}</Text>
              <Text style={{marginLeft:15, fontSize:12}}>{rowData.name}</Text>
          </View>
          <Text style={{marginRight:15}}>{rowData.countryCallingCodes[0]}</Text>
      </TouchableOpacity>
    )
  }
});

var styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff05',},
  topView:{height:50, backgroundColor: '#ffffff', flexDirection: 'row'},
  tapView:{flex:1,height:50, backgroundColor:'#ffffff', borderWidth:1,alignItems:'center', justifyContent:'center'},
  tapText:{fontSize: 16, textAlign:'center', fontWeight: "700", color:'#333'},
  mainView:{height: 71, borderWidth:1, }
});
