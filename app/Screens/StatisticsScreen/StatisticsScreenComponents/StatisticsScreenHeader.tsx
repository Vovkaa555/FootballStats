import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { HeaderBackground, TriangleIcon } from '../../../../assets';
import { processCompetitionSeason } from '../../../Helpers/statisticsHelpers';
import { useAppContext } from '../../../Context/AppContext';

const StatisticsScreenHeader: React.FC<{
  backgroundColor: string;
  competitionData: any;
  showSeasonsModal: boolean;
  setShowSeasonsModal: (show: boolean) => void;
  setShowSidebar: (show: boolean) => void;
}> = ({
  backgroundColor,
  competitionData,
  showSeasonsModal,
  setShowSeasonsModal,
  setShowSidebar,
}) => {
  const { competitionSeason } = useAppContext();
  const chosenSeasons = processCompetitionSeason(competitionSeason);
  const toggleSeasonsModal = () => {
    setShowSeasonsModal(!showSeasonsModal);
    setShowSidebar(false);
  };

  return (
    <View style={[styles.titleRowContainer, { backgroundColor: backgroundColor }]}>
      <Image source={HeaderBackground} style={styles.headerBackground} />
      <View style={styles.titleImageRowContainer}>
        <Image
          source={{ uri: competitionData?.competition?.emblem }}
          style={styles.label}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.competitionName}>{competitionData?.competition?.name}</Text>
        <TouchableOpacity style={styles.seasonsRow} onPress={toggleSeasonsModal}>
          <Text style={styles.competitionSeason}>Season {chosenSeasons}</Text>
          <TriangleIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleRowContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 3,
    height: 60,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.4,
    resizeMode: 'stretch',
  },
  titleImageRowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  label: {
    width: '100%',
    height: 50,
  },
  titleContainer: {
    width: '80%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  competitionName: {
    fontSize: 20,
    lineHeight: 30,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: 'PremierLeague',
  },
  seasonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  competitionSeason: {
    fontSize: 16,
    lineHeight: 26,
    paddingRight: 5,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: 'PremierLeagueW01-Bold',
    letterSpacing: -0.2,
  },
});

export default StatisticsScreenHeader;
