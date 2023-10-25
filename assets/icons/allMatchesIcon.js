import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
const AllMatchesIcon = (props) => (
  <View style={styles.iconContainer}>
    <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
      <Path d="m45.514 45.727-39.765-.003c-.5 0-1.028.033-1.525-.008-1.068-.089-2.032-1.002-2.445-1.946-.261-.598-.37-1.271-.458-1.914l-.224-2.414c-.06-.998-.06-2.08-.18-3.048-.024-.2-.009-.418-.01-.62l-.03-5.964.036-15.696c.006-.235.06-.458.071-.688l.159-3.465.26-2.361C1.681 5.712 2.47 4.242 4.56 4.038l39.728.009c.552-.002 1.21-.068 1.742.083 1.986.564 2.398 2.057 2.669 3.949.169 1.181.238 2.367.301 3.557l.089 3.696c.018.572.052 1.076.053 1.666l-.004 16.384c-.003.247-.05.49-.054.735l-.101 4.172c-.083 1.492-.174 3.022-.453 4.493-.298 1.572-1.337 2.823-3.016 2.945Zm-39.93-40.3c-1.504.003-2.379.269-2.7 1.845-.207 1.017-.262 2.094-.335 3.128l-.097 1.66c-.016.259-.053.511-.06.772l-.009 2c-.007.21-.062.418-.067.633l-.003 19.252c.002.23.064.46.068.696l.016 2.21.251 3.258c.14 1.318.28 3.473 2.086 3.452l39.774-.015.496.024c1.375 0 1.917-.782 2.153-2.03.252-1.333.405-3.093.454-4.481l.097-4.743-.035-20.27-.415-4.862c-.175-1.203-.487-2.236-1.801-2.5-.305-.06-.652-.03-.964-.03L5.86 5.424c-.059 0-.233-.018-.275.002Z" />
      <Path d="m28.229 42.496-13.816-.053c-.241-.006-.47-.069-.705-.078l-2.3-.01c-.201-.004-.396-.032-.596-.043l-4.43-.14c-.175-.003-.368.001-.537-.046l-.034-.01c-.845-.222-.753-1.421-.81-2.11l-.083-.904-.377-8.141c-.008-.203-.048-.402-.055-.602l-.01-1.944c-.006-.245-.05-.486-.056-.73l.003-6.814c.004-.23.043-.455.053-.683l.248-5.673.414-5.753c.048-.402.145-.921.612-1.036l.049-.01c.178-.04.358-.033.54-.036l7.363-.298 5.68-.063c.27-.003.53-.05.796-.059l1.606-.003 7.59.003c.323.004.638.057.96.06l6.431.064 5.385.2c.61.017 1.564 0 2.087.08.796.12.745 2.06.789 2.635l.527 10.485c.007.224.053.445.058.667l-.002 6.669c-.005.238-.05.47-.057.706l-.011 1.144c-.006.164-.035.324-.04.487l-.068 2.534-.389 6.62c-.045.572-.06 1.188-.167 1.75-.197 1.034-.978.797-1.788.818l-2.611.069c-.169.006-.332.042-.5.052l-.887.015c-.17.006-.336.038-.505.042l-2.596.009c-.263.005-.515.067-.773.078l-6.988.052ZM23.578 8.668 6.5 9.098l-.3 5.167c.227.144.495.238.733.376 2.24 1.299 2.24 3.828 2.292 6.14l.042 6.892-.052 2.06-.184 2.072c-.209 1.6-1.048 3.035-2.573 3.715-.085.037-.278.073-.32.147l.358 5.076 4.234.14 13.57.2-.006-8.667c-.056-.053-.404-.058-.501-.075-3.806-.655-6.553-4.314-6.14-8.134a7.56 7.56 0 0 1 5.684-6.512c.174-.043.351-.078.53-.095.067-.006.4.006.428-.049.026-.05.001-8.241 0-8.89l-.717.007Zm2.126.005-.001 8.86c3.184.396 5.671 2.511 6.476 5.648 1.027 4.005-1.751 8.579-5.92 9.155-.12.017-.465.004-.55.062v8.69l14.25-.206 3.54-.147.368-5.1c-3.078-1.228-2.987-4.064-3.041-6.894-.005-.227-.043-.45-.048-.678l.086-9.126c.17-1.887.682-3.675 2.597-4.496.114-.048.237-.067.344-.128l-.314-5.267-17.787-.373ZM6.058 15.749l-.165 4.764c-.006.244-.051.484-.057.73l.001 6.943c.005.224.045.445.053.67l.056 2.48c.006.15.037.297.043.447l.024 1.666c.007.184.001.416.052.59.363-.164.64-.367.89-.681.767-1.037.774-2.474.83-3.71l.045-9.066-.04-.604c-.066-1.481-.11-3.526-1.732-4.23Zm37.866.035c-1.88 1.196-1.724 3.462-1.726 5.407l.002 6.372c.002 1.469-.105 4.333.721 5.615l.212.297c.25.286.465.426.797.602l.016-.008c.085-.75-.002-1.507.05-2.257l.164-3.254.004-7.354c-.005-.168-.041-.333-.047-.502l-.015-1.06-.178-3.858Zm-19.709 3.198c-4.956.899-6.947 6.657-3.322 10.327 1.007.966 2.03 1.403 3.393 1.729.014-.02.044-11.038-.011-12.044-.045-.016-.025-.015-.06-.012Zm1.466-.02.03 12.028c1.527-.32 2.364-.631 3.543-1.796.861-.945 1.495-2.11 1.677-3.388.466-3.266-1.932-6.46-5.25-6.843Z" />
      <Path d="M38.425 29.654c-1.035.056-1.037-1.099-1.18-1.864-.397-2.133-.359-3.578.031-5.664.121-.646.152-1.573.872-1.836.421-.018.88.424.837.86-.034.35-.208.727-.292 1.074-.447 1.851-.402 3.658-.006 5.515.154.72.62 1.515-.262 1.915ZM11.85 29.68c-1.154-.074-.69-1.182-.547-1.878.372-1.805.462-3.535.063-5.348-.098-.443-.45-1.21-.281-1.662l.011-.028c.106-.262.344-.402.616-.446.671.043.757.566.889 1.139l.277 1.409c.29 1.922.165 3.464-.232 5.357-.108.516-.138 1.38-.796 1.456Z" />
    </Svg>
  </View>
);
export default AllMatchesIcon;

const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
});
