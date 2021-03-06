import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { GlobalContextProvider } from './components/GlobalContext';
import BeaconsScreen from './components/BeaconsScreen';
import EditScreen from './components/EditScreen';
import RadarScreen from './components/RadarScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#388e3c',
    accent: '#00600f',
  },
};

const AppNavigator = createStackNavigator(
  {
    Home: BeaconsScreen,
    EditScreen,
    RadarScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <GlobalContextProvider>
        <AppContainer />
      </GlobalContextProvider>
    </PaperProvider>
  );
}
