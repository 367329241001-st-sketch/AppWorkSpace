/**
 * @file App.js
 * @description Root entry point for the React Native / Expo application.
 *
 * Configures global app infrastructure including gesture handling support,
 * top-level navigation container, status bar appearance, and the main stack navigator.
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootStack from './navigation/RootStack';

/**
 * Root Application Component.
 *
 * Initializes the navigation tree wrapped in {@link NavigationContainer},
 * sets up the global light status bar theme, and renders the primary navigation stack.
 *
 * @returns {React.ReactNode} The main application component hierarchy.
 */
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RootStack />
    </NavigationContainer>
  );
}

