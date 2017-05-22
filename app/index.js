import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  Navigator,
  ScrollView, 
  TabNavigator,
  View,
  Alert,
  AsyncStorage
} from 'react-native';
import styles from './../style/icon';
import Head from './head';
import Icon from 'react-native-vector-icons/FontAwesome';
import routes from './config/routes';
import Profile from './footer/profile';
import Oil from './footer/oil';
import Oilview from './footer/oil_view';
import Maps from './footer/map';
import Info from './footer/info';
import Product from './footer/Product';
import Cardetail from './footer/carDetail';
import CarInfo from './footer/carInfo';
import CarOil from './footer/carOil';
import Suudliin from './types/car1';
import Jeep from './types/car2';
import Bus from './types/car3';
import Motorcycle from './types/car4';
import Hard from './types/car5';
import Achaa from './types/car6';

var RefreshIcon = <Icon name='facebook' size={12} color="black" />;

export default class totalApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'profile'
    };
  }
  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch (route.id){
      case 'Oil':
        return (<Oil navigator={navigator}  title="ТОС" />);
      case 'Profile':
        return (<Profile navigator={navigator}  title="ХАРИУЦЛАГТАЙ ЖОЛООЧ" />);
      case 'Head':
        return (<Head navigator={navigator} title="бөоархбөор" />);
      case 'Oilview':
        return (<Oilview navigator={navigator} title="бkkk" />);
      case 'Suudliin':
        return (<Suudliin navigator={navigator} title="СУУДЛЫН" {...route.passProps}/>);
      case 'Jeep':
        return (<Jeep navigator={navigator} title="ЖИЙП" {...route.passProps}/>);
      case 'Bus':
        return (<Bus navigator={navigator} title="АВТОБУС" {...route.passProps}/>);
      case 'Cardetail':
        return (<Cardetail navigator={navigator} title="бkkk" {...route.passProps}/>);
      case 'CarOil':
        return (<CarOil navigator={navigator} title="ТОС" {...route.passProps}/>);
      case 'CarInfo':
        return (<CarInfo navigator={navigator}  title="ТОС111" {...route.passProps} />);
      case 'Motorcycle':
        return (<Motorcycle navigator={navigator} title="МОТОЦИКЛ" {...route.passProps}/>);
      case 'Hard':
        return (<Hard navigator={navigator} title="ХҮНД МАШИН МЕХАНИЗМ" {...route.passProps}/>);
      case 'Achaa':
        return (<Achaa navigator={navigator} title="АЧААНЫ" {...route.passProps}/>);
    }
  }

  render(){
    return (
    
      <TabBarIOS style={styles.tabBar} selectedTab={this.state.selectedTab}>

          <TabBarIOS.Item
          selected={this.state.selectedTab == 'profile'}
          style={styles.icon}
          icon={require("./images/profile.png")}
          renderAsOriginal
          selectedIcon={require("./images/profile1.png")}
          title=''
          onPress={() => {
              this.setState({
                selectedTab: 'profile'
              });
          }}>
           <View style={{flex:1}}>
              <Navigator
                initialRoute={{
                  title: 'ХАРИУЦЛАГТАЙ ЖОЛООЧ',
                  id: 'Profile',
                }}
                renderScene={
                  this.navigatorRenderScene
                }  
              />
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
          selected={this.state.selectedTab == 'oil'}
          style={styles.icon}
          icon={require("./images/oil.png")}
          renderAsOriginal
          selectedIcon={require("./images/oil1.png")}
          title=''
          onPress={() => {
              this.setState({
                selectedTab: 'oil'
              });
          }}>
            <View style={{flex:1}}>
              <Navigator
                initialRoute={{
                  title: 'Total',
                  id: 'Oil'
                }}
                renderScene={
                  this.navigatorRenderScene
                }  
              />
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
          selected={this.state.selectedTab == 'info'}
          style={styles.icon}
          icon={require("./images/info.png")}
          renderAsOriginal
          selectedIcon={require("./images/info1.png")}
          title=''
          onPress={() => {
              this.setState({
                selectedTab: 'info'
              });
          }}>
           <View>
              <Head/>
              <Info />
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
          selected={this.state.selectedTab == 'maps'}
          style={styles.icon}
          icon={require("./images/map.png")}
          renderAsOriginal
          selectedIcon={require("./images/map1.png")}
          title=''
          onPress={() => {
              this.setState({
                selectedTab: 'maps'
              });
          }}>
            <View style={{flex:1}}>
              <Head/>
              <Maps />
            </View>
          </TabBarIOS.Item>

        </TabBarIOS>
      )
  }

}

