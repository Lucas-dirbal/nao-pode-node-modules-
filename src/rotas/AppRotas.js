import React from "react";
import { NavegationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../telas/Home';
import MelhoresProdutores from "../telas/MelhoresProdutores";

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return<NavegationContainer>
        <Tab.Screen name='Home' component={home} />
        <Tab.Screen name='MelhoresProdutores' component={MelhoresProdutores}/>
    </NavegationContainer>
}