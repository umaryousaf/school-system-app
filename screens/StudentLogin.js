import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import colors from '../config/colors'
import * as Yup from "yup"
import {AppForm, AppFormFeild, SubmitButton} from "../form"

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})


function RegisterScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Entypo
                    name="open-book"
                    color={colors.blue}
                    size={120}
                    />
                
                <Text style={styles.text}>Login As Student</Text>
            </View>
            
            <AppForm 
                initialValues={{email: "", password: "", password2: "", name: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormFeild
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    keyboardType="email-address"
                    placeholder="Email"
                />

                <AppFormFeild
                     autoCapitalize="none"
                     autoCorrect={false}
                     icon="lock"
                     name="password"
                     secureTextEntry
                     placeholder="Password"
                />
                <SubmitButton title="Sign In"/>
            </AppForm>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    },
    text:{
        fontSize:20,
        color: colors.black,
        marginBottom:40 
    },
    bottom:{
        fontSize: 13,
    },
    upper:{
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }
})

export default RegisterScreen;