import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Diary from '../../screens/diary';
import DiaryDetails from '../../screens/diary/diary_details';


const Stack = createStackNavigator();


const DiaryStack = () => {
    return (
        <Stack.Navigator initialRouteName="Diary"
            screenOptions={{
                headerTransparent: true,
                headerTitle: false,
                headerShown: false
            }}
        >
            <Stack.Screen name="Diary" component={Diary} />
            <Stack.Screen name="DiaryDetails" component={DiaryDetails}
                options={{
                    headerShown: true
                }} />
        </Stack.Navigator>
    )
}

export default DiaryStack
