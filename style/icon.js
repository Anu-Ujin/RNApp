import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', //row ingewel ni width wise bolno gesen vg yum bn :D
    justifyContent: 'center', // move stuff height wise
    alignItems: 'center',
    backgroundColor: '#fff' 
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    padding: 7,
    marginBottom: 5,
    borderRadius: 25,
    borderColor: '#ccc',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainView: {
    backgroundColor: '#fff'
  },
  tabBar: {
    paddingBottom: 0,
    marginBottom: 0
  },
  moreInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  oilTab: {
    flex:1,
    height: 35,
    resizeMode: 'contain',
  },
  tabImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    padding: 7,
    marginBottom: 5,
    borderRadius: 25,
    borderColor: '#ccc',
  },
  listText: {
    maxWidth: 288
  },
  imageRight: {
    width: 18,
    height: 18,
  },
  imageRightDetail: {
    width: 18,
    height: 18,
    marginTop: 5
  },
  imageOil: {
    height: 35,
    resizeMode: 'contain'
  },
  infoDetail: {
    margin: 13,
    flexDirection: 'column',
    marginBottom: 57
  },
  newsImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 110,
    resizeMode: 'contain'
  },
  oilImage: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    height: 110,
    marginBottom: 10,
    marginTop: 10
  },
  oilText: {
    fontWeight: '800'
  },
  viewStyle: {
  	backgroundColor: '#f8f8f8',
    flexDirection: 'row', 
  	alignItems: 'center',
    justifyContent: 'space-between',
  	height: 80,
  	shadowColor: '#000',
  	shadowOffset: { width:0, height: 1 },
  	shadowOpacity: 0.2,
  	elevation: 2,
  	position: 'relative'
  },
  logo: {
  	flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 100,
    marginTop: 20
  },
  homeIcon: {
    alignItems:'flex-start',
    resizeMode: 'contain',
    height: 24,
    marginTop: 20
  },
  homeText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21,
    fontSize: 15
  },
  homeFirst: {
    width: 70
  },
  menuIcon: {
    alignItems:'flex-end',
    resizeMode: 'contain',
    height: 13,
    marginTop: 20
  },
  cancelIcon: {
    alignItems: 'flex-end',
    resizeMode: 'contain',
    height: 20,
    marginTop: 20
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    marginTop: 18
  },
  logoMain: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: windowWidth,
    marginTop: -5
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
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
    backgroundColor: '#fff'
   },
   list: {
    marginBottom: 50,
    backgroundColor: '#fff'
   },
   Loglist:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
   },
   logIn:{
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 15,
    paddingTop: 13,
    paddingBottom: 15,
    paddingRight: 124,
    paddingLeft: 124
   },
   logText:{
    fontSize: 17,
    color: '#555'
   },
   facebook:{
    backgroundColor: '#2d4485',
    paddingLeft: 140,
    paddingRight: 140,
    borderRadius: 30,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 15
   },
   twitter:{
    backgroundColor: '#5dd7fc',
    paddingLeft: 146,
    paddingRight: 146,
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 15
   },
   gmail:{
    backgroundColor: '#e04a39',
    paddingLeft: 146,
    paddingRight: 146,
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 15
   },
   socialFacebook:{
    height: 40,
    width: 40
   },
   socialTwitter:{
    height: 28,
    width: 28
   },
   socialGmail:{
    height: 27,
    width: 27
   },
   searchIcon: {
    flex: 0,
    height: 17,
    width: 17,
    marginLeft: 52,
    marginTop: -45,
    marginBottom: 20,
   },
   Detail: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 16,
    marginRight: 2,
    marginLeft: 2
   },
   highLight: {
      borderRadius: 25,
      marginRight: 4,
      marginLeft: 4,
   },
  myCar: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: windowWidth,
    height:158,
  },
  camera: {
    position: 'absolute',
    transform: [{'translate': [0,0, 1]}],
    width: 40,
    resizeMode: 'contain',
    left: 15,
    top: -10
  }
});
