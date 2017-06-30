import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
} from 'react-native';

var Login = require('./components/Login');
var DropDownList = require('./components/DropDownList.js')
var Home = require('./components/Home.js')
var CustomDetail = require('./components/CustomDetail.js')
var OrderDetail = require('./components/orderDetail.js')
var Product = require('./components/Product.js')
var ProductDetail = require('./components/ProductDetail.js')
var AddPackage = require('./components/AddPackage.js')
var AddBundle = require('./components/AddBundle.js')
var Chat = require('./components/Chat.js')
var Search = require('./components/Search.js')
var Notification = require('./components/Notification.js')
var ROUTES = {
  login: Login,
  customDetail:CustomDetail,
  home: Home,
  orderDetail:OrderDetail,
  product:Product,
  productDetail: ProductDetail,
  addPackage :AddPackage,
  addBundle : AddBundle,
  chat: Chat,
  search: Search,
  notification: Notification,
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'login'}}
        renderScene={this.renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromLeft
        })}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
