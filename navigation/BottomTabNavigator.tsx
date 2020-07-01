import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import pessoais from '../screens/Pessoaiscreen';
import Objetivo from '../screens/ObjetivoScreen';
import Formacao from "../screens/FormacaoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="pessoais"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="pessoais"
        component={pessoaisNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Objetivo"
        component={ObjetivoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="address-card" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Formacao"
        component={FormacaoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="university" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const pessoaisStack = createStackNavigator();

function pessoaisNavigator() {
  return (
    <pessoaisStack.Navigator>
      <pessoaisStack.Screen
        name="pessoais"
        component={pessoais}
        options={{ headerTitle: 'Dados Pessoais' }}
      />
    </pessoaisStack.Navigator>
  );
}

const ObjetivoStack = createStackNavigator();

function ObjetivoNavigator() {
  return (
    <ObjetivoStack.Navigator>
      <ObjetivoStack.Screen
        name="Objetivo"
        component={Objetivo}
        options={{ headerTitle: 'Objetivo' }}
      />
    </ObjetivoStack.Navigator>
  );
}
const FormacaoStack = createStackNavigator();

function FormacaoNavigator() {
  return (
    <FormacaoStack.Navigator>
      <FormacaoStack.Screen
        name="Formacao"
        component={Formacao}
        options={{ headerTitle: 'Formação' }}
      />
    </FormacaoStack.Navigator>
  );
}
