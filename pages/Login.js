import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Button from '../compenent/Button';
import Gambar from '../compenent/Gambar';
import Input from '../compenent/Input';
import Judul from '../compenent/Judul';
import Teks from '../compenent/Teks';

const Login = ({navigation}) => {

    return (
        <View>
            <View style={{

            }}>
            <Judul text="Login" />
            </View>

            <View style={{
               marginTop: 30
            }}>
                <Teks placeholder="Email" />
            </View>

            <View style={{}}>
            <Teks placeholder="Password" />
            </View>

            <View style={{
                marginLeft: 250,
                marginTop: 10
            }}>
                 <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                <Input text="Forgot Password" />
                </TouchableOpacity>
            </View>
 
            <View style={{
                marginTop: 40
            }}>

            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
            <Button backgroundColor="#FF0000" text="LOGIN" />
            </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 30
            }}>
                <Input text="Or login with social account" />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: `center`,
                gap: 20,
                marginTop: 20
            }}>
            <Gambar imageSource={require('../assets/Google.png')} />
            <Gambar imageSource={require('../assets/Facebook.png')} />
            </View>

        </View>
    )
}

  export default Login;