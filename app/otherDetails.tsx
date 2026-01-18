import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import {
  Image,
  ScrollView,
  Text
} from 'react-native';
// Import common styles shared across screens
import { commonStyles } from './styles/commonStyles';

export default function DetailsScreen() {
  // Retrieve parameters from navigation
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

  // Clean and format values for display
  const displayName =
    typeof nameParam === 'string' &&
    nameParam.trim().length > 0
      ? nameParam.trim()
      : 'Guest';

  const displayLastName =
    typeof lastNameParam === 'string'
      ? lastNameParam.trim()
      : '';

  const displayCity =
    typeof cityParam === 'string'
      ? cityParam.trim()
      : '';

  const displayAge =
    typeof ageParam === 'string'
      ? ageParam.trim()
      : '';

  return (
    <LinearGradient
      colors={['#233b4b', '#5d8994']}
      style={commonStyles.container}
    >
      <ScrollView contentContainerStyle={commonStyles.container}>
        {/* Display user information */}
        <Text style={commonStyles.title}>
          Hello, {displayName}!
        </Text>

        <Text style={commonStyles.subtitle}>
          Last Name: {displayLastName}
        </Text>

        <Text style={commonStyles.subtitle}>
          City: {displayCity}
        </Text>

        <Text style={commonStyles.subtitle}>
          Age: {displayAge}
        </Text>

        {/* Decorative image */}
        <Image
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F414171%2Fpexels-photo-414171.jpeg',
          }}
          style={commonStyles.image}
        />

        <Text style={commonStyles.subtitle}>
          This is the other details screen.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}
