import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import RootStack from './navigators/RootStacks';

export default function App() {
  return (
    <ScrollView>
      <RootStack />
    </ScrollView>
  );
}
