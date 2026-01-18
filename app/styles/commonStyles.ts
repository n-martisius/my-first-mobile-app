import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  // Shared screen container
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },

  // Large page title
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },

  // Smaller descriptive text
  subtitle: {
    fontSize: 16,
    color: '#a4bcce',
    marginTop: 6,
  },

  // Shared image styling
  image: {
    width: '80%',
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },

  // Input field styling (used on Home screen)
  input: {
    height: 40,
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(151, 189, 206, 0.2)',
    color: '#ffffff',
  },
});
