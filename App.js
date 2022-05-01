import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
