import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import TeamworkScreen from '../screens/TeamworkScreen';
import RNKnowledgeScreen from '../screens/RNKnowledgeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import { COLORS } from '../styles/theme';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 6, height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Teamwork') iconName = 'people';
          else if (route.name === 'RNKnowledge') iconName = 'book';
          else if (route.name === 'Explore') iconName = 'compass';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'หน้าหลัก' }} />
      <Tab.Screen name="Teamwork" component={TeamworkScreen} options={{ tabBarLabel: 'ผู้พัฒนา' }} />
      <Tab.Screen name="RNKnowledge" component={RNKnowledgeScreen} options={{ tabBarLabel: 'บทเรียน RN' }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ tabBarLabel: 'ค้นหา Space' }} />
    </Tab.Navigator>
  );
}
