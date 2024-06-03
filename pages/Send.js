import React from 'react';
import {View} from 'react-native';
import Judul from '../compenent/Judul';
import Input from '../compenent/Input';
import Teks from '../compenent/Teks'
import Button from '../compenent/Button';
import Gambar from '../compenent/Gambar';

const Send = () => {
    return (
        <View>
            <View style={{
            marginLeft: 40
            }}>
            <Judul text="Forgot password" />
            </View>
            

            <View style={{
                marginLeft: -175
            }}>
            <Teks text="Plase,enter your email address." />
            </View> 

            
            <View style={{
                marginLeft: 20,
                marginLeft: 20,
                
            }}>
                <Input placeholder="Email" />
            </View>

            <View style={{
               marginLeft: -125
            }}>
            <Teks text="Not a valid address. Should be yuor@email.com" fontSize={11} color='red' />
            </View> 

            <View style={{}}>
                <Button text="send" backgroundColor= "#FF0000"/>
            </View>

            <View style={{
                 marginLeft: -100,
                marginTop: 100,
                
                
            }}>
            </View>

            <View style={{
                flexDirection: 'row',
                gap: 25,
                marginTop: 25,
                justifyContent: "center",
                marginLeft: 20,
            }}>
            
            </View>
      
        </View>
    )
}

export default Send;