import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import HeaderApp from '..//components/HeaderApp';
import s from '../assets/styles/globalStyles';

// import FlatButton from '../../components/interactives/button';

import Card from '../components/Card'

// import Input from '../../components/interactives/input';

import { StatusBar } from 'react-native';

import {HomeScreen} from '../screens/HomeScreen'

const Tab = createMaterialTopTabNavigator();

const ProfileScreen: React.FC = () => {
    return (
        <View>
            {/* <HeaderApp /> */}
            <View style={s.secondarybackgroundColor}>
                <Ionicons name="person-circle-outline" size={100} color="#fff" />
                <Text style={[s.backgroundColor, s.fs36, s.p4]}>Hello YP522 !</Text>
            </View>
        </View>
    );
};



const LoginScreen: React.FC = () => {
    return (
      <View>
        {/* <HeaderApp /> */}
        <View style={s.secondarybackgroundColor}>
          <Text style={[s.backgroundColor, s.fs72, s.p4]}>Login Page</Text>
        </View>
        <Text style={[s.backgroundColor, s.primaryColor, s.fs24, s.p2]}>Email :</Text>
        {/* <Input text_placeholder="Ceci est un input où il est possible d'écrire du texte" text_keyboardType="numeric" /> */}
        <Text style={[s.backgroundColor, s.primaryColor, s.fs24, s.p2]}>Mot de passe :</Text>
        {/* <Input text_placeholder="Ceci est un input où il est possible d'écrire du texte" text_keyboardType="numeric" /> */}
        {/* <FlatButton text="Click me !" bkgColor={s.primarybackgroundColor} txtColor={s.foregroundColor} /> */}
      </View>
    );
  };

  const AppNavigator = () => {
    return (
      <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }} screenOptions={{
        tabBarStyle: { backgroundColor: "#18206F" },
        tabBarIndicatorStyle: {
          backgroundColor: '#dbe9ee',
        }
      }}>
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Ionicons
                size={25}
                name={focused ? 'home' : 'home-outline'}
                color={focused ? '#fff' : '#fff'}
              />
            ),
          }}
          component={HomeScreen}
          name='Home'
        />
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Ionicons
                size={25}
                name={focused ? 'people-sharp' : 'people-outline'}
                color={focused ? '#fff' : '#fff'}
              />
            ),
          }}
          component={ProfileScreen}
          name='Friends'
        />
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Ionicons
                size={25}
                name={focused ? 'lock-closed' : 'lock-open-outline'}
                color={focused ? '#fff' : '#fff'}
              />
            ),
          }}
          component={LoginScreen}
          name='Login'
        />
  
      </Tab.Navigator>
    );
  };

export default AppNavigator;


