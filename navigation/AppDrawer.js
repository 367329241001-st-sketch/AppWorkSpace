// navigation/AppDrawer.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import MainTabs from './MainTabs';
import HowToScreen from '../screens/HowToScreen';
import AboutProjectScreen from '../screens/AboutProjectScreen';
import { COLORS } from '../styles/theme';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#fff',
        drawerActiveTintColor: COLORS.primary,
      }}
    >
      <Drawer.Screen 
        name="MainTabs" 
        component={MainTabs} 
        options={{ 
          title: 'WorkSpace Hunter',
          drawerLabel: 'หน้าหลักแอป (Main Tabs)',
          drawerIcon: ({ color }) => <Ionicons name="apps" size={22} color={color} />
        }} 
      />
      <Drawer.Screen 
        name="HowTo" 
        component={HowToScreen} 
        options={{ 
          title: 'คู่มือการใช้งาน',
          drawerLabel: 'คู่มือการใช้งาน (How To)',
          drawerIcon: ({ color }) => <Ionicons name="help-circle" size={22} color={color} />
        }} 
      />
      <Drawer.Screen 
        name="AboutProject" 
        component={AboutProjectScreen} 
        options={{ 
          title: 'เกี่ยวกับโปรเจกต์',
          drawerLabel: 'เกี่ยวกับโครงการ (About)',
          drawerIcon: ({ color }) => <Ionicons name="information-circle" size={22} color={color} />
        }} 
      />
    </Drawer.Navigator>
  );
}