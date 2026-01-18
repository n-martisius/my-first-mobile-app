import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Button,
  Image,
  ScrollView,
  Text
} from 'react-native';
// Import common styles shared across screens
import { commonStyles } from './styles/commonStyles';

export default function DetailsScreen() {
  // Router instance for navigation
  const router = useRouter();

  // Retrieve parameters passed from the Home screen
  const params = useLocalSearchParams<{
    name?: string;
    lastName?: string;
    city?: string;
    age?: string;
  }>();

  const nameParam = params.name;
  const lastNameParam = params.lastName;
  const cityParam = params.city;
  const ageParam = params.age;

  // Ensure a valid name is displayed
  const displayName =
    typeof nameParam === 'string' &&
    nameParam.trim().length > 0
      ? nameParam.trim()
      : 'Guest';

  // Navigate to the third screen with the same data
  const handleGoToOtherDetails = () => {
    router.push({
      pathname: '/otherDetails',
      params: {
        name: nameParam,
        lastName: lastNameParam,
        city: cityParam,
        age: ageParam,
      },
    });
  };

  return (
    <LinearGradient
      colors={['#233b4b', '#5d8994']}
      style={commonStyles.container}
    >
      <ScrollView contentContainerStyle={commonStyles.container}>
        {/* Greeting text */}
        <Text style={commonStyles.title}>
          Hello, {displayName}!
        </Text>

        {/* Image for visual styling */}
        <Image
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F414171%2Fpexels-photo-414171.jpeg',
          }}
          style={commonStyles.image}
        />

        <Text style={commonStyles.subtitle}>
          This is the details screen.
        </Text>

        {/* Button to go to the final details screen */}
        <Button
          title="Go to Other Details"
          onPress={handleGoToOtherDetails}
        />
      </ScrollView>
    </LinearGradient>
  );
}

