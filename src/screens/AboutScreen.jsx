import React from 'react';
import {Text, View} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  return (
    <MainLayout>
      <Text>About Screen</Text>
      <Text>App Name: Your App</Text>
      <Text>Developer: Your Name</Text>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
}

export default AboutScreen;
