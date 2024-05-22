import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useState } from "react";
import { HomeScreen } from "./components/auth/Login";

export default function App() {

  const [auth, setAuth] = useState(false)

  return (
      // <Navigation/>
      <HomeScreen/>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});
