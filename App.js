import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Src/Screens/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Src/Screens/SignUp/SignUp';
import Dashboard from './Src/Screens/Dashboard/Dashboard';
import BottomTabNav from './Src/Navigation/BottomTabNav';
import Tracker from './Src/Screens/Tracker/Tracker';
import ConfirmEmail from './Src/ConfirmEmail/ConfirmEmail';
import ResetPassword from './Src/Screens/ResetPassword/ResetPassword';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name='Tracker' component={Tracker} options={{headerShown: false}} /> */}
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={BottomTabNav} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} options={{headerShown: false}} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: false}} />
        

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
