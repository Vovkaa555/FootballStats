import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import MainContainer from '../../TemplateComponents/MainContainer';

const VideosScreen = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Text>VideosScreen</Text>
      </View>
    </MainContainer>
  );
};

export default VideosScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
  },
});
