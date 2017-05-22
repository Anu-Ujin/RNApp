import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    Image,
    TouchableHighlight,
    Dimensions,
    TextInput
} from 'react-native';

import images from './../config/images';
import Head from '../head';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Oil extends Component {
   constructor(props) {

    super(props);
    this.pressCell = this.pressCell.bind(this);
    
    this.state = {
      text: '',
      dataSource: 
        [
          {
            'id': 0,
            'title': 'Суудлын',
            'image':'car1',
          },
          { 'id': 1,
            'title': 'Жийп',
            'image': 'car2',
          },
          { 'id': 2,
            'title': 'Автобус',
            'image':'car3',
          },
          { 'id': 3,
            'title': 'Мотоцикл',
            'image':'car4',
          },
          { 'id': 4,
            'title': 'Хүнд машин механизмын',
            'image':'car5',
          },
          { 'id': 5,
            'title': 'Ачааны',
            'image':'car6',
          }
          
        ]
    };
  }

  renderImage(imageName) {

    switch (imageName){
      case 'car1': 
        return require('../images/car1.png');
        break;
      case 'car2': 
        return require('../images/car2.png');
        break;
      case 'car3': 
        return require('../images/car3.png');
        break;
      case 'car4': 
        return require('../images/car4.png');
        break;
      case 'car5': 
        return require('../images/car5.png');
        break;
      default: 
        return require('../images/car6.png');
    }
  }

  render() {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View style={styles.MainView}>
        <Head />
        <TouchableHighlight onPress={this.moreInfo.bind(this)} underlayColor="#cecece">
          <Image
            style={styles.logo}
            source={images.back}
          />
        </TouchableHighlight>
        <TextInput 
          style={styles.textInput}
         onChangeText={(text) => this.saveData(text)}
          placeholder='Хайлт'
          value=""
        />
        <Image
          style={styles.searchIcon}
          source={images.search}
        />
        <ListView
          style={styles.list}
          dataSource={ds.cloneWithRows(this.state.dataSource)}
          enableEmtySections={true}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={() => this.pressCell(rowData)} underlayColor="#cecece" style={styles.highLight}>
              <View style={styles.container}>
              { rowData.image ? 
                <Image style={styles.icon} source={this.renderImage(rowData.image)} /> :
                 null
              }
                <Text style={styles.text}>{rowData.title}</Text>
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    );
  }

  moreInfo(){
    this.props.navigator.push({
      id: 'Oilview'
    });
  }

  pressCell(rowData){
    if (rowData.id === 0) {
      this.props.navigator.push({
        id: 'Suudliin',
        carId: rowData.id,
        title: rowData.title
       })
      } 
    else if (rowData.id === 1) {
      this.props.navigator.push({
        id: 'Jeep',
        carId: rowData.id,
        title: rowData.title
       })
      }
    else if (rowData.id === 2) {
      this.props.navigator.push({
        id: 'Bus',
       })
      }
    else if (rowData.id === 3) {
      this.props.navigator.push({
        id: 'Motorcycle',
       })
      }
    else if (rowData.id === 4) {
      this.props.navigator.push({
        id: 'Hard',
       })
      } else {
        this.props.navigator.push({
        id: 'Achaa',
       })
      }
     
    }
  };

  const styles = {
      container: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 1,
      padding: 7,
      marginBottom: 5,
      borderRadius: 25,
      borderColor: '#ccc',
      },
      highLight: {
        borderRadius: 25,
        marginRight: 4,
        marginLeft: 4,
      },
      imageRight: {
      width: 18,
      height: 18,
      },
     icon: {
      height: 20,
      width: 33,
      marginLeft: 8,
      marginRight: 20,
      resizeMode: 'contain',
     },
     text: {
      fontSize: 16,
      fontWeight: '300',
     },
     list: {
      minHeight: 300
     },
     logo: {
      resizeMode: 'contain',
      alignItems: 'center',
      width: windowWidth,
      marginTop: -5
      },
      textInput: {
      height: 35,
      borderWidth: 1,
      borderRadius: 18,
      borderColor: '#cecece',
      marginBottom: 20,
      marginLeft: 36,
      marginRight: 36,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
     },
     searchIcon: {
      flex: 0,
      height: 17,
      width: 17,
      marginLeft: 52,
      marginTop: -45,
      marginBottom: 20,
     },
     MainView: {
      backgroundColor: '#fff'
     }
  }

export default Oil