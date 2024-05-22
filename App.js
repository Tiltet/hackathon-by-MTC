import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from "./components/navigation/Navigation";
import Test from "./components/auth/Login";

export default function App() {
  return (
      <Test/>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});
