import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import {Colors} from './constants/colors';

// https://hackernoon.com/recording-audio-in-react-native-ca1d3uc8

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor={Colors.primary500} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: {
              backgroundColor: Colors.gray700,
            },
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            // we convert our object to a function that return and not a static object
            options={({navigation}) => ({
              title: 'Your Favorite Places',
              headerRight: ({tintColor}) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add a new Place',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
