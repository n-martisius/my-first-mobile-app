// Import gradient background support
import { LinearGradient } from 'expo-linear-gradient';

// Import router hook for navigation
import { useRouter } from 'expo-router';

// Import React hook for state
import { useState } from 'react';

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

export default function HomeScreen() {
  // Router instance used to move between screens
  const router = useRouter();

  // State variables for user input
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');

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
      colors={['#233b4b', '#5d8994']}
      style={commonStyles.container}
    >
      {/* Scrollable content area */}
      <ScrollView contentContainerStyle={commonStyles.container}>
        {/* Page title */}
        <Text style={commonStyles.title}>
          Welcome to Home
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
      </ScrollView>
    </LinearGradient>
  );
}

