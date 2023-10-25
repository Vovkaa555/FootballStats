import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

export const renderImage = (
  imageURL: string,
  imageContainerWidth: number,
  imageContainerHeight: number,
) => {
  if (imageURL.endsWith('.svg')) {
    return (
      <View
        style={[
          styles.imageContainer,
          { width: imageContainerWidth, height: imageContainerHeight },
        ]}
      >
        <SvgFromUri uri={imageURL} style={styles.crest} width="100%" height="100%" />
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.imageContainer,
          { width: imageContainerWidth, height: imageContainerHeight },
        ]}
      >
        <Image source={{ uri: imageURL }} style={styles.crest} resizeMode="contain" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crest: {
    width: '100%',
    height: '100%',
  },
});

export const generateSeasonsArray = (): string[] => {
  const currentYear = new Date().getFullYear();
  const seasons: string[] = [];
  const numberOfSeasons = 4;

  for (let i = 0; i < numberOfSeasons; i++) {
    const startYear = currentYear - i;
    const endYear = startYear + 1;
    seasons.push(`${startYear}-${endYear}`);
  }

  return seasons;
};

export const processCompetitionSeason = (competitionSeason: string | null): string => {
  if (competitionSeason === null) {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    return `${currentYear}-${nextYear}`;
  } else {
    const year = competitionSeason.replace('?season=', '');
    const nextYear = parseInt(year) + 1;
    return `${year}-${nextYear}`;
  }
};
