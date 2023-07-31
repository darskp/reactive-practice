import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../constants';
const ForgetPassword = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container} alignItems={"center"}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }} overScrollMode={Platform.OS === 'android' ? "never" : "auto"}>

<View>
    <Text>
        I am ForgetPassword screen
    </Text>
</View>
                <View style={styles.pushLink}>
                    <Text style={styles.centerText}> Don't have Account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} paddingTop={10}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    pushLink: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    paddingVertical: 30
  },
  centerText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
  registerText: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
});

export default ForgetPassword;
