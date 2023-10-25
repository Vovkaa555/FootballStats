import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { BounceIn, BounceOut, ZoomIn, ZoomOut } from 'react-native-reanimated';

import { PremierLiga, SerieA, LaLiga, League1, LeagueChampions, Bundesliga } from '../../../assets';

const LoadingScreen: React.FC = () => {
  return (
    <Animated.View entering={ZoomIn.duration(40)} style={styles.loadingContainer} exiting={ZoomOut}>
      <View style={styles.animationContainer}>
        <Animated.Image
          source={LeagueChampions}
          entering={BounceIn}
          exiting={BounceOut}
          style={styles.image}
        />
        <Animated.Text style={styles.loadingTitle}>Loading...</Animated.Text>
      </View>
    </Animated.View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
  },
  animationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 500,
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  loadingTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'PremierLeague',
    letterSpacing: 1,
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: 20,
  },
});
