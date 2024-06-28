import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgetPassword';
import BagPages from './pages/Bagpages';
import FavoritesPages from './pages/Favoritepages';
import ShopPages from './pages/shopPages';
import ProfileView from './pages/ProfilPages';


import activatedHome from './assets/icons/activatedHome.png';
import noninactiveHome from './assets/icons/noninactiveHome.png';
import  activatedBag from './assets/icons/activatedBag.png';
import  activatedShop from './assets/icons/activatedShop.png';
 import activatedProfil from './assets/icons/activatedProfil.png';
 import activatedFavorites from './assets/icons/activatedFavorites.png';
//  import search from './assets/search.png';
 import nonactivedBag from './assets/icons/nonactivedBag.png';
 import noninactivedFavorites from './assets/icons/noninactivedFavorites.png';
 import noninactiveProfil from'./assets/icons/noninactiveProfil.png';
 import noninactiveShop from './assets/icons/noninactiveShop.png';

 
 


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
       <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ?  activatedHome : noninactiveHome} />
          ),
        }}
      />

<Tab.Screen
        name="Shop"
        component={ShopPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? activatedShop : noninactiveShop} />
          ),
        }}
      />

      <Tab.Screen
        name="Bag"
        component={BagPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? activatedBag : nonactivedBag} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoritesPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? activatedFavorites : noninactivedFavorites} />
          ),
        }}
      />

      <Tab.Screen
        name="Profil"
        component={ProfileView}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? activatedProfil : noninactiveProfil} />
          ),
        }}
      />


      

    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs">
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Shop" component={ShopPages} />
        <Stack.Screen name="Favorit" component={FavoritesPages} />
        <Stack.Screen name="Profil" component={ProfileView} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;