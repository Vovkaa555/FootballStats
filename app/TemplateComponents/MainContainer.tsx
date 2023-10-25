import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { useAppContext } from '../Context/AppContext';

import { BottomTabs, Header } from './';
import { contentHeightCalculation } from '../Helpers/systemHelpers';
import { LoadingScreen } from '../Screens';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const { isLoading, backgroundColor } = useAppContext();
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {isLoading && <LoadingScreen />}
      <Header backgroundColor={backgroundColor} />
      <View style={[styles.content, { height: contentHeightCalculation(height), width: width }]}>
        {children}
      </View>
      <BottomTabs backgroundColor={backgroundColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default MainContainer;
