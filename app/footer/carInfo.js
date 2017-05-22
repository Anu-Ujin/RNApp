import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput, TouchableHighlight, Image, ListView} from 'react-native';
import Head from '../head';
import styles from '../../style/icon';
import images from './../config/images';
import Hard from '../types/car5';
import Card from './card';
import CardSection from './cardSection';
 
class CarInfo extends Component {
  constructor(props) {
  super(props);
    this.state = {
      dataSource: 
        [ 
{ 'index':1, 'oilId': 3325, 'title': '4C, 1.8 Litre Turbo Engine, 6-Spd TCT Trans. (2015-2017)'},
{ 'index':1, 'oilId': 2800, 'title': '147, 2.0 Litre Twin Spark Eng., Manual (2001-2007)'},
{ 'index':1,'title': '147, 2.0  Litre Twin Spark Eng., Selespeed (2001-2007)'},
{ 'index':1,'title': '147 GTA, 3.2 Litre V6 Eng., Manual (2003-2005)'},
{ 'index':1,'title': '147 GTA, 3.2 Litre V6 Eng., Selespeed (2004-2005)'},
{ 'index':1,'title': '147 JTD, 1.9 Litre Turbo Diesel Eng., Manual (2005-2006)'},
{ 'index':1,'title': '147 Series, 2.0 Litre Twin Spark Eng., Manual (2008-2011)'},
{ 'index':1,'title': '147 Series, 2.0 Litre Twin Spark Eng., Selespeed (2008-2011)'},
{ 'index':1,'title': '147 Series, JTD, 1.9 Litre Turbo Diesel Eng., Manual (2007-2011)'},
{ 'index':1,'title': '156, 2.0 Litre Twin Spark Eng. (1999-2002)'},
{ 'index':1,'title': '156, 2.5 Litre V6 Eng., Manual (1999-2002)'},
{ 'index':1,'title': '156 GTA, 3.2 Litre V6 Eng., Manual (2002-2004)'},
{ 'index':1,'title': '156 GTA, 3.2 Litre V6 Eng., Selespeed (2003-2004)'},
{ 'index':1,'title': '156 Series, 2.0 Litre JTS Eng., Manual (2002-2007)'},
{ 'index':1,'title': '156 Series, 2.0 Litre JTS Eng., Selespeed (2002-2007)'},
{ 'index':1,'title': '156 Series, 2.5 Litre V6 Eng., Automatic (1999-2007)'},
{ 'index':1,'title': '156 Series, 2.5 Litre V6 Eng., Manual (2002-2007)'},
{ 'index':1,'title': '159, 2.2 JTS/ Ti, 2.2 Litre 16V Eng., Selespeed (2006-2012)'},
{ 'index':1,'title': '159, 2.4 JTD/ Ti, 2.4 Litre Turbo Diesel Eng., Manual (2006-2012)'},
{ 'index':1,'title': '159, 2.4 JTD/ Ti, 2.4 Litre  Turbo Diesel Eng., Q-Tronic (2006-2013)'},
{ 'index':1,'title': '159, 3.2 JTS/ Ti, 3.2 Litre V6, 24V Eng., Manual,  AWD (2006-2013)'},
{ 'index':1,'title': '159, 3.2 JTS/ Ti, 3.2 Litre V6, 24V Eng., Q-Tronic, AWD (2006-2013)'},
{ 'index':1,'title': '159 Series, 1.7 litre TBi, 16V Eng., 6-Speed Man. (2010-2012)'},
{ 'index':1,'title': '159 Series, 1.9 litre, JTD, T/Diesel Eng., Manual (2007-2011)'},
{ 'index':1,'title': '159 Series, 1.9 litre, JTD, T/Diesel Eng., Q-Tronic (2007-2011)'},
{ 'index':1,'title': '159 Series, 2.2 litre, JTS 16V Eng., Manual (2006-2011)'},
{ 'index':1,'title': '166, 3.0 Litre V6 Eng., Sportronic (1999-2007)'},
{ 'index':1,'title': '1750 Berlina, 1750 GTV, 1.8 Litre Eng. (1968-1972)'},
{ 'index':1,'title': '2000 Sedan, 2.0 Litre Eng. (1972-1976)'},
{ 'index':1,'title': 'Alfa 33 1.5 Super/ Ti, 1.5 Litre Eng. (1988-1989)'},
{ 'index':1,'title': 'Alfa 33 Boxer 16V QV, 1.7 Litre Eng. (1990-1992)'},
{ 'index':1,'title': 'Alfa 33/ GCL/ Ti/ Boxer, 1.5 Litre Eng. (1984-1987)'},
{ 'index':1,'title': 'Alfa 33 quattro, M/Carlo, 4WD, 1.5 Litre Eng. (1985-1987)'},
{ 'index':1,'title': 'Alfa 33 S 1.7 16V Permanent 4, 1.7 Litre Eng. (1991-1992)'},
{ 'index':1,'title': 'Alfa 33 Ti 1.7/ 1.7IE, 1.7 Litre Eng. (1987-1990)'},
{ 'index':1,'title': 'Alfa 75, 2.0 Twin Spark, Manual (1988-1992)'},
{ 'index':1,'title': 'Alfa 75, 2.5 Litre V6, Manual (1986-1988)'},
{ 'index':1,'title': 'Alfa 75, 2.5 Litre V6, ZF Automatic (1988-1990)'},
{ 'index':1,'title': 'Alfa 75, 3.0 Litre V6 Eng., Manual (1988-1992)'},
{ 'index':1,'title': 'Alfa 90/ Super, 2.5 Litre V6 Eng. (1985-1988)'},
{ 'index':1,'title': 'Alfa 164, 3.0 Litre V6, ZF Automatic (1989-1992)'},
{ 'index':1,'title': 'Alfa 164 Quadrifoglio, 3.0 Litre V6, Manual (1991-1992)'},
{ 'index':1,'title': 'Alfa GT, 2.0 Litre JTS Eng. Selespeed (2005-2009)'},
{ 'index':1,'title': 'Alfa GT, 3.2 Litre V6 Eng. Manual (2004-2009)'},
{ 'index':1,'title': 'Alfasud and Alfasud Ti, 1.2 Litre Eng. (1974-1979)'},
{ 'index':1,'title': 'Alfasud Ti and Sprint, 1.5 Litre Eng. (1979-1985)'},
{ 'index':1,'title': 'Alfetta 1.8, 1.8 Litre Eng. (1976-1978)'},
{ 'index':1,'title': 'Alfetta, Alfetta GT, 1.8 Litre Eng. (1974-1976)'},
{ 'index':1,'title': 'Alfetta GTV/ 2000/ GTV 2.0, 2.0 Litre Eng. (1977-1986)'},
{ 'index':1,'title': 'Brera, 2.2 Litre Eng., 6-Speed Manual (2006-2010)'},
{ 'index':1,'title': 'Brera, 2.2 Litre Eng. 6-Speed Selespeed (2007-2010)'},
{ 'index':1,'title': 'Brera, 3.2 Litre V6 Eng., 4WD (2006-2009)'},
{ 'index':1,'title': 'Giulia 1600 Series, 1.6 Litre Eng. (1963-1972)'},
{ 'index':1,'title': 'Giulietta, 1.4 Litre Turbo Eng., 6-Spd. Manual (2010-2017)'},
{ 'index':1,'title': 'Giulietta, 1.4 Litre Turbo MultiAir Eng., 6-Spd. Man./TCT (2012-2017)'},
{ 'index':1,'title': 'Giulietta, 1.8/ 2.0 Litre Engs. (1980-1986)'},
{ 'index':1,'title': 'Giulietta 2.0 Litre Turbo Diesel Eng., 6-Spd. Man. (2010-2015)'},
{ 'index':1,'title': 'Giulietta 2.0 Litre Turbo Diesel Eng., 6-Spd. TCT (2012-2015)'},
{ 'index':1,'title': 'Giulietta 1750, 1.7 Litre Turbo Eng., 6-Spd. Man. (2010-2014)'},
{ 'index':1,'title': 'Giulietta 1750, 1.7 Litre Turbo Eng., 6-Spd. Man. / TCT (2014-2017)'},
{ 'index':1,'title': 'GTV, 2.0 Litre Twin Spark Eng., Manual (1998-2003)'},
{ 'index':1,'title': 'GTV, 3.0 Litre V6 Eng., 5-Speed Manual (1998-1999)'},
{ 'index':1,'title': 'GTV, 3.0 Litre V6 Eng., 6-Speed Manual (1999-2003)'},
{ 'index':1,'title': 'GTV, 3.2 Litre V6 Eng., 6-Speed Manual (2003-2004)'},
{ 'index':1,'title': 'GTV 6 2.5, 2.5 Litre V6 Eng. (1983-1986)'},
{ 'index':1,'title': 'GTV 6 Grand Prix, 2.5 Litre Eng. (1986-1988)'},
{ 'index':1,'title': 'GTV JTS, 2.0 Litre Eng., Manual (2003-2004)'},
{ 'index':1,'title': 'MiTo, 0.9 Litre Turbo Petrol Eng., 6-Spd. Manual (2014-2016)'},
{ 'index':1,'title': 'MiTo, 1.4 Litre Turbo Petrol Eng., 5/ 6-Spd. Manual (2009-2016)'},
{ 'index':1,'title': 'MiTo, 1.4 Litre Turbo Petrol Eng., 6-Spd. Dual Clutch (2010-2016)'},
{ 'index':1,'title': 'Spider, 2.0 Litre Twin Spark Eng., Manual (1996-1997)'},
{ 'index':1,'title': 'Spider, 2.0 Litre Twin Spark Eng., Manual (1998-2003)'},
{ 'index':1,'title': 'Spider, 3.0 Litre V6 Eng., 6-Speed Manual (2001-2003)'},
{ 'index':1,'title': 'Spider, 3.2 Litre V6 Eng., 6-Speed Manual (2003-2004)'},
{ 'index':1,'title': 'Spider JTS, 2.0 Litre Eng.,  Manual (2003-2004)'},
{ 'index':1,'title': 'Spider JTS, 2.2 Litre Eng., 6-Speed Manual (2006-2012)'},
{ 'index':1,'title': 'Spider JTS, 2.2 Litre Eng., 6-Speed Selespeed (2007-2012)'},
{ 'index':1,'title': 'Spider JTS V6, 3.2 Litre V6 Eng., AWD (2006-2011)'},
{ 'index':1,'title': 'Sprint, 1.5 Litre Eng. (1985-1988)'},
{ 'index':2,'title': 'Sprint, 1.)'}
        ]
    };
  const data = this.state.dataSource;
  const titleList = data.map(title => {
    const rowData = title;
    if(this.props.index == title.index){ 
      console.log(rowData.title)
    }
  })
  this.renderCars = this.renderCars.bind(this);
  }
  
  renderCars(){
    const data = this.state.dataSource;
    let list = [];
    
    for (let i = 0; i < data.length; i++) {
      if(this.props.index == data[i].index){
        list.push(
        <Card key = {i}>
          <TouchableHighlight onPress={this.onClick.bind(this)} underlayColor="#bfbfbf" style={styles.highLight}>
            <View>
              <CardSection>
                <Text style={styles.listText} key={ i }>{data[i].title}</Text>
                <Image source={images.right} style={styles.imageRightDetail} />
              </CardSection>
            </View>
          </TouchableHighlight>
        </Card>
        );
      }
    }
    return list;
  }

  render(){
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return (
    <ScrollView style={styles.MainView}>
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
        <View> 
          {this.renderCars()}
        </View>
    </ScrollView>
   );
  }

  onButtonPress(){
    this.props.navigator.pop();
  }

  onClick(data){
      this.props.navigator.push({
        id: 'CarOil',
        passProps:{title: data.title, oilId: data.oilId},
      })
    }

};

export default CarInfo;