import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    Image,
    TabBarIOS
} from 'react-native';
import Head from '../head';
import carType from '../config/manufacturer';
import styles from '../../style/icon';
import images from './../config/images';

class Suudliin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      dataSource: [ 
          { 
            'index':3325,
            'title': 'TOTAL QUARTZ 5000 FUTURE GF5',
            'image': '../images/news.png',
            'oilText1': 'ДАВУУ ТАЛ:- Дээд зэргиЙН моторын тос- Түлш хэмнэнэ- Mоторын цэвэр байдлыг дээшлүүлнэ',
            'oilText2': 'ДАВУУ ТАЛ:- Дээд зэргиЙН моторын тос- Түлш хэмнэнэ- Mоторын цэвэр байдлыг дээшлүүлнэ',
            'oilText3':  'ДАВУУ ТАЛ:- Дээд зэргиЙН моторын тос- Түлш хэмнэнэ- Mоторын цэвэр байдлыг дээшлүүлнэ'
           }
        ]
    };
  data = this.state.dataSource;
  this.renderOil = this.renderOil.bind(this);
  console.log(this.props.oilId)
  }

   _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  renderOil(){
  const data = this.state.dataSource;
  let list = [];
  for (let i = 0; i < data.length; i++) {
    if(this.props.oilId == data[i].index){
      list.push(
        <View style={styles.infoContainer}>
          <Text style={styles.oilText}> {data[i].title} </Text>
          <Image source={images.newsImage} style={styles.oilImage}/>
          <Text>{data[i].oilText1}</Text>
        </View> 
      );
    }
  }
  return list;
  }

  render(){
    return ( 
      <View style={styles.MainView}>
        <View style={styles.viewStyle}>
        <TouchableHighlight underlayColor="#f8f8f8" onPress={this.onButtonPress.bind(this)}>
          <Image
            style={styles.homeIcon}
            source={images.left}
          />
        </TouchableHighlight>
        <Text style={styles.titleText}>{this.props.title}</Text>
        <Image
          style={styles.menuIcon}
          source={images.menu}
        />
        </View>
        <View style={styles.moreInfo}> 
          <TouchableHighlight style={styles.Detail}>
            <Image source={images.oil3} style={styles.imageOil} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.Detail}>
            <Image source={images.oil1} style={styles.imageOil} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.Detail}>
            <Image source={images.oil2} style={styles.imageOil} />
          </TouchableHighlight>
        </View>
         {this.renderOil()}  
      </View>
    );
  }

  onButtonPress(){
    this.props.navigator.pop();
  }
}

export default Suudliin;