import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Loading } from './src/components/Loading';
import { HomeScreen } from './src/screens';
import { theme } from './src/theme';

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
      {!fontsLoaded ? (
        <HomeScreen />
      ) : (
        <Loading />
      )}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
