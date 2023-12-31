import { StyleSheet, View } from "react-native";

import Colors from "../../constants/Colors";

function Card({children}){
    return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems : 'center',
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary700,
        elevation: 4,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})