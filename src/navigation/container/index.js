import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/authentication/login';
import SignUp from '../../screens/authentication/sign_up';
import Splash from '../../screens/authentication/splash';
import TabNavigation from '../tab_navigation';





const Stack = createStackNavigator();


const Container = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabNavigation"
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: false,
                    headerShown: false
                }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name="SignUp" component={SignUp}
                    options={{
                        headerShown: true
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container
