import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    ListView,
    Dimensions,
    Image,
    TextInput,
    AlertIOS,
    ScrollView
} from 'react-native';
import carType from '../config/manufacturer';
import styles from '../../style/icon';
import images from './../config/images';

class carDetail extends Component {
    constructor() {
    super();

    this.state = {
      dataSource: 
        [
    {  
       'index':1,
       'title':'ALFA ROMEO'
    },
    {  
       'index':1,
       'title':'ASTON MARTIN'
    },
    {  
       'index':1,
       'title':'AUDI'
    },
    {  
       'index':1,
       'title':'AUDI'
    },
    {  
       'index':2,
       'title':'AUDIdd'
    },
    {  
       'index':2,
       'title':'AUDIdd'
    },
    {  
       'index':2,
       'title':'AUDIdd'
    },
    {  
       'index':2,
       'title':'AUDIdd'
    },
]
    };
  }

    render(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ( 
      <ScrollView>
        <View style={styles.viewStyle}>
          <TouchableHighlight underlayColor="#f8f8f8" onPress={this.onButtonPress.bind(this)} configureScene={ this.configureScene }>
            <Image
              style={styles.homeIcon}
              source={images.left}
            />
          </TouchableHighlight>
            <Text style={styles.titleText}>ЖИЙП</Text>
            <Image
              style={styles.menuIcon}
              source={images.menu}
            />
        </View>
        <Image
          style={styles.logoMain}
          source={images.back}
        />
        <TextInput 
          style={styles.textInput}
          //onChangeText={(text) => this.setState({text})}
          placeholder='Хайлт'
        />
        <Image
          style={styles.searchIcon}
          source={images.search}
        />
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={ds.cloneWithRows(this.state.dataSource)}
            renderRow={(rowData) =>
            <TouchableHighlight onPress={() => this.pressCell(rowData)} underlayColor="#cecece" style={styles.highLight}>
              <View style={styles.containerList}>
                <Text style={styles.text}>{rowData.title}</Text>
                <Image source={images.right} style={styles.imageRight} />
              </View>
            </TouchableHighlight>
          }
          />
        </ScrollView>
      );
  }

  pressCell(rowData){
    if (rowData.index === carId) {
      this.props.navigator.push({
        id: 'Achaa',
        title: 'Суудлын'
       })
      } 
  }
  
  onButtonPress(){
    this.props.navigator.push({
      id: 'Oil'
    });
  }

}

export default carDetail;