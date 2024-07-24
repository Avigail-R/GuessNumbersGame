import {Text, StyleSheet, Platform} from "react-native";
function TitleIos({children}) {
  return (
      <Text style={styles.title}>{children}</Text>
  );
}

export default TitleIos;

const styles = StyleSheet.create({

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign:'center',
    //borderWidth: Platform.OS === 'android' ? 2 :0,
    //borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 0,
    borderColor: 'red',
    padding: 10,
    maxWidth: '80%',
    width: 350
     
  }
})
        
