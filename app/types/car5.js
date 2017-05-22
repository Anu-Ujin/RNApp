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

class Hard extends Component {
	constructor() {
	super();

    this.state = {
      dataSource: 
        [
{ 'index':352,'title':'ACREMASTER [Tractors]'},
{ 'index':353,'title':'AGCO [Agco Allis Tractors]'},
{ 'index':354,'title':'AGCO [Combines]'},
{ 'index':355,'title':'AGCOSTAR [Tractors]'},
{ 'index':356,'title':'AGTOR (Also see ZETOR) [Tractors]'},
{ 'index':357,'title':'ALLIS-CHALMERS (Also see AGCO) [Combines]'},
{ 'index':358,'title':'ALLIS-CHALMERS (Also see AGCO) [Tractors]'},
{ 'index':359,'title':'ANTONIO CARRARO [Tractors]'},
{ 'index':360,'title':'ARIENS [Hoes/ Tillers]'},
{ 'index':361,'title':'AUSTOFT (Includes TOFT) [Cane Harvesters]'},
{ 'index':362,'title':'BADBOY BUGGIES [Utility Vehicles]'},
{ 'index':363,'title':'BELARUS [Harvesters]'},
{ 'index':364,'title':'BELARUS [Tractors]'},
{ 'index':365,'title':'BIG BUD [Tractors]'},
{ 'index':366,'title':'BOLENS [Tillers]'},
{ 'index':367,'title':'BOLENS [Tractors]'},
{ 'index':368,'title':'BRANSON [Tractors]'},
{ 'index':369,'title':'BUHLER (Also FORD, NEW HOLLAND, VERSATILE) [Tractors - Versatile Models]'},
{ 'index':370,'title':'CAMECO [Cane Harvesters]'},
{ 'index':371,'title':'CASE IH [Balers]'},
{ 'index':372,'title':'CASE IH [Cane Harvesters]'},
{ 'index':373,'title':'CASE IH [Crawler Tractors]'},
{ 'index':374,'title':'CASE IH [Harvesters]'},
{ 'index':375,'title':'CASE IH [Tractors - 2WD/ 4WD Models]'},
{ 'index':376,'title':'CASE IH [Tractors - Four Wheel Drive]'},
{ 'index':377,'title':'CATERPILLAR (Includes LEXION) [Combine Harvesters]'},
{ 'index':378,'title':'CATERPILLAR (Includes LEXION) [Tractors]'},
{ 'index':379,'title':'CHALLENGER (Also see CATERPILLAR) [Tractors]'},
{ 'index':380,'title':'CHAMBERLAIN [Tractors]'},
{ 'index':381,'title':'CLAAS (Also see CATERPILLAR) [Combines]'},
{ 'index':382,'title':'CLAAS (Also see CATERPILLAR) [Tractors]'},
{ 'index':383,'title':'COUNTY [Tractors]'},
{ 'index':384,'title':'CUB CADET [Tractors]'},
{ 'index':385,'title':'DAEDONG [Tractors]'},
{ 'index':386,'title':'DAEDONG [Utility Vehicles]'},
{ 'index':387,'title':'DAEDONG FARMLINER [Tractors]'},
{ 'index':388,'title':'DAVID BROWN [Tractors]'},
{ 'index':389,'title':'DEUTZ-ALLIS [Combines]'},
{ 'index':390,'title':'DEUTZ-ALLIS [Tractors]'},
{ 'index':391,'title':'DEUTZ-FAHR [Combines]'},
{ 'index':392,'title':'DEUTZ-FAHR [Crawler Tractors]'},
{ 'index':393,'title':'DEUTZ-FAHR [Tractors]'},
{ 'index':394,'title':'DONG FENG (See EAST WIND)'},
{ 'index':395,'title':'EAST WIND [Tractors]'},
{ 'index':396,'title':'EBRO [Tractors]'},
{ 'index':397,'title':'ECHO [Cultivator]'},
{ 'index':398,'title':'E-Z-GO [Utility Vehicles]'},
{ 'index':399,'title':'FARMTRAC'},
{ 'index':400,'title':'FENDT [Tractors - Farmer Series]'},
{ 'index':401,'title':'FENDT [Tractors - Favorit Series]'},
{ 'index':402,'title':'FENDT [Tractors - Tool Carriers]'},
{ 'index':403,'title':'FENDT [Tractors - Vario Series]'},
{ 'index':404,'title':'FERRARI [Rotary Hoes and Tractors]'},
{ 'index':405,'title':'FIAT (Also see NEW HOLLAND) [Tractors Crawler: 55, 65, 85]'},
{ 'index':406,'title':'FIAT (Also see NEW HOLLAND) [Tractors: 56, 66, 75, 76, 86, 90, 93, 94]'},
{ 'index':407,'title':'FIAT (Also see NEW HOLLAND) [Tractors]'},
{ 'index':408,'title':'FIATAGRI (See LAVERDA)'},
{ 'index':409,'title':'FORD (Also see NEW HOLLAND, VERSATILE) [Tractors]'},
{ 'index':410,'title':'FORDSON [Tractors]'},
{ 'index':411,'title':'FORT [Rotary Hoes]'},
{ 'index':412,'title':'GOLDONI [Tractors/ Hoes]'},
{ 'index':413,'title':'GRADEN [Scarifier]'},
{ 'index':414,'title':'GRAVELY [Utility Vehicles]'},
{ 'index':415,'title':'HARDI [Sprayers]'},
{ 'index':416,'title':'HESSTON [Windrowers and Harvesters]'},
{ 'index':417,'title':'HINOMOTO [Tractors]'},
{ 'index':418,'title':'HISUN [Utility Vehicles]'},
{ 'index':419,'title':'HORWOOD BAGSHAW (Also see SHEARER) [Combine Harvesters and Headers]'},
{ 'index':420,'title':'HOWARD [Hoes/ Rotavators]'},
{ 'index':421,'title':'HURLIMANN [Tractors]'},
{ 'index':422,'title':'IH-ACREMASTER (See ACREMASTER)'},
{ 'index':423,'title':'INTERNATIONAL [Cotton Pickers, Windrowers, Balers]'},
{ 'index':424,'title':'INTERNATIONAL [Headers]'},
{ 'index':425,'title':'INTERNATIONAL [Tractors]'},
{ 'index':426,'title':'ISEKI [Tractors]'},
{ 'index':427,'title':'JACOBSEN [Utility Vehicles]'},
{ 'index':428,'title':'JCB [Tractors]'},
{ 'index':429,'title':'JOHN DEERE [All Terrain Vehicles]'},
{ 'index':430,'title':'JOHN DEERE [Cane Harvesters]'},
{ 'index':431,'title':'JOHN DEERE [Combine Harvesters]'},
{ 'index':432,'title':'JOHN DEERE [Sprayers]'},
{ 'index':433,'title':'JOHN DEERE [Tractors - 2WD/ 4WD Models]'},
{ 'index':434,'title':'JOHN DEERE [Tractors - Four Wheel Drive]'},
{ 'index':435,'title':'JOHN DEERE [Tractors - Track Type]'},
{ 'index':436,'title':'JOHN DEERE [Windrowers and Cotton Pickers]'},
{ 'index':437,'title':'KAWASAKI [Utility Vehicles]'},
{ 'index':438,'title':'KIOTI (DAEDONG) [Tractors]'},
{ 'index':439,'title':'KUBOTA [Beaver Tractor-Mounted or Trailed Mowers]'},
{ 'index':440,'title':'KUBOTA [Tillers]'},
{ 'index':441,'title':'KUBOTA [Tractors]'},
{ 'index':442,'title':'KUBOTA [Utility Vehicles]'},
{ 'index':443,'title':'LAMBORGHINI [Crawler Tractors]'},
{ 'index':444,'title':'LAMBORGHINI [Tractors]'},
{ 'index':445,'title':'LANDINI [Tractors]'},
{ 'index':446,'title':'LAVERDA (Includes FIATAGRI) [Combines]'},
{ 'index':447,'title':'LEXION (See CATERPILLAR, CLAAS)'},
{ 'index':448,'title':'LEYLAND [Tractors]'},
{ 'index':449,'title':'MACDON [Augers]'},
{ 'index':450,'title':'MACDON [Windrowers and Harvesters]'},
{ 'index':451,'title':'MAHINDRA [Tractors]'},
{ 'index':452,'title':'MASPORT [Hoes/ Tillers]'},
{ 'index':453,'title':'MASSEY-FERGUSON (Also see AGCO) [Cane Harvesters]'},
{ 'index':454,'title':'MASSEY-FERGUSON (Also see AGCO) [Combines and Balers]'},
{ 'index':455,'title':'MASSEY-FERGUSON (Also see AGCO) [Tractors - 2WD/ 4WD Models]'},
{ 'index':456,'title':'MASSEY-FERGUSON (Also see AGCO) [Tractors - Four Wheel Drive]'},
{ 'index':457,'title':'MASSEY-FERGUSON (Also see AGCO) [Tractors - Two Wheel Drive]'},
{ 'index':458,'title':'MC CORMICK [Tractors]'},
{ 'index':459,'title':'MERCEDES-BENZ [Tractors]'},
{ 'index':460,'title':'MERCEDES-BENZ [Unimog Models]'},
{ 'index':461,'title':'MERLIN [Tractors]'},
{ 'index':462,'title':'MITSUBISHI [Tractors/ Tillers]'},
{ 'index':463,'title':'MULLER [Tractors]'},
{ 'index':464,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Balers]'},
{ 'index':465,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Combine Harvesters]'},
{ 'index':466,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Combines]'},
{ 'index':467,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Crawler Tractors]'},
{ 'index':468,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Harvesters]'},
{ 'index':469,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Speedrowers, Haycruisers®, Hay/Discbines®]'},
{ 'index':470,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Stackcruisers®/ liners, Foragers, Hayliners®]'},
{ 'index':471,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Tractors]'},
{ 'index':472,'title':'NEW HOLLAND (Also see FIAT, FORD, VERSATILE) [Utility Vehicles]'},
{ 'index':473,'title':'OLIVER (Also see WHITE) [Tractors]'},
{ 'index':474,'title':'PASQUALI [Hoes and Tractors]'},
{ 'index':475,'title':'PLOWMAN [Tractors]'},
{ 'index':476,'title':'RENAULT (Also see CLAAS) [Tractors]'},
{ 'index':477,'title':'RHINO [Tractors]'},
{ 'index':478,'title':'SAME (Includes WHITE/ SAME) [Tractors - Track Type]'},
{ 'index':479,'title':'SAME (Includes WHITE/ SAME) [Tractors]'},
{ 'index':480,'title':'SATOH [Tractors]'},
{ 'index':481,'title':'SHEARER (HORWOOD BAGSHAW) [Headers]'},
{ 'index':482,'title':'SHIBAURA [Tractors]'},
{ 'index':483,'title':'STEIGER [Tractors - 1000 Series]'},
{ 'index':484,'title':'STEIGER [Tractors - Early Models]'},
{ 'index':485,'title':'STEIGER [Tractors - Series III Models]'},
{ 'index':486,'title':'STEIGER [Tractors - Series IV Models]'},
{ 'index':487,'title':'STEIGER [Tractors - STX Series]'},
{ 'index':488,'title':'STEYR [Tractors - Four Wheel Drive]'},
{ 'index':489,'title':'STEYR [Tractors]'},
{ 'index':490,'title':'TOFT (See AUSTOFT)'},
{ 'index':491,'title':'TOMCAR AUSTRALIA [All Terrain Vehicles]'},
{ 'index':492,'title':'TORPEDO [Tractors]'},
{ 'index':493,'title':'TROY-BILT [Tillers]'},
{ 'index':494,'title':'TYM [Tractors]'},
{ 'index':495,'title':'UNIVERSAL FARMLINER [Tractors]'},
{ 'index':496,'title':'URSUS [Tractors]'},
{ 'index':497,'title':'VALPADANA [Hand Tractors]'},
{ 'index':498,'title':'VALPADANA [Tractors]'},
{ 'index':499,'title':'VALTRA (Also see VALTRA VALMET) [Tractors]'},
{ 'index':500,'title':'VALTRA VALMET (Formerley VALMET) [Tractors]'},
{ 'index':501,'title':'VERSATILE (Also BUHLER, FORD, NEW HOLLAND) [Tractors - Buhler Models]'},
{ 'index':502,'title':'VERSATILE (Also BUHLER, FORD, NEW HOLLAND) [Tractors - Early Models]'},
{ 'index':503,'title':'VERSATILE (Also BUHLER, FORD, NEW HOLLAND) [Tractors - Other Models Incl. Series III]'},
{ 'index':504,'title':'VERSATILE (Also BUHLER, FORD, NEW HOLLAND) [Tractors - Series II Models]'},
{ 'index':505,'title':'VERSATILE (Also BUHLER, FORD, NEW HOLLAND) [Tractors - Sprayers]'},
{ 'index':506,'title':'VERSATILE (Also BUHLER, FORD, NEW HOLLAND) [Tractors - Versatile Models]'},
{ 'index':507,'title':'VICON [Balers]'},
{ 'index':508,'title':'WHITE (Also see OLIVER) [Combines including Arbos]'},
{ 'index':509,'title':'WHITE (Also see OLIVER) [Tractors]'},
{ 'index':510,'title':'WHITE/ SAME (See SAME)'},
{ 'index':511,'title':'YANMAR [Tractors]'},
{ 'index':512,'title':'ZETOR (Also see AGTOR) [Tractors]'},
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
        <Text style={styles.titleText}>ХҮНД МАШИН МЕХАНИЗМ</Text>
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

export default Hard;