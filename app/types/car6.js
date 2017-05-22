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
import carType from '../config/type';
import styles from '../../style/icon';
import images from './../config/images';

class Achaa extends Component {
	constructor() {
	super();

    this.state = {
      dataSource: 
[
{ 'index':87,'title':'ASIA'},
{ 'index':88,'title':'AUDI'},
{ 'index':89,'title':'BEDFORD'},
{ 'index':90,'title':'BMW'},
{ 'index':91,'title':'CHEVROLET'},
{ 'index':92,'title':'CHRYSLER JEEP'},
{ 'index':93,'title':'CITROEN'},
{ 'index':94,'title':'DAEWOO'},
{ 'index':95,'title':'DAF'},
{ 'index':96,'title':'DAIHATSU'},
{ 'index':97,'title':'DODGE'},
{ 'index':98,'title':'FIAT'},
{ 'index':99,'title':'FORD'},
{ 'index':100,'title':'FORD PERFORMANCE VEHICLES'},
{ 'index':101,'title':'FOTON'},
{ 'index':102,'title':'FUSO'},
{ 'index':103,'title':'GREAT WALL'},
{ 'index':104,'title':'HAVAL'},
{ 'index':105,'title':'HOLDEN'},
{ 'index':106,'title':'HONDA'},
{ 'index':107,'title':'HUMMER'},
{ 'index':108,'title':'HYUNDAI'},
{ 'index':109,'title':'INFINITI'},
{ 'index':110,'title':'INTERNATIONAL'},
{ 'index':111,'title':'ISUZU (Includes ISUZU UTE)'},
{ 'index':112,'title':'IVECO'},
{ 'index':113,'title':'JAC'},
{ 'index':114,'title':'JEEP'},
{ 'index':115,'title':'KIA'},
{ 'index':116,'title':'LADA'},
{ 'index':117,'title':'LAND ROVER'},
{ 'index':118,'title':'LDV'},
{ 'index':119,'title':'LEXUS'},
{ 'index':120,'title':'LEYLAND-BMC'},
{ 'index':121,'title':'MAHINDRA'},
{ 'index':122,'title':'MAZDA'},
{ 'index':123,'title':'MERCEDES-BENZ'},
{ 'index':124,'title':'MITSUBISHI (Also see FUSO)'},
{ 'index':125,'title':'NISSAN (Includes DATSUN)'},
{ 'index':126,'title':'PEUGEOT'},
{ 'index':127,'title':'PORSCHE'},
{ 'index':128,'title':'PROTON'},
{ 'index':129,'title':'RAM'},
{ 'index':130,'title':'RANGE ROVER'},
{ 'index':131,'title':'RENAULT'},
{ 'index':132,'title':'SSANGYONG'},
{ 'index':133,'title':'SUBARU'},
{ 'index':134,'title':'SUZUKI'},
{ 'index':135,'title':'TATA'},
{ 'index':136,'title':'TOYOTA'},
{ 'index':137,'title':'TRD'},
{ 'index':138,'title':'VOLKSWAGEN'}
    ]
    };
  }

	render(){
			const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ( 
      <ScrollView>
        <View style={styles.viewStyle}>
        <TouchableHighlight underlayColor="#f8f8f8" onPress={this.onButtonPress.bind(this)}>
        <Image
          style={styles.homeIcon}
          source={images.left}
        />
        </TouchableHighlight>
        <Text style={styles.titleText}>АЧААНЫ</Text>
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
  	this.props.navigator.push({
      id: 'CarInfo',
      passProps:{title: rowData.title, index: rowData.index}
    })
  }

  onButtonPress(){
    this.props.navigator.pop();
  }

  renderRow(dataRow){
  	console.log(dataRow);
		return (
			<TouchableHighlight>
				<View>
					<Text>
						{dataRow.title}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

export default Achaa;