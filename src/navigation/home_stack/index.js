import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/home';
import NewsDetails from '../../screens/home/news_details';


const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerTransparent: true,
                headerTitle: false,
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NewsDetails" component={NewsDetails}
                options={{
                    headerShown: true
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack
