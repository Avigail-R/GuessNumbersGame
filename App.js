import {ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StartGameScreen  from "./screems/ StartGameScreen";
import {useState} from "react";
import GameScreen from "./screems/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screems/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  
  
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function pikedNumberHandler(number) {
    setUserNumber(number);
    setGameIsOver(false);
  }
  let screen = <StartGameScreen onPickNumber={pikedNumberHandler}/>;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setGameIsOver(false);
    setUserNumber(null);
  }
  return (
    <LinearGradient colors={[colors.primary700, colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMethod="cover"
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1
  },
  backgroundImage: {
    opacity: 0.15
  },
});
