import React from 'react';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  LiveScoreScreen,
  AllMatchesScreen,
  TeamsScreen,
  VideosScreen,
  StatisticsScreen,
} from './app/Screens';
import { AppProvider } from './app/Context/AppContext';

type StackParamList = {
  LiveScoreScreen: undefined;
  AllMatchesScreen: undefined;
  TeamsScreen: undefined;
  VideosScreen: undefined;
  StatisticsScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    PremierLeagueW01: require('./assets/fonts/PremierLeagueW01.ttf'),
    'PremierLeagueW01-Bold': require('./assets/fonts/PremierLeagueW01-Bold.ttf'),
    PremierLeague: require('./assets/fonts/Barclays Premier League.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LiveScoreScreen"
          screenOptions={{
            headerShown: false,
            animation: 'none',
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="LiveScoreScreen" component={LiveScoreScreen} />
          <Stack.Screen name="AllMatchesScreen" component={AllMatchesScreen} />
          <Stack.Screen name="TeamsScreen" component={TeamsScreen} />
          <Stack.Screen name="VideosScreen" component={VideosScreen} />
          <Stack.Screen name="StatisticsScreen" component={StatisticsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
