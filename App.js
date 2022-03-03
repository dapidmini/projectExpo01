import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View, Button, TextInput, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const width_proportion = '80%';
const height_proportion = '40%';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.box}>
        {/* <Image style={styles.logoImage} source={require('./assets/logo03t.png')} /> */}
        {/* <Image style={styles.text} source={require('./assets/logo03t.png')} /> */}
        <Text style={styles.text}>
          {width_proportion} of width{'\n'}
          {height_proportion} of height
        </Text>
      </View>
    </View>
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.mainContainer}>
    //     <View style={styles.box}>
    //       <Text style={styles.text}>
    //         {width_proportion} of width{'\n'}
    //         {height_proportion} of height
    //       </Text>
    //     </View>
    //     {/* <View style={styles.logoContainer}>
    //       <Image style={styles.logoImage} source={require("./assets/logo03t.png")} />
    //     </View> */}
    //     {/* <Text style={styles.logoText}>App untuk Edy Kiatmadja ver 1.0</Text>
    //     <TextInput style={styles.input} placeholder="Username" />
    //     <TextInput style={styles.input} placeholder="Password" /> */}
    //   </View>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A9BD4',
  },
  box: {
    width: width_proportion,
    height: height_proportion,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  text: {
    fontSize: 18,
  },
  logoImage: {
    resizeMode: 'contain',
    // resizeMethod: 'scale',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'dodgerblue',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // input: {
  //   height: 40,
  //   margin: 10,
  //   borderWidth: 1,
  //   padding: 10,
  //   width: 200,
  // },
  // logoContainer: {
  //   // position: "absolute",
  //   // top: 20,
  //   // alignItems: "center",
  //   // height: 200,
  //   padding: 20,
  // },
  // logoImage: {
  //   // width: 'auto',
  //   // marginVertical: 20,
  //   // margin: 20,
  //   // flex: 1,
  //   resizeMode: 'contain',
  //   // margin: 20,
  //   height: 200,
  //   backgroundColor: "#fff",
  // },
  // logoText: {
  //   marginTop: 8,
  //   fontSize: 12,
  //   fontStyle: 'italic',
  // },
  // mainContainer: {
  //   flex: 1,
  //   justifyContent: 'center', // horizontal axis
  //   alignItems: 'center', // vertical axis
  //   // alignContent: 'center',
  //   // flexWrap: 'wrap',
  // },
  // text: {
  //   fontSize: 18,
  // },
});
