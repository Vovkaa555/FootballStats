import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import MainContainer from '../../TemplateComponents/MainContainer';
const AllMatchesScreen = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Text style={styles.heading}>AllMatchesScreen</Text>
      </View>
    </MainContainer>
  );
};

export default AllMatchesScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'PremierLeagueW01-Bold',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
  },
});
