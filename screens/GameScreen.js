import { Text, View, StyleSheet, Alert} from "react-native";
import { Ionicons } from "@expo/vector-icons";


import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min,max,exclude){
    const rndNum = Math.floor(Math.random()* (max-min))+min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber,onGameOver,valor}){
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(()=>{
        console.log(valor)
        console.log(currentGuess)
        console.log(userNumber)
        if ( currentGuess == userNumber){
            onGameOver();
        }
    },[currentGuess,userNumber, onGameOver])

    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < userNumber) ||
         (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!", "You know that this is wrong.",[{text: 'Sorry!', style: 'cancel'}]);
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess+1;
        }
        const newRndBumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess); 
        setCurrentGuess(newRndBumber);
    }

    console.log("fdp");
    return <View style={styles.screen}>
        <View >
            <Title> Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionsText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                        <Ionicons name="md-remove" size={24} color={'white'}/>
                    </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>  
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                    <Ionicons name="md-add" size={24} color={'white'}/>
                    </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    </View>
};

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 40
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionsText:{
        marginBottom: 12
    }
});