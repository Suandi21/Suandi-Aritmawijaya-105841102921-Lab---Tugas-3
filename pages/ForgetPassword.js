import React from 'react';
import {View} from 'react-native';
import Judul from '../compenent/Judul';
import Input from '../compenent/Input';
import Teks from '../compenent/Teks'
import Button from '../compenent/Button';
import Gambar from '../compenent/Gambar';

const ForgetPassword = () => {
    return (
        <View>
            <View style={{
           
        }}>
        <Judul text="ForgetPassword" />
        </View>
        
            <View style={{
                marginLeft: -165,
                marginTop: 150
                

            }}>
                <Input text="plase,enter yuor addres.
                " />
            </View>
              
            <View style={{
              
               marginLeft: -10,
            }}>
                <Teks placeholder="Email" />
            </View>

            <View style={{
                marginLeft: 30,
                marginTop: 10
            }}>
                <Input text="not a valid email adress should be your@email.com" />
            </View>

            <View style={{
                marginTop: 40
            }}>
                <Button text="SEND" backgroundColor= '#FF0000' />
            </View>

            <View style={{
                marginTop: 70
            }}>
                </View>

        </View>
    )
}

  export default ForgetPassword;