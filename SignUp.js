import React from 'react';
import {View} from 'react-native';
import Judul from './compenent/Judul';
import Input from './compenent/Input';
import Teks from './compenent/Teks'
import Button from './compenent/Button';
import Gambar from './compenent/Gambar';

const SignUp = () => {
    return (
        <View>
            <View style={{
            marginLeft: 20
            }}>
            <Judul text="Sign up" />
            </View>
            
            <View style={{
                marginLeft: 20
            }}>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
            </View>

            <View style={{}}>
            <Teks text="Already have an account?" />
            </View> 

            <View style={{}}>
                <Button text="Sign up" backgroundColor= "#FF0000"/>
            </View>

            <View style={{
                 marginLeft: -100,
                marginTop: 100,
               
            }}>
                <Teks text="Or Sign up with social account" />
            </View>

            <View style={{
                flexDirection: 'row',
                gap: 25,
                marginTop: 20,
                justifyContent: "center",
                marginLeft: 20,
            }}>
                <Gambar imageSource={require('./assets/Google.png')} />
                <Gambar imageSource={require('./assets/Facebook.png')} />
            </View>
      
        </View>
    )
}

export default SignUp;