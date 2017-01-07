import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('window');
const pic1 = require('./assets/pic1.jpg');
const pic2 = require('./assets/pic2.jpg');
const pic3 = require('./assets/pic3.jpg');

export default class appSam extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex3}>
          <View style={[styles.flex3, styles.flexRow]}>
            <View style={styles.flex3}>          
              <View style={[styles.flex1, styles.flexRow]}>    
                <View style={[styles.flex1, styles.grayBorderBottomThin]}>          
                </View>
                <View style={styles.flex3}>          
                </View>
              </View>
              <View style={[styles.flex2, styles.flexRow]}>   
                <View style={styles.flex1}>          
                </View>
                <View style={[ styles.flex3, {justifyContent: "center"}]}>          
                  <Text style={[styles.titleContainer, styles.textBig]}>Adagio bar</Text>
                  <Text style={styles.textTiny}>2489 followers</Text>
                  <TouchableOpacity style={[styles.followButton, styles.grayBorderThin]}><Text style={[styles.textTiny,styles.textGray ]}>Follow</Text></TouchableOpacity>
                </View>       
              </View>
            </View>
            <View style={styles.flex1}>  
              <Image source={pic1} style={styles.flex1}>
                <View style={styles.tinyImage}></View>
              </Image> 
              <Image source={pic2} style={styles.flex1}>
                <View style={styles.tinyImage}></View>              
              </Image> 
              <Image source={pic3} style={styles.flex1}>
                <View style={styles.tinyImage}></View>              
              </Image>          
            </View>          
          </View>
          <View style={[styles.flex1, styles.flexRow]}>
            <View style={[styles.flex3, styles.grayBorderThin, styles.flexRow]}>     
                <View style={styles.flex1}>          
                </View>
                <View style={[ styles.flex3, {justifyContent: "center"}]}>          
                  <Text style={[styles.textTiny, styles.textGray]}>Address</Text>
                  <Text style={[styles.textMedium, styles.textBlack]}>Vodickova 24,</Text>
                  <Text style={[styles.textMedium, styles.textBlack]}>Prague</Text>
                </View> 
            </View>
            <View style={[styles.flex1, styles.grayBackground, styles.centerCenter]}>   
              <Text style={[styles.textBig, styles.textWhite]}>+24</Text>       
              <Text style={[styles.textTiny, styles.textWhite]}>Photos</Text>
            </View>       
          </View>
        </View>
        <View style={styles.flex2}>
          <ScrollView>  
            <MusicContainerSelected />  
            {
              [2,3,4,5,6].map((num,idx) => (
                <MusicContainer key={idx} num={num} />
              ))
            } 
          </ScrollView>
        </View>
        <TouchableOpacity style={[styles.floatButton,styles.grayBackground, styles.centerCenter]}>
          <Icon name="ios-add" size={30} color="#FCFCFC" />
        </TouchableOpacity>
      </View>
    );
  }
}

const MusicContainer = props => (
  <View style={[styles.flexRow, styles.containerMusic, styles.grayBorderThin]}>
    <View style={[styles.flex3, styles.flexRow]}>
      <View style={[styles.flex1, styles.centerCenter]}>
        <Text>{props.num}</Text>
      </View>
      <View style={[styles.flex3, {justifyContent: "center"}]}>
        <Text style={[styles.textMedium, styles.textBlack]}>Speaking of Truth</Text>
        <Text style={[styles.textTiny, styles.textGray]}>Laleh</Text>
      </View>
    </View>
    <View style={[styles.flex1, styles.centerCenter]}>
      <Text style={[styles.textTiny, styles.textGray]}>2:58</Text>
    </View>
  </View>
);

const MusicContainerSelected = props => (
  <View style={[styles.flexRow, styles.containerMusic, styles.containerMusicSelected, styles.grayBorderThin]}>
    <View style={[styles.flex3, styles.flexRow]}>
      <View style={[styles.flex1, styles.centerCenter]}>
        <Text><Icon name="ios-stats" size={15} color="#FCFCFC" /></Text>
      </View>
      <View style={[styles.flex3, {justifyContent: "center"}]}>
        <Text style={[styles.textMedium, styles.textWhite]}>Speaking of Truth</Text>
        <Text style={[styles.textTiny, styles.textWhiteGray]}>Laleh</Text>
      </View>
    </View>
    <View style={[styles.flex1, styles.centerCenter]}>
      <Text style={[styles.textTiny, styles.textWhite]}>0:42</Text>
      <Text style={[styles.textTiny, styles.textWhiteGray]}>2:58</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
  flex4: {
    flex: 4
  },
  flexRow: {
    flexDirection: "row"
  },
  centerCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  containerMusic: {
    height: height/9, 
    width:width,
  },
  containerMusicSelected: {
    backgroundColor: "#554ab2",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  grayBorderThin: {
    borderWidth:0.5,
    borderColor: "#97A1BB"
  },
  grayBorderBottomThin: {
    borderBottomWidth:0.5,
    borderColor: "#97A1BB"
  },
  grayBackground: {
    backgroundColor: "#91a4c4"
  },
  tinyImage: {
    backgroundColor: "rgba(145, 164, 196,0.6)", 
    width: height/4,
    height:height/4
  },
  titleContainer: {
    fontWeight: "bold",
    color: "#222222"
  },
  textTiny: {
    fontSize: 10,
    color: "#777"
  },
  textMedium: {
    fontSize: 13
  },
  textBig: {
    fontSize: 20
  },
  textWhite: {
    color: "#FCFCFC"
  },
  textWhiteGray: {
    color: "#AAA"
  },
  textGray: {
    color: "#777"
  },
  textBlack: {
    color: "#222222"
  },
  followButton: {
    marginVertical: 10, 
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    borderRadius: 30, 
    width: 50
  },
  floatButton: {
    position: "absolute", 
    bottom: 0, 
    right: 0,
    width: width/4,
    height: height/12,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});