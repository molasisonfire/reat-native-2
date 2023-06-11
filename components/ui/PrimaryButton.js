import { Text, View, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function PrimaryButton({children, onPress}){
    function pressHandler(){

    }

    return ( 
        <View style={styles.buttonOuterContainer}>
    <Pressable 
        onPress={onPress} 
        style={ ({pressed}) => pressed? [styles.container,styles.pressed] : styles.container} 
        android_ripple={{color: Colors.primary600}}>
            <Text style={styles.buttonText}> {children}</Text>
    </Pressable>
    </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.75
    }
})