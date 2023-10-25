import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
const triangleIcon = () => (
  <View style={styles.iconContainer}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      className="si-glyph si-glyph-circle-triangle-down"
      viewBox="0 0 17 17"
    >
      <Path
        fill="#434343"
        fillRule="evenodd"
        d="M1 8.041a8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-16 0ZM12.846 6c.205.185.205.772 0 .96l-3.467 4.9a.568.568 0 0 1-.746 0l-3.479-4.9c-.205-.187-.205-.774 0-.96h7.692Z"
        className="si-glyph-fill"
      />
    </Svg>
  </View>
);
export default triangleIcon;

const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
  },
});
