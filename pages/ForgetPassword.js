import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Judul from '../compenent/Judul';
import Input from '../compenent/Input';
import Teks from '../compenent/Teks'
import Button from '../compenent/Button';


const ForgetPassword = () => {

    const navigation = useNavigation();
    return (
        <View>
            <View style={{

        }}>
        <Judul text="ForgetPassword" />
        </View>

            <View style={{
                marginLeft: -180,
                marginTop: 90


            }}>
                <Input text="Plase,enter yuor addres.
                " />
            </View>

            <View style={{

               marginLeft: -10,
            }}>
                <Teks placeholder="Email" borderColor="#FF0000" placeholderTextColor="#FF0000" />
            </View>

            <View style={{
               alignContent: "center"
            }}>
                <Input text="not a valid email adress should be your@email.com" color='red' fontSize={11} />
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