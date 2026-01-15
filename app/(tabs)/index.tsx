import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <LinearGradient colors={['#233b4b', '#5d8994']} style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Welcome to the app!</Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#233b4b',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
    textAlign: 'left',
  },
    subtitle: {
    fontSize: 16,
    color: '#a4bcce',
    marginTop: 6,
  },
})