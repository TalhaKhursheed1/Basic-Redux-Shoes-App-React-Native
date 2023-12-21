import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screen/Home';
import { Provider } from 'react-redux';
import Store from './component/Redux/Store';
import CartScreen from './src/Screen/CartScreen';
import UserList from './src/Screen/UserList';

const stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen 
          name="Home" component={Home}   />
          <stack.Screen name="CartScreen" component={CartScreen} />
          <stack.Screen name="User" component={UserList} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
