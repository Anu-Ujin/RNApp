
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Linking,
    Icon
} from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button'
import images from './../config/images';

const Oil = ({ car }) => {
  const { title, artist, thumbnail_image, image, url } = car;
  const {imageStyle, ContentStyle} = styles;

    return ( 
      <Card>
        <CardSection>
          <View style={styles.imageContainer}> 
            <Image 
                style={imageStyle}
                source={{ uri: thumbnail_image }} 
             />
          </View>
          <View style={ContentStyle}> 
            <Text style={styles.headerText}>{title}</Text>
            <Button /* onPress={() => Linking.openURL(url)}*/>
             <Image
                style={styles.leftIcon}
                source={images.right}
              />
            </Button>
          </View>
        </CardSection>
      </Card>
      );
};

const styles = {
  ContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 17,
    fontWeight: '300'
  },
  imageStyle: {
    height: 20,
    width: 33
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 300,
    flex: 1,
    width: null
  },
   leftIcon: {
    flex: 1,
    height: 17,
    width: 17,
    alignContent: 'flex-end'
   }
}

export default Oil