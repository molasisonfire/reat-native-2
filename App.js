
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';

export default function App() {
  const [ userNumber, setUserNumber] = useState();
  const [ gamerIsOver , setGamerIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGamerIsOver(false);
  }
  function gameOverHandler(){
    setGamerIsOver(true);
  }

  let screen = <StartGameScreen numberPicked={pickedNumberHandler} />;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} valor={gamerIsOver}/>;
  }

  if(gamerIsOver && userNumber){
    screen = <GameOverScreen/>;
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/splash.png')}
      resizeMode='cover'
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
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.15
  }
});
