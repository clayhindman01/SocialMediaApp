import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform, FlatList } from 'react-native';
import Navbar from './components/Navbar';
import Card from './components/card'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const renderItem = () => {
    return(
      <Card style={styles.cardView}/>
    )
  }
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Navbar />
        <FlatList
        data={[
          {
            id: 1,
            title: 'test'
          },
          {
            id: 2,
            title: 'test'
          },
          {
            id: 3,
            title: 'test'
          },
          {
            id: 4,
            title: 'test'
          },
        ]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ width: '90%' }}
      />
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cardView: {
    height: '75%',
  },
});
