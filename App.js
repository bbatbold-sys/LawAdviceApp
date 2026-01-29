import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import AdviceDetailScreen from './src/screens/AdviceDetailScreen';
import DisclaimerScreen from './src/screens/DisclaimerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a365d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerBackTitleVisible: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Хууль Зөвлөгөө' }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={({ route }) => ({ title: route.params.category.title })}
        />
        <Stack.Screen
          name="AdviceDetail"
          component={AdviceDetailScreen}
          options={{ title: 'Хуулийн Мэдээлэл' }}
        />
        <Stack.Screen
          name="Disclaimer"
          component={DisclaimerScreen}
          options={{ title: 'Хуулийн Анхааруулга' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
