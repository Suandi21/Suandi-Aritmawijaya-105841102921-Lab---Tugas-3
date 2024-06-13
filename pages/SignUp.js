import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Judul from '../compenent/Judul';
import Input from '../compenent/Input';
import Teks from '../compenent/Teks'
import Button from '../compenent/Button';
import Gambar from '../compenent/Gambar';

const SignUp = () => {

    const navigation = useNavigation();
    return (
        <View>
            <View style={{}}>
            <Judul text="SignUp" />
            </View>
            
            <View style={{
               marginTop: 30
            }}>
                <Teks placeholder="Nema" />
            </View>

            <View style={{}}>
                <Teks placeholder="Email" />
            </View>

            <View style={{}}>
            <Teks placeholder="Password" />
            </View>

            <View style={{
                marginLeft: 150,
                marginTop: 10
            }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Input text="Already have an account?" />
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 40
            }}>
                <Button text="SIGN UP" backgroundColor= '#FF0000' />
            </View>

            <View style={{
                marginTop: -40
            }}>
                <Input text="Or login with social account" />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: `center`,
                gap: 20,
                marginTop: 10

            }}>
            <Gambar imageSource={require('../assets/Google.png')} />
            <Gambar imageSource={require('../assets/Facebook.png')} />
            </View>

        </View>
    )
}

export default SignUp;