import React from 'react';
import { Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated';
import { useAppContext } from '../../../Context/AppContext';
import { renderImage } from '../../../Helpers/statisticsHelpers';
import { StatisticsSidebarBackground } from '../../../../assets';

const StatisticsSidebar: React.FC<{
  backgroundColor: string;
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
}> = ({ backgroundColor, showSidebar, setShowSidebar }) => {
  const { sortedCompetitionsList, setCompetitionSeason, competitionsName, setCompetitionsName } =
    useAppContext();
  const imageContainerWidth = 45;
  const imageContainerHeight = 45;

  const handleCompetitionNameChange = (competitionCode: string) => {
    setCompetitionsName(competitionCode);
    setCompetitionSeason(null);
    setShowSidebar(false);
  };

  if (!showSidebar) return null;

  return (
    <Animated.View
      style={[styles.sidebarContainer, { backgroundColor: backgroundColor }]}
      entering={FadeInLeft.duration(200)}
      exiting={FadeOutLeft.duration(200)}
    >
      <Image source={StatisticsSidebarBackground} style={styles.modalBackground} />
      <FlatList
        data={sortedCompetitionsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.competitionItem, competitionsName === item.code && styles.activeItem]}
            onPress={() => handleCompetitionNameChange(item.code)}
          >
            {renderImage(item.emblem, imageContainerWidth, imageContainerHeight)}
            <Text
              style={[
                styles.competitionName,
                competitionsName === item.code && styles.activeCompetitionName,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    height: '100%',
    zIndex: 2,
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    opacity: 0.1,
  },
  competitionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  activeItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  flag: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  competitionName: {
    fontSize: 14,
    paddingLeft: 10,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: 'PremierLeague',
    lineHeight: 20,
  },
  activeCompetitionName: {
    color: 'white',
  },
});

export default StatisticsSidebar;
