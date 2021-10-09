import React, { Component } from 'react';
import Planetdetails from './screens/PlanetDetails';
import Homescreen from './screens/Homescreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const cors = require("cors");

app.options("*", cors({ origin: 'http://127.0.0.1:5000/19006', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://127.0.0.1:5000/19006", optionsSuccessStatus: 200 }));

export default function App() {
  return <Appcontainer />
}

const appstacknavigator = createStackNavigator({
  Home: { screen: Homescreen, navigationOptions: { headerShown: false } },
  Details: { screen: Planetdetails }
},
  {
    initialRouteName: "Home"
  })


const Appcontainer = createAppContainer(appstacknavigator)