// //****************************************************************************************************************************************************************** */

// import 'react-native-gesture-handler';
// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import HomeScreen from "./screens/HomeScreen";
// import SettingScreen from './screens/SettingScreen';
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";
// import ViewWorkoutPlans from './components/ViewWorkoutPlans';
// import WorkoutDetails from './components/WorkoutDetails';
// import DashboardScreen from './screens/DashboardScreen';
// import DietDetails from './components/DietDetails';
// import WeightGainScreen from './components/WeightGainScreen';
// import WeightLossScreen from './components/WeightLossScreen';

// const homeName = "Home";
// const dashboardName = "Dashboard";
// const settingName = "Settings";

// const Stack = createStackNavigator();
// const tab  = createBottomTabNavigator();


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {isAuthenticated ? (
//           <>
//             <Stack.Screen name={settingName} component={SettingScreen} />
//           </>
//         ) : (
//           <>
//             <Stack.Screen name={homeName} component={HomeScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//             <Stack.Screen name={dashboardName} component={DashboardScreen} />
//             <Stack.Screen name="DietDetails" component={DietDetails} />
//             <Stack.Screen name="WeightGainScreen" component={WeightGainScreen} />
//             <Stack.Screen name="WeightLossScreen" component={WeightLossScreen} />
//             <Stack.Screen name="ViewWorkoutPlans" component={ViewWorkoutPlans} />
//             <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} />
//             <Stack.Screen name={settingName} component={SettingScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


//***************************************************************************************************************************************************************** */


import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ViewWorkoutPlans from './components/ViewWorkoutPlans';
import WorkoutDetails from './components/WorkoutDetails';
import DashboardScreen from './screens/DashboardScreen';
import DietDetails from './components/DietDetails';
import WeightGainScreen from './components/WeightGainScreen';
import WeightLossScreen from './components/WeightLossScreen';
import BmrCalculator from './components/BmrCalculator';

const homeName = "Home";
const DashboardName = "Dashboard";
const SettingName = "Settings";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Signup" component={SignupScreen}/>
    <Stack.Screen name="Login" component={LoginScreen}/>
  </Stack.Navigator>
);
const DashStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false 
  }}>
    <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    <Stack.Screen name="DietDetails" component={DietDetails} />
    <Stack.Screen name="WeightGainScreen" component={WeightGainScreen} />
    <Stack.Screen name="WeightLossScreen" component={WeightLossScreen} />
    <Stack.Screen name="ViewWorkoutPlans" component={ViewWorkoutPlans}/>
    <Stack.Screen name="WorkoutDetails" component={WorkoutDetails}/>
    <Stack.Screen name="BmrCalculator" component={BmrCalculator}/>
  </Stack.Navigator>
);
const SettingStack = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Setting" component={SettingScreen} />
  </Stack.Navigator>
);


const App = () => (
  <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === DashboardName) {
                            iconName = focused ? 'list' : 'list-outline';

                        } else if (rn === SettingName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>

                <Tab.Screen name={homeName} component={HomeStack} />
                <Tab.Screen name={DashboardName} component={DashStack} />
                <Tab.Screen name={SettingName} component={SettingStack} />
            </Tab.Navigator>
        </NavigationContainer>
);

export default App;


// Merge all code and make proper navigation each and every screen