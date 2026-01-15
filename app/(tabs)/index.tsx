import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function ComponentDemo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const birthYear = new Date().getFullYear() - parseInt(age || '0', 10);
  return (
    <LinearGradient colors={['#233b4b', '#5d8994']} style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Image  
      source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F531880%2Fpexels-photo-531880.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-531880.jpg%26fm%3Djpg&f=1&nofb=1&ipt=6f7c77d30b48a7ca1c715e434ccb8669353e3357c4049fc5c2d7e11a80f197e2'}}
      style={styles.image}
      />
      <TextInput
      style={styles.input}
      placeholder="Your name"
      value = {name}
      onChangeText={setName}
      />
      <Button title = "Say Hello" onPress={() => alert(`Hello, ${name || 'Guest'}!`)} />
      <Text style={styles.note}>Type your name and press the button!</Text>
      <TextInput
      style={styles.input}
      placeholder="Your age"
      value = {age}
      onChangeText={setAge}
      />

      <Button title = "When were you born?" onPress={() => alert(`You were born in ${birthYear}.`)} />
      <Text style={styles.note}>Type your age and press the button!</Text>
      </ScrollView>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
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
  image: {
    width: '80%',
    height: 150,
    borderRadius: 10,
    marginVertical:10,
  },
  input: {
    height: 40,
    borderColor: '#ffffff',
    color: '#ffffff',
    backgroundColor: 'rgba(151, 189, 206, 0.2)',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginVertical: 10,
  },
  note: {
    marginTop: 20,
    fontSize: 14,
    color: '#a4bcce',
  }
})