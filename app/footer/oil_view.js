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
import Head from '../head';
import carType from '../config/manufacturer';
import styles from '../../style/icon';
import images from './../config/images';

class Oilview extends Component {

	render(){
    return ( 
      <ScrollView>
      	<View style={styles.viewStyle}>
	      <TouchableHighlight underlayColor="#f8f8f8" onPress={this.onButtonPress.bind(this)}>
			<Image
				style={styles.homeIcon}
				source={images.left}
			/>
			</TouchableHighlight>
			<Text style={styles.titleText}>МЭДЭЭЛЭЛ</Text>
			<Image
				style={styles.menuIcon}
				source={images.menu}
			/>
	    </View>
      	<Image
          style={styles.logoMain}
          source={images.back}
        />
        <View style={styles.container}>
	        <Image
		          style={styles.newsImage}
		          source={images.newsImage}
		        />
	        <Text style={styles.infoDetail}>
	        	TOTAL компани нь анх 1924 онд Францын Засгийн газрын тогтоолоор, олон улсын зах зээлд нефть химийн чиглэлээр үндэсний байр суурийг бэхжүүлэх зорилгоор байгууллагдсан байна.  
				1954 онд TOTAL нэрээр бүртгэгдсэн ба энэ нь өндөр зэрэглэлийн тослох материалын худалдааны марк юм.
				{'\n'} 
				Орчин үеийн TOTAL компани нь 2000 онд олон улсын хоёр том компани болох PETROFINE болон ELF компаниудийг нэгтгэснээр дэлхийн энергийн үйлдвэрлэл болон тос тосолгооны бүтээгдэхүүн үйлдвэрлэгчдийн тэргүүлэгч болж чаджээ. 
	        	{'\n'}
	        	ТОТАЛ компани нь дэлхийд хэмжээгээрээ дөрөвт ордог том компани юм. Дэлхийн 130 гаран оронд үйл ажиллагаагаа явуулдаг, нийт 110 000 ажилтантай, эрдэм шинжилгээний судалгаа болон олборлолт, үйлдвэрлэлт, тээвэрлэлт болон бэлэн бүтээгдэхүүний борлуулалтын чиглэлээр үйл ажиллагаа явуулдаг байна.  
	        </Text>
        </View>
		</ScrollView>
      );
  }

  onButtonPress(){
    this.props.navigator.pop();
  }

}

export default Oilview;