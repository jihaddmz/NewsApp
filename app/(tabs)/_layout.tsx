import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Index from "@/app/(tabs)/index";
import NewsByTitle from "@/app/(tabs)/NewsByTitle";
import {Ionicons} from "@expo/vector-icons";
import NewsByKeyword from "@/app/(tabs)/NewsByKeyword";

const Tab = createBottomTabNavigator();

const RootLayout = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
           <Tab.Screen name={"index"} component={Index} options={{
               tabBarIcon: ({ focused, size, color }) => (
                   <Ionicons name={"home"} size={size} color={color} />
               )
           }}/>
           <Tab.Screen name={"NewsByTitle"} component={NewsByTitle} options={{
               tabBarIcon: ({ focused, size, color }) => (
                   <Ionicons name={"newspaper"} size={size} color={color} />
               )
           }}/>
            <Tab.Screen name={"NewsByKeyword"} component={NewsByKeyword} options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <Ionicons name={"newspaper"} size={size} color={color} />
                )
            }}/>
        </Tab.Navigator>
    );
};

export default RootLayout;