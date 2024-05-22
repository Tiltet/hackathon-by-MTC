import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from "./components/navigation/Navigation";

export default function App() {
  return (
      <Navigation/>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});
