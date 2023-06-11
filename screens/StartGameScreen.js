import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen(props){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredNumber){
        console.log(enteredNumber);
        setEnteredNumber(enteredNumber);
    }

    function resetInputHandler(){
        setEnteredNumber('');
        
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!','Number has tobe a number between 1 and 99.',
            [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }

        props.numberPicked(enteredNumber);
    }

    return <View styles={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText style={styles.instructionsText} > Enter a Number</InstructionText>
        <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
    </Card>
    </View>
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'stretch'
    },
    instructionsText: {
        marginBottom: 12
    },
    numberInput: {
            height:50,
            width: 50,
            textAlign: 'center',
            fontSize: 32,
            borderBottomColor: Colors.accent500,
            borderBottomWidth: 2,
            color: Colors.accent500,
            marginVertical: 8,
            fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})