// Import gradient background support
import { LinearGradient } from 'expo-linear-gradient';

// Import router hook for navigation
import { useRouter } from 'expo-router';

// Import React hooks
import { useEffect, useState } from 'react';

// Import common styles shared across screens
import { commonStyles } from './styles/commonStyles';

// Import core React Native UI components
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput
} from 'react-native';

// Import AsyncStorage for persistent storage 
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import gradient themes
import { GRADIENT_THEMES } from './themes';
// Import custom hook to get current theme
import { loadGradient } from './storage';

export default function SaveScreen() {

   // State variable for current theme
  const [theme, setTheme] = useState('ocean');
  // Load saved theme on component mount
  useEffect(() => {
    loadGradient().then(saved => {
      if (saved) setTheme(saved);
    });
  }, []);
  // Router instance used to move between screens
  const router = useRouter();

  // State variables for user input
  const [name, setName] = useState('');
    const [savedName, setSavedName] = useState('');
  const [lastName, setLastName] = useState('');
    const [savedLastName, setSavedLastName] = useState('');
  const [city, setCity] = useState('');
    const [savedCity, setSavedCity] = useState('');
  const [age, setAge] = useState('');   
    const [savedAge, setSavedAge] = useState('');

  // Function that runs when the button is pressed
  // It cleans input values and navigates to the Details screen

  useEffect(() => {
    // Load saved name from AsyncStorage on component mount
    const loadDetails = async () => {
      try {
        const storedName = await AsyncStorage.getItem('savedName');
        const storedLastName = await AsyncStorage.getItem('savedLastName');
        const storedCity = await AsyncStorage.getItem('savedCity');
        const storedAge = await AsyncStorage.getItem('savedAge');
        if (storedName) {
          setSavedName(storedName);
        }
        if (storedLastName) {
          setSavedLastName(storedLastName);
        }
        if (storedCity) {
          setSavedCity(storedCity);
        }
        if (storedAge) {
          setSavedAge(storedAge);
        }
      }
        catch (error) {
        console.error('Failed to load details.', error);
      }
    };
    loadDetails();
  }, []);

const handleSaveDetails = async () => {
    try {
      await AsyncStorage.setItem('savedName', name);
      await AsyncStorage.setItem('savedLastName', lastName);
      await AsyncStorage.setItem('savedCity', city);
      await AsyncStorage.setItem('savedAge', age);
      setSavedName(name);
      setSavedLastName(lastName);
      setSavedCity(city);
      setSavedAge(age);
    } catch (error) {
      console.error('Failed to save details.', error);
    }
  }

const handleClearDetails = async () => {
    try {
      await AsyncStorage.removeItem('savedName');
      await AsyncStorage.removeItem('savedLastName');
      await AsyncStorage.removeItem('savedCity');
      await AsyncStorage.removeItem('savedAge');
      setSavedName('');
      setSavedLastName('');
      setSavedCity('');
      setSavedAge('');
    } catch (error) {
      console.error('Failed to clear details.', error);
    }
  }

  return (
    // Gradient background wrapper
    <LinearGradient
      colors={GRADIENT_THEMES[theme] as [string, string, ...string[]]}
            style={commonStyles.container}
    >
      {/* Scrollable content area */}
      <ScrollView contentContainerStyle={commonStyles.container}>
        {/* Page title */}
        <Text style={commonStyles.title}>
          Local storage demo
        </Text>

        {/* Display image */}
        <Image
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F531880%2Fpexels-photo-531880.jpeg',
          }}
          style={commonStyles.image}
        />

        {/* Input fields for user information */}
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your city"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your age"
          value={age}
          onChangeText={setAge}
        />
        {/* Buttons to save and clear name in AsyncStorage */}
        <Button
          title="Save Details"
          onPress={handleSaveDetails}
        />
        <Button
          title="Clear Saved Details"
          onPress={handleClearDetails}
        />

        <Text style={commonStyles.subtitle}>
          Saved Name: {savedName ? savedName : 'None'}
        </Text>
        <Text style={commonStyles.subtitle}>
          Saved Last Name: {savedLastName ? savedLastName : 'None'}
        </Text>
        <Text style={commonStyles.subtitle}>
          Saved City: {savedCity ? savedCity : 'None'}
        </Text>
        <Text style={commonStyles.subtitle}>
          Saved Age: {savedAge ? savedAge : 'None'}
        </Text>
      </ScrollView>
    </LinearGradient>
  );
  
}


