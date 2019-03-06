// At the top of your file
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

// Later on in your component
async componentDidMount() {
  await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
}
