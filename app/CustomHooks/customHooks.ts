import { Dimensions, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void, rangeOffset = 4) {
  let firstTouch = 0;

  function onTouchStart(e: NativeSyntheticEvent<NativeTouchEvent>) {
    firstTouch = e.nativeEvent.pageX;
  }

  function onTouchEnd(e: NativeSyntheticEvent<NativeTouchEvent>) {
    const positionX = e.nativeEvent.pageX;
    const range = windowWidth / rangeOffset;

    if (positionX - firstTouch > range) {
      onSwipeRight && onSwipeRight();
    } else if (firstTouch - positionX > range) {
      onSwipeLeft && onSwipeLeft();
    }
  }

  return { onTouchStart, onTouchEnd };
}
