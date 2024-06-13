import React from 'react';
import {View} from 'react-native';
import Judul from '../compenent/Judul';
import Input from '../compenent/Input';
import Teks from '../compenent/Teks'
import Button from '../compenent/Button';
import Gambar from '../compenent/Gambar';

const Login = () => {
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
                <Input text="Forgot Password" />
            </View>

            <View style={{
                marginTop: 40
            }}>
                <Button text="LOGIN" backgroundColor= '#FF0000' />
            </View>

            <View style={{
                marginTop: 70
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