import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../compoments/ui/Title";
import colors from "../constants/colors";
import primaryButton from "../compoments/ui/PrimaryButton";
import PrimaryButton from "../compoments/ui/PrimaryButton";
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.ImageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
      <Text style={styles.summaryText}> your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the
        number <Text style={styles.highlight}> {userNumber}</Text>.</Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  
  );
}
export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  ImageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    color: colors.primary500,
    fontFamily: 'open-sans-bold'
  }
});