// Import gradient background support
import { LinearGradient } from 'expo-linear-gradient';

// Import router hook for navigation
import { useRouter } from 'expo-router';

// Import React hooks
import { useEffect, useState } from 'react';

// Import common styles shared across screens
import { commonStyles } from '../styles/commonStyles';

// Import core React Native UI components
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput
} from 'react-native';

// Import gradient themes
import { GRADIENT_THEMES } from '../themes';
// Import custom hook to get current theme
import { loadGradient } from '../storage';
// Import navigation focus effect hook
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
  // Router instance used to move between screens
  const router = useRouter();

  // State variables for user input
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  // Update theme when screen is focused
  useFocusEffect(() => {
  loadGradient().then((savedTheme) => {
    if (savedTheme && GRADIENT_THEMES[savedTheme]) {
      setTheme(savedTheme);
    }
  });
});

  // State variable for current theme
  const [theme, setTheme] = useState('ocean');
  // Load saved theme on component mount
  useEffect(() => {
    loadGradient().then(saved => {
      if (saved) setTheme(saved);
    });
  }, []);

  // Function that runs when the button is pressed
  // It cleans input values and navigates to the Details screen
  const handleGoToDetails = () => {
    const safeName =
      name.trim().length > 0 ? name.trim() : 'Guest';

    const safeLastName =
      lastName.trim().length > 0 ? lastName.trim() : '';

    const safeCity =
      city.trim().length > 0 ? city.trim() : '';

    const safeAge =
      age.trim().length > 0 ? age.trim() : '';

    // Navigate to the details page and pass parameters
    router.push({
      pathname: '/details',
      params: {
        name: safeName,
        lastName: safeLastName,
        city: safeCity,
        age: safeAge,
      },
    });
  };

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
          Welcome to the Home Screen
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

        {/* Button to move to Details screen */}
        <Button
          title="Go to Details"
          onPress={handleGoToDetails}
        />
        {/* Button to move to Storage Demo */}
        <Button
          title="Open Storage Demo"
          onPress={() => router.push('/storeDetails')}
        />
      </ScrollView>
    </LinearGradient>
  );
  
}


