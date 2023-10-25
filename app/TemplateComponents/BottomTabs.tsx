import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LiveIcon, AllMatchesIcon, TeamsIcon, VideosIcon, StatisticsIcon } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../Context/AppContext';
import { tabsHeight } from '../../config';

interface BottomTabsProps {
  backgroundColor: string;
}

const BottomTabs: React.FC<BottomTabsProps> = ({ backgroundColor }) => {
  const navigation = useNavigation();
  const { activeTab, setActiveTab } = useAppContext();

  const handleTabPress = (tabId: number, screenName: never) => {
    setActiveTab(tabId);
    navigation.navigate(screenName);
  };

  return (
    <View style={[styles.tabsContainer, { height: tabsHeight }]}>
      <TouchableOpacity
        style={[
          styles.tabsButton,
          activeTab === 1 && (styles.activeTabButton, { backgroundColor: backgroundColor }),
        ]}
        onPress={() => handleTabPress(1, 'LiveScoreScreen' as never)}
      >
        <LiveIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabsButton,
          activeTab === 2 && (styles.activeTabButton, { backgroundColor: backgroundColor }),
        ]}
        onPress={() => handleTabPress(2, 'AllMatchesScreen' as never)}
      >
        <AllMatchesIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabsButton,
          activeTab === 3 && (styles.activeTabButton, { backgroundColor: backgroundColor }),
        ]}
        onPress={() => handleTabPress(3, 'TeamsScreen' as never)}
      >
        <TeamsIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabsButton,
          activeTab === 4 && (styles.activeTabButton, { backgroundColor: backgroundColor }),
        ]}
        onPress={() => handleTabPress(4, 'VideosScreen' as never)}
      >
        <VideosIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabsButton,
          activeTab === 5 && (styles.activeTabButton, { backgroundColor: backgroundColor }),
        ]}
        onPress={() => handleTabPress(5, 'StatisticsScreen' as never)}
      >
        <StatisticsIcon />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 3,
  },
  tabsButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '20%',
  },
  tabsButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    paddingTop: 5,
  },
  activeTabButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
