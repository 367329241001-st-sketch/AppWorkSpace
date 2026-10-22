// navigation/RootStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppDrawer from './AppDrawer';
import TopicDetailScreen from '../screens/TopicDetailScreen';
import { COLORS } from '../styles/theme';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen 
        name="DrawerRoot" 
        component={AppDrawer} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="TopicDetail" 
        component={TopicDetailScreen} 
        options={({ route }) => ({ 
          title: route.params?.item?.title || 'รายละเอียด' 
        })} 
      />
    </Stack.Navigator>
  );
}