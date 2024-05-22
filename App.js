import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from "./components/navigation/Navigation";
import Test from "./components/auth/Login";

export default function App() {
  return (
      <Test/>
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
