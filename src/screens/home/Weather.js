import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import RNLocation from 'react-native-location';

import WeatherImage from '../../assets/images/troinang.png'


const Weather = () => {
    const navigation = useNavigation();
    var [temperature, setTemperature] = useState(null)
    var [address, setAddress] = useState(null)



    useEffect(() => {
        getAddress();
        getWeather();
    });


    var getAddress = () => {
        if (address) return false
        RNLocation.configure({
            distanceFilter: 0,
            androidProvider: "auto",
            interval: 5000, // Milliseconds
            fastestInterval: 10000, // Milliseconds
            maxWaitTime: 5000, // Milliseconds
        })


        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "fine",
                rationale: {
                    title: "Cấp quyền truy cập vị trí",
                    message: "Chúng tôi cần vị trí hiện tại của bạn để hiển thị thời tiết.",
                    buttonPositive: "OK",
                }
            }
        })
            .then(granted => {
                if (granted) {
                    RNLocation.getLatestLocation({ timeout: 60000 })
                        .then(lastestLocation => {
                            setAddress({
                                lat: lastestLocation.latitude,
                                lon: lastestLocation.longitude
                            })
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
    }

    var getWeather = () => {
        if (!address) return false
        var url = `http://api.openweathermap.org/data/2.5/find?lat=${address.lat}&lon=${address.lon}&cnt=10&appid=f178102dc3a61a03084269db65a198c1`

        fetch(url, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                var temp = Math.round(data.list[0].main.temp - 273.15)
                setTemperature(temp)
            })
            .catch((err) => {
                console.log(err)
            });
    }


    if (temperature) {
        return (
            <View style={styles.weather_wrapper}>
                <Image source={WeatherImage} style={styles.weather_image}></Image>
                <Text style={styles.weather_text}>{temperature}{'°C'}</Text>
            </View>
        )
    } else {
        return false
    }

}

const styles = StyleSheet.create({
    weather_wrapper: {
        position: 'absolute',
        right: 15,
        backgroundColor: '#43c5ff',
        borderRadius: 999,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    weather_text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
        position: 'absolute',
        bottom: 5
    },
    weather_image: {
        width: 35,
        height: 35,
        position: 'absolute',
        top: 0
    },

})

export default Weather
