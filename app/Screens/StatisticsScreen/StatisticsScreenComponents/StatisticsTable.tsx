import React, { useRef, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeTouchEvent,
  useWindowDimensions,
} from 'react-native';
import { renderImage } from '../../../Helpers/statisticsHelpers';
import { StatisticsBackground } from '../../../../assets';
import { contentHeightCalculationWithHeader } from '../../../Helpers/systemHelpers';

interface StatisticsTableProps {
  backgroundColor: string;
  standings: any[];
  onTouchStart: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onTouchEnd: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const StatisticsTable: React.FC<StatisticsTableProps> = ({
  backgroundColor,
  standings,
  onTouchStart,
  onTouchEnd,
}) => {
  const flatListRef = useRef(null);
  const imageContainerWidth = 30;
  const imageContainerHeight = 30;
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
  }, [standings]);

  return (
    <View
      style={[
        styles.scoresTable,
        { height: contentHeightCalculationWithHeader(height), width: width },
      ]}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Image source={StatisticsBackground} style={styles.backgroundImage}></Image>
      <View style={[styles.tableRow, { borderBottomColor: backgroundColor }]}>
        <View style={styles.positionTitleContainer}>
          <Text style={styles.positionTitle}>P</Text>
        </View>
        <View style={styles.shortNameWithIconContainer}>
          <Text style={styles.shortNameWithIcon}>Team</Text>
        </View>
        <View style={styles.playedGamesTitleContainer}>
          <Text style={styles.playedGamesTitle}>P</Text>
        </View>
        <View style={styles.wonTitleContainer}>
          <Text style={styles.wonTitle}>W</Text>
        </View>
        <View style={styles.drawTitleContainer}>
          <Text style={styles.drawTitle}>D</Text>
        </View>
        <View style={styles.lostTitleContainer}>
          <Text style={styles.lostTitle}>L</Text>
        </View>
        <View style={styles.goalsForTitleContainer}>
          <Text style={styles.goalsForTitle}>GF</Text>
        </View>
        <View style={styles.goalsAgainstTitleContainer}>
          <Text style={styles.goalsAgainstTitle}>GA</Text>
        </View>
        <View style={styles.goalDifferenceTitleContainer}>
          <Text style={styles.goalDifferenceTitle}>GD</Text>
        </View>
        <View style={styles.pointsTitleContainer}>
          <Text style={styles.pointsTitle}>Pts</Text>
        </View>
      </View>
      <FlatList
        ref={flatListRef}
        style={styles.tableInfo}
        data={standings && standings[0]?.table}
        keyExtractor={(item) => item.team.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.tableRow, { borderBottomColor: backgroundColor }]}
            key={item.team.id.toString()}
            activeOpacity={0.8}
          >
            <View style={styles.positionTitleContainer}>
              <Text style={styles.position}>{item.position}</Text>
            </View>
            <View style={styles.imageContainer}>
              {renderImage(item?.team?.crest, imageContainerWidth, imageContainerHeight)}
            </View>
            <View style={styles.shortNameContainer}>
              <Text style={styles.shortName}>{item.team.tla}</Text>
            </View>
            <View style={styles.playedGamesTitleContainer}>
              <Text style={styles.playedGames}>{item.playedGames}</Text>
            </View>
            <View style={styles.wonTitleContainer}>
              <Text style={styles.won}>{item.won}</Text>
            </View>
            <View style={styles.drawTitleContainer}>
              <Text style={styles.draw}>{item.draw}</Text>
            </View>
            <View style={styles.lostTitleContainer}>
              <Text style={styles.lost}>{item.lost}</Text>
            </View>
            <View style={styles.goalsForTitleContainer}>
              <Text style={styles.goalsFor}>{item.goalsFor}</Text>
            </View>
            <View style={styles.goalsAgainstTitleContainer}>
              <Text style={styles.goalsAgainst}>{item.goalsAgainst}</Text>
            </View>
            <View style={styles.goalDifferenceTitleContainer}>
              <Text style={styles.goalDifference}>{item.goalDifference}</Text>
            </View>
            <View style={styles.pointsTitleContainer}>
              <Text style={styles.points}>{item.points}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

interface ContainerStyle {
  display: 'flex';
  justifyContent: 'center';
  alignItems: 'center';
}
interface TitleStyle {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

interface ValueStyle {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  color: string;
}

const titleStyle: TitleStyle = {
  fontFamily: 'PremierLeague',
  fontSize: 16,
  lineHeight: 25,
};

const valueStyle: ValueStyle = {
  fontFamily: 'PremierLeague',
  fontSize: 14,
  lineHeight: 25,
  color: 'rgba(0, 0, 0, 0.8)',
};

const rawContainerStyle: ContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  scoresTable: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  tableRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomWidth: 1,
    height: 35,
  },
  positionTitleContainer: {
    ...rawContainerStyle,
    width: '8%',
  },
  shortNameWithIconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 5,
    width: '20%',
  },
  playedGamesTitleContainer: {
    ...rawContainerStyle,
    width: '8%',
  },
  wonTitleContainer: {
    ...rawContainerStyle,
    width: '8%',
  },
  drawTitleContainer: {
    ...rawContainerStyle,
    width: '8%',
  },
  lostTitleContainer: {
    ...rawContainerStyle,
    width: '8%',
  },
  goalsForTitleContainer: {
    ...rawContainerStyle,
    width: '10%',
  },
  goalsAgainstTitleContainer: {
    ...rawContainerStyle,
    width: '10%',
  },
  goalDifferenceTitleContainer: {
    ...rawContainerStyle,
    width: '10%',
  },
  pointsTitleContainer: {
    ...rawContainerStyle,
    width: '10%',
  },
  tableInfo: {
    width: '100%',
    height: '100%',
  },
  positionTitle: {
    ...titleStyle,
  },
  shortNameWithIcon: {
    ...titleStyle,
  },
  playedGamesTitle: {
    ...titleStyle,
  },
  wonTitle: {
    ...titleStyle,
  },
  drawTitle: {
    ...titleStyle,
  },
  lostTitle: {
    ...titleStyle,
  },
  goalsForTitle: {
    ...titleStyle,
  },
  goalsAgainstTitle: {
    ...titleStyle,
  },
  goalDifferenceTitle: {
    ...titleStyle,
  },
  pointsTitle: {
    ...titleStyle,
  },
  position: {
    ...valueStyle,
  },
  imageContainer: {
    ...rawContainerStyle,
    width: '10%',
    height: 30,
  },
  shortNameContainer: {
    ...rawContainerStyle,
    width: '10%',
  },
  crest: {
    width: '100%',
    height: '100%',
  },
  shortName: {
    ...valueStyle,
  },
  playedGames: {
    ...valueStyle,
  },
  won: {
    ...valueStyle,
  },
  draw: {
    ...valueStyle,
  },
  lost: {
    ...valueStyle,
  },
  goalsFor: {
    ...valueStyle,
  },
  goalsAgainst: {
    ...valueStyle,
  },
  goalDifference: {
    ...valueStyle,
  },
  points: {
    ...valueStyle,
  },
});

export default StatisticsTable;
