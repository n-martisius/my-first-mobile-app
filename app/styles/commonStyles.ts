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

  // General text styling
  text: {
    color: '#e0e0e0',
    fontSize: 16,
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
  postContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
  },

  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },

  postBody: {
    fontSize: 16,
    color: '#555555',
  },
  comment: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: '100%',
  },
  commentAuthor: {
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#222222',
  },  
  link: {
    color: '#add8e6',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
