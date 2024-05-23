import * as React from 'react';
import {StyleSheet} from 'react-native';
import { useState } from "react";
import { NavContext } from "./context/navigattionContext";
import {HomeScreen} from "./components/auth/Login";
import {Navigation} from "./components/navigation/Navigation";
import {NavigationContainer} from "@react-navigation/native";
import {Profile} from "./pages/profile/Profile";

export default function App() {

  const [auth, setAuth] = useState(false)
  const [index, setIndex] = useState(0)

  return (
      <NavigationContainer>
          <NavContext.Provider value={{ index, setIndex }}>
              {index === 0 && <HomeScreen/>}
              {index === 1 && <Navigation/>}
              {index === 2 && <Profile/>}
          </NavContext.Provider>
      </NavigationContainer>
  );
}

