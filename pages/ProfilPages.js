import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const profileData = {
    orders: { title: 'My orders', subtitle: 'Already have 12 orders' },
    addresses: { title: 'Shipping addresses', subtitle: '3 addresses' },
    payments: { title: 'Payment methods', subtitle: 'Visa **34' },
    promocodes: { title: 'Promocodes', subtitle: 'You have special promocodes' },
    reviews: { title: 'My reviews', subtitle: 'Reviews for 4 items' },
    settings: { title: 'Settings', subtitle: 'Notifications, password' }
};

const ProfileListItem = ({ title, subtitle }) => (
    <TouchableOpacity style={profileStyles.itemContainer}>
        <View>
            <Text style={profileStyles.itemTitle}>{title}</Text>
            <Text style={profileStyles.itemSubtitle}>{subtitle}</Text>
        </View>
        <Image source={require('../assets/icons/right.png')} style={profileStyles.itemArrow} />
    </TouchableOpacity>
);

const ProfileView = () => {
    const [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Metropolis-Bold.otf'),
        'Medium': require('../assets/fonts/Metropolis-Medium.otf'),
        'SemiBold': require('../assets/fonts/Metropolis-SemiBold.otf'),
        'Black': require('../assets/fonts/Metropolis-Black.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={profileStyles.errorContainer}>
                <Text style={profileStyles.errorText}>Font tidak ditemukan!!!</Text>
            </View>
        );
    }

    const profileItems = Object.keys(profileData).map(key => ({ id: key, ...profileData[key] }));

    return (
        <SafeAreaView style={profileStyles.safeArea}>
            <View style={profileStyles.headerContainer}>
                <Image source={require('../assets/icons/search.png')} style={profileStyles.searchIcon} />
            </View>
            <View style={profileStyles.profileHeader}>
                <Text style={profileStyles.profileHeaderTitle}>My profile</Text>
                <View style={profileStyles.profileDetails}>
                    <Image source={require('../assets/suandi.jpeg')} style={profileStyles.profileImage} />
                    <View>
                        <Text style={profileStyles.profileName}>SUANDI ARITMAWIJAYA</Text>
                        <Text style={profileStyles.profileEmail}>sandokeandoke@gmail.com</Text>
                    </View>
                </View>
            </View>
            <FlatList
                data={profileItems}
                renderItem={({ item }) => <ProfileListItem title={item.title} subtitle={item.subtitle} />}
                keyExtractor={item => item.id}
                style={profileStyles.flatList}
            />
        </SafeAreaView>
    );
};

const profileStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    profileHeader: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileHeaderTitle: {
        fontSize: 28,
        fontFamily: 'Bold',
    },
    profileDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
    },
    profileName: {
        fontSize: 18,
        fontFamily: 'Bold',
    },
    profileEmail: {
        fontSize: 16,
        color: '#888',
        fontFamily: 'Medium',
    },
    flatList: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemTitle: {
        fontSize: 18,
        fontFamily: 'Bold',
    },
    itemSubtitle: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Medium',
    },
    itemArrow: {
        fontSize: 18,
        color: '#888',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default ProfileView;
