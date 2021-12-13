import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StackHome,StackMovie,StackPlayVideo,StackAccount} from './Stack';
import { FontAwesome5,MaterialIcons,FontAwesome } from "@expo/vector-icons";
import { colorapp } from '../context/Reducer';
const TabHome = () => {
    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
            //   position: "absolute",
            elevation: 0,
            backgroundColor: "#ffff",
            borderRadius: 5,
            //   height: Platform.OS === "ios"? 80: 60,
            },
        }}
        >
        <Tab.Screen 
         name="Home" 
          component={StackHome}
           options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  top: 0,
                }}
                >
                <FontAwesome5 name="home" size={18}color={focused ? colorapp : "#748c94"}/>
                <Text style={{ color: focused ?  colorapp : "#748c94" }}>
                Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen 
         name="Explore" 
          component={StackPlayVideo}
           options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  top: 0,
                }}
                >
                <MaterialIcons name="local-movies" size={18}color={focused ?  colorapp : "#748c94"} />
                <Text style={{ color: focused ?  colorapp : "#748c94" }}>
                    Explore
                </Text>
              </View>
            ),
          }}
        />
         <Tab.Screen 
         name="Account" 
          component={StackAccount}
           options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  top: 0,
                }}
                >
                <FontAwesome name="user-circle-o" size={18}color={focused ?  colorapp : "#748c94"}/>
                <Text style={{ color: focused ?  colorapp : "#748c94" }}>
                    Account
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen 
         name="Favorite" 
          component={StackHome}
           options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  top: 0,
                }}
                >
                <MaterialIcons name="favorite" size={18}color={focused ?  colorapp : "#748c94"} />
                <Text style={{ color: focused ?  colorapp : "#748c94" }}>
                    Favorite
                </Text>
              </View>
            ),
          }}
        />
    </Tab.Navigator>
    )
}

export default TabHome
