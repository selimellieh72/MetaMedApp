import Constants from 'expo-constants';
import { StyleSheet,  View , ImageBackground} from 'react-native';

import background from '../assets/back2.png'

export default function Background({children}) {
  return (
    <ImageBackground source={background} style={styles.image}>
        <View style={styles.container}>
            {children}
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      display:"flex",
      paddingHorizontal: 10,
    }
    ,
    image: {
      paddingTop: Constants.statusBarHeight,
      flex: 1,
      width: '100%',
    },
  });
  