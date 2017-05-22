import React, { Component } from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet,ScrollView, Image, Dimensions, TextInput} from 'react-native';
import images from './../config/images';
import Oil from './oil'
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Product extends Component {

	state = { cars: [] };

	componentWillMount() {
		axios.get('http://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ cars: response.data }));
	}

	renderCars() {
		return this.state.cars.map(car => 
      <Oil key={car.title} car={car} />
		);
	}

	filterSearch(text){
	/*	const newData = data.filter(function(item){
			const itemData = item.food;
			const textData = text
		}) */
	}

	render() {
		return (
			<ScrollView>
				<Image
          style={styles.logo}
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
				{this.renderCars()}
			</ScrollView>
		);
	}
};

var styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: windowWidth,
    marginTop: -25
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
   	flex: 1,
   	height: 17,
   	width: 17,
   	marginLeft: 52,
   	marginTop: -45,
   	marginBottom: 20,
   }
});

export default Product;