import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import colors from '../config/colors'

function WelcomeScreen({navigation, addUser}) {
    const googleLogin = () => {
        addUser()
    }
    return (
        <View style={styles.container}>
            <Entypo name="open-book" color={colors.white} size={120} />
            <Text style={styles.title}>MU School System</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Student_Login')}>
                    <Text style={styles.text}>login as student</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('company_login')}>
                    <Text style={styles.text}>login as company</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Admin_Login')}>
                    <Text style={styles.text}>login as admin</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('student_data')}>
                    <Text style={styles.text}>Student Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('company_data')}>
                    <Text style={styles.text}>Company Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('add_school')}>
                    <Text style={styles.text}>Add School</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.footer}>Powered By Muhammad Umar</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        width: "100%",
        padding: 20
    },
    title:{
        fontSize:20,
        color: colors.white,
        marginBottom:40 
    },
    footer:{
        color: colors.white,
        justifyContent: "flex-end",
    },
    button:{
        backgroundColor: colors.white,
        width:"100%",
        padding: 12,
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 15,
        marginVertical: 10
    },
    text:{
        color: colors.blue,
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "500"
    },
    bottom:{
        color: colors.white
    }
})


export default WelcomeScreen