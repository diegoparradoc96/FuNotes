import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home_} from '../views';

/* components */
import {Drawer_} from '../components';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home_}
          options={{
            title: 'FuNotes',
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Navigation};
