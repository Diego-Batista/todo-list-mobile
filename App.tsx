import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { HomeScreen } from './src/screens';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      {fontsLoaded ? (
        <HomeScreen />
      ) : (
        <Loading />
      )}
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
    </>
  );
}
