import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

import { useAppContext } from '../../../Context/AppContext';
import { generateSeasonsArray } from '../../../Helpers/statisticsHelpers';
import { StatisticsModalBackground } from '../../../../assets';

const StatisticsChangeSeasonModal: React.FC<{
  backgroundColor: string;
  showSeasonsModal: boolean;
  setShowSeasonsModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ backgroundColor, showSeasonsModal, setShowSeasonsModal }) => {
  const { setCompetitionSeason } = useAppContext();
  const [activeSeason, setActiveSeason] = useState('2023-2024');
  const { competitionsName } = useAppContext();

  useEffect(() => {
    setActiveSeason('2023-2024');
  }, [competitionsName]);

  const generateSeasons = () => {
    const seasons = generateSeasonsArray();

    const handleSeasonPress = (season: string) => {
      const firstYear = season.split('-')[0];
      setCompetitionSeason(`?season=${firstYear}`);
      setShowSeasonsModal(false);
      setActiveSeason(season);
    };

    return seasons.map((season, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.seasonNumber, activeSeason === season && styles.activeSeason]}
        onPress={() => handleSeasonPress(season)}
      >
        <Text
          style={[
            styles.seasonTitle,
            {
              color: season === activeSeason ? 'white' : 'rgba(0, 0, 0, 0.8)',
            },
          ]}
        >
          {season}
        </Text>
      </TouchableOpacity>
    ));
  };

  if (!showSeasonsModal) return null;

  return (
    <Animated.View
      entering={FadeInUp.duration(200)}
      exiting={FadeOutUp.duration(200)}
      style={[styles.seasonsModal, { backgroundColor: backgroundColor }]}
    >
      <Image source={StatisticsModalBackground} style={styles.modalBackground} />
      {generateSeasons()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  seasonsModal: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: '100%',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.4,
    resizeMode: 'stretch',
  },
  seasonNumber: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeSeason: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  seasonTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'PremierLeague',
    letterSpacing: 0.5,
    lineHeight: 30,
    paddingVertical: 5,
  },
});

export default StatisticsChangeSeasonModal;
