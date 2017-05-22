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

class Bus extends Component {
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
	   'index':2,
	   'title':'ASTON MARTIN'
	},
	{  
	   'index':3,
	   'title':'AUDI'
	},
	{  
	   'index':4,
	   'title':'AUSTIN (Also see MORRIS)'
	},
	{  
	   'index':5,
	   'title':'BENTLEY'
	},
	{  
	   'index':6,
	   'title':'BMW'
	},
	{  
	   'index':7,
	   'title':'BUICK'
	},
	{  
	   'index':8,
	   'title':'CADILLAC'
	},
	{  
	   'index':9,
	   'title':'CHERY'
	},
	{  
	   'index':10,
	   'title':'CHEVROLET (Includes U.S. Models)'
	},
	{  
	   'index':11,
	   'title':'CHRYSLER'
	},
	{  
	   'index':12,
	   'title':'CITROEN'
	},
	{  
	   'index':13,
	   'title':'DAEWOO'
	},
	{  
	   'index':14,
	   'title':'DAIHATSU'
	},
	{  
	   'index':15,
	   'title':'DAIMLER'
	},
	{  
	   'index':16,
	   'title':'DATSUN (See NISSAN)'
	},
	{  
	   'index':17,
	   'title':'DODGE'
	},
	{  
	   'index':18,
	   'title':'EUNOS'
	},
	{  
	   'index':19,
	   'title':'FERRARI'
	},
	{  
	   'index':20,
	   'title':'FIAT'
	},
	{  
	   'index':21,
	   'title':'FORD'
	},
	{  
	   'index':22,
	   'title':'FORD PERFORMANCE VEHICLES'
	},
	{  
	   'index':23,
	   'title':'FORD TICKFORD EXPERIENCE (FTE)'
	},
	{  
	   'index':24,
	   'title':'FSM'
	},
	{  
	   'index':25,
	   'title':'HILLMAN (CHRYSLER/ TALBOT)'
	},
	{  
	   'index':26,
	   'title':'HOLDEN'
	},
	{  
	   'index':27,
	   'title':'HOLDEN SPECIAL VEHICLES (HSV)'
	},
	{  
	   'index':28,
	   'title':'HONDA'
	},
	{  
	   'index':29,
	   'title':'HUMBER'
	},
	{  
	   'index':30,
	   'title':'HYUNDAI'
	},
	{  
	   'index':31,
	   'title':'INFINITI'
	},
	{  
	   'index':32,
	   'title':'ISUZU'
	},
	{  
	   'index':33,
	   'title':'JAGUAR'
	},
	{  
	   'index':34,
	   'title':'JENSEN'
	},
	{  
	   'index':35,
	   'title':'KIA'
	},
	{  
	   'index':36,
	   'title':'LADA'
	},
	{  
	   'index':37,
	   'title':'LAMBORGHINI'
	},
	{  
	   'index':38,
	   'title':'LANCIA'
	},
	{  
	   'index':39,
	   'title':'LEXUS'
	},
	{  
	   'index':40,
	   'title':'LEYLAND'
	},
	{  
	   'index':41,
	   'title':'LOTUS'
	},
	{  
	   'index':42,
	   'title':'M.G.'
	},
	{  
	   'index':43,
	   'title':'MASERATI'
	},
	{  
	   'index':44,
	   'title':'MAYBACH'
	},
	{  
	   'index':45,
	   'title':'MAZDA'
	},
	{  
	   'index':46,
	   'title':'MCLAREN'
	},
	{  
	   'index':47,
	   'title':'MERCEDES-BENZ'
	},
	{  
	   'index':48,
	   'title':'MINI'
	},
	{  
	   'index':49,
	   'title':'MITSUBISHI'
	},
	{  
	   'index':50,
	   'title':'MORRIS (Also see AUSTIN)'
	},
	{  
	   'index':51,
	   'title':'NISSAN (Includes DATSUN)'
	},
	{  
	   'index':52,
	   'title':'NSU'
	},
	{  
	   'index':53,
	   'title':'OLDSMOBILE'
	},
	{  
	   'index':54,
	   'title':'OPEL. (2012-on)'
	},
	{  
	   'index':55,
	   'title':'PEUGEOT'
	},
	{  
	   'index':56,
	   'title':'PLYMOUTH'
	},
	{  
	   'index':57,
	   'title':'PONTIAC'
	},
	{  
	   'index':58,
	   'title':'PORSCHE'
	},
	{  
	   'index':59,
	   'title':'PRINCE'
	},
	{  
	   'index':60,
	   'title':'PROTON'
	},
	{  
	   'index':61,
	   'title':'RAMBLER'
	},
	{  
	   'index':62,
	   'title':'RENAULT'
	},
	{  
	   'index':63,
	   'title':'RILEY'
	},
	{  
	   'index':64,
	   'title':'ROLLS-ROYCE'
	},
	{  
	   'index':65,
	   'title':'ROVER'
	},
	{  
	   'index':66,
	   'title':'SAAB'
	},
	{  
	   'index':67,
	   'title':'SEAT'
	},
	{  
	   'index':68,
	   'title':'SIMCA'
	},
	{  
	   'index':69,
	   'title':'SKODA'
	},
	{  
	   'index':70,
	   'title':'SMART'
	},
	{  
	   'index':71,
	   'title':'SSANGYONG'
	},
	{  
	   'index':72,
	   'title':'STANDARD'
	},
	{  
	   'index':73,
	   'title':'STUDEBAKER'
	},
	{  
	   'index':74,
	   'title':'SUBARU'
	},
	{  
	   'index':75,
	   'title':'SUNBEAM'
	},
	{  
	   'index':76,
	   'title':'SUZUKI'
	},
	{  
	   'index':77,
	   'title':'TOYOTA'
	},
	{  
	   'index':78,
	   'title':'TRD'
	},
	{  
	   'index':79,
	   'title':'TRIUMPH'
	},
	{  
	   'index':80,
	   'title':'VALIANT (Also see CHRYSLER)'
	},
	{  
	   'index':81,
	   'title':'VANDEN-PLAS'
	},
	{  
	   'index':82,
	   'title':'VAUXHALL'
	},
	{  
	   'index':83,
	   'title':'VOLKSWAGEN'
	},
	{  
	   'index':84,
	   'title':'VOLVO'
	},
	{  
	   'index':85,
	   'title':'WOLSELEY'
	},
	{  
	   'index':86,
	   'title':'ZETA'
	}
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
            <Text style={styles.titleText}>АВТОБУС</Text>
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

export default Bus;