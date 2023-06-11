import { StyleSheet , View , Image, Text} from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen(){
    return <View style={styles.rootContainer}>
        <Title>Gamer OVER!</Title>
        <View
        style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/splash.png')}></Image>
        </View>
        <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imageContainer: {
        width: 400,
        height: 400,
        borderRadius: 200,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image:{
        width: '100%',
        height: '100%'
    }
});