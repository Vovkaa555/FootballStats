import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import MainContainer from '../../TemplateComponents/MainContainer';

const LiveScoreScreen: React.FC = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Text>LiveScoreScreen</Text>
      </View>
    </MainContainer>
  );
};

export default LiveScoreScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
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
