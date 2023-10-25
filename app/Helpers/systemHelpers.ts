import { Platform } from 'react-native';
import { tabsHeight, headerHeight, headerWithTitleHeight, androidCompensator } from '../../config';

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const contentHeightCalculation = (height: number) => {
  const contentHeight = isIOS()
    ? height - headerHeight - tabsHeight
    : height - headerHeight - tabsHeight + androidCompensator;
  return contentHeight;
};

export const contentHeightCalculationWithHeader = (height: number) => {
  const contentHeight = contentHeightCalculation(height) - headerWithTitleHeight;
  return contentHeight;
};
