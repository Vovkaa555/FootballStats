import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { headerHeight } from '../../config';

const Header = ({ backgroundColor }) => {
  //console.log(backgroundColor);
  return (
    <SafeAreaView
      style={[styles.header, { height: headerHeight, backgroundColor: backgroundColor }]}
    ></SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    zIndex: 3,
  },
});

export default Header;
