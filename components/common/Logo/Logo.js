import React from 'react';
import { View, Text, Image} from 'react-native';
import { COLORS, SHADOWS, SIZES, IMAGES, FONT, ICONS } from '../../../constants'
import { styles } from './logo.style';

const Logo = () => {

  return (
      <View style={styles.logoSection}>
        <Image
          source={IMAGES.LOGO}
          style={styles.logo}
        />
      </View>
  );
};

export default Logo;
