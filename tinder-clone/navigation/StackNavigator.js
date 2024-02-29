import {createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator();

const StackNavigator =()=>{
    return (
      <StackNavigator>
         <Stack.Screen name="Login" component={LoginScreen} />
      </StackNavigator>
    )
}


