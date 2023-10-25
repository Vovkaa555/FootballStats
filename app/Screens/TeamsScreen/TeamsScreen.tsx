import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainContainer from '../../TemplateComponents/MainContainer';

const TeamsScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Text>TeamsScreen</Text>
      </View>
    </MainContainer>
  );
};

export default TeamsScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
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
