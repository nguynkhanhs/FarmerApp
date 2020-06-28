import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import DiaryStack from '../diary_stack';
import HomeStack from '../home_stack';
import Profile from '../../screens/profile';
import ProductStack from '../../navigation/product_stack';


const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation}) {    
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = ()=>{
          if(route.name === 'HomeStack') {
            return 'bell'
          }
          else if (route.name === 'DiaryStack') {
            return 'list-alt'
          }
          else if (route.name === 'ProductStack') {
            return 'cube'
          }
          else if (route.name === 'Profile') {
            return 'user'
          }
        }
        

        var getPadding = ()=>{
          if (route.name === 'Profile') {
            return 14
          } else {
            return 10
          }
        }

        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            style={[styles.button,{
              backgroundColor: isFocused ? '#fff' : 'rgb(0, 158, 100)',
              paddingHorizontal: getPadding()
            }]}
          >
            <Icons
              name={getIcon()}
              size={27}
              color={isFocused ? 'rgba(6, 187, 121, 1)' : 'rgba(6, 187, 121, 1)'}
            ></Icons>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} initialRouteName="HomeStack">
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="DiaryStack" component={DiaryStack} />
      <Tab.Screen name="ProductStack" component={ProductStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}


var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(6, 187, 121, 1)',
    paddingVertical: 7,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 999,
  }
})


export default TabNavigation
