import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Product from '../../screens/product';
import Details from '../../screens/product/details';
import Bills from '../../screens/product/bills';


const Stack = createStackNavigator();


const ProductStack = () => {
    return (
        <Stack.Navigator initialRouteName="Product"
            screenOptions={{
                headerTransparent: true,
                headerTitle: false,
                headerShown: false
            }}>
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Details" component={Details}
                options={{
                    headerShown: true
                }} />
            <Stack.Screen name="Bills" component={Bills}
                options={{
                    headerShown: true
                }} />
        </Stack.Navigator>
    )
}

export default ProductStack
